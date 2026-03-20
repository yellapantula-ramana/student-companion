import { GoogleGenAI, Type } from '@google/genai';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import html2pdf from 'html2pdf.js';

// Use relative path - Vite proxy will forward /api to backend server
// This works for both localhost and Cloudflare tunnel
const API_BASE_URL = '/api';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Helper to generate safe ID
const makeId = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '_');

interface GenerateContentConfig {
  responseMimeType?: string;
  responseSchema?: object;
  [key: string]: unknown;
}

async function generateWithRetry(prompt: string, config: GenerateContentConfig, retries = 3): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      return await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: config
      });
    } catch (error: any) {
      if ((error.message.includes('429') || error.message.includes('RESOURCE_EXHAUSTED')) && i < retries - 1) {
        const delay = Math.pow(2, i) * 1000;
        console.warn(`Rate limit hit, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
}

export async function getOrGenerateSyllabus(subject: string) {
  const subjectId = makeId(subject);

  try {
    const response = await fetch(`${API_BASE_URL}/syllabus?id=${subjectId}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Syllabus API error:', response.status, errorText);
      throw new Error(`Failed to fetch syllabus: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error: any) {
    console.warn("Backend fetch failed, generating new syllabus...", error);
    throw error;
  }

  // Generate Syllabus
  const prompt = `You are an expert CBSE curriculum designer. Generate the complete, latest Class 10 syllabus for ${subject}.
Ensure all chapters match the official NCERT/CBSE Class 10 textbook.`;

  const result = await generateWithRetry(prompt, {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        subject: { type: Type.STRING },
        chapters: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subtopics: { type: Type.ARRAY, items: { type: Type.STRING } },
              difficulty: { type: Type.STRING, description: "Easy, Medium, or Hard" }
            },
            required: ["title", "subtopics", "difficulty"]
          }
        }
      },
      required: ["subject", "chapters"]
    }
  });

  const syllabusData = JSON.parse(result.response.text() || "{}");

  // Save to Backend
  try {
    await fetch(`${API_BASE_URL}/syllabus`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: subjectId,
        subject: subject,
        chapters: syllabusData.chapters
      })
    });
  } catch (error) {
    console.error("Failed to save syllabus to backend", error);
  }

  return syllabusData.chapters;
}

export async function getOrGenerateLearningPath(
  subject: string,
  chapter: string,
  onProgress?: (status: string, percent: number) => void
) {
  if (onProgress) onProgress('Checking existing paths...', 10);
  const pathId = `${makeId(subject)}_${makeId(chapter)}`;

  try {
    const response = await fetch(`${API_BASE_URL}/learning-paths?id=${pathId}`);
    if (response.ok) {
      const data = await response.json();
      if (data.is_generated && data.content) {
        if (onProgress) onProgress('Found existing path!', 100);
        return {
          pdfUrl: data.pdf_url,
          content: data.content
        };
      }
    }
  } catch (error) {
    console.warn("Backend fetch failed", error);
  }

  if (onProgress) onProgress('Generating content with AI...', 30);
  const prompt = `You are an expert CBSE Class 10 ${subject} teacher. Create a comprehensive, structured learning path for the chapter: "${chapter}".
Format the output in clean Markdown. Use LaTeX enclosed in $$ for block equations and $ for inline math.
Structure the document exactly as follows:
# ${chapter} - Learning Path
## 1. Concept Introduction
## 2. Micro-topic Breakdown
## 3. Concept Explanations
## 4. Guided Examples
## 5. Practice Questions
## 6. Exam-Oriented Preparation
## 7. Revision Notes
Do not include any conversational filler. Output only the Markdown.`;

  const result = await generateWithRetry(prompt, {});
  const markdownContent = result.response.text() || "";

  if (onProgress) onProgress('Formatting document...', 60);
  const rawHtml = await marked.parse(markdownContent);
  const cleanHtml = DOMPurify.sanitize(rawHtml); // Sanitize HTML to prevent XSS attacks

  const container = document.createElement('div');
  container.innerHTML = cleanHtml;
  container.className = 'markdown-content';
  document.body.appendChild(container);

  if (onProgress) onProgress('Converting to PDF...', 80);
  const opt = {
    margin: 10,
    filename: `${makeId(chapter)}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
  };

  const pdfBlob = await html2pdf().set(opt).from(container).output('blob');
  document.body.removeChild(container);

  if (onProgress) onProgress('Saving to local storage...', 90);

  let pdfUrl = '';
  try {
    const formData = new FormData();
    formData.append('pdf', pdfBlob, `${makeId(chapter)}.pdf`);
    const uploadRes = await fetch(`${API_BASE_URL}/save-pdf`, {
      method: 'POST',
      body: formData
    });
    if (uploadRes.ok) {
      const uploadData = await uploadRes.json();
      pdfUrl = uploadData.pdfUrl;
    }
  } catch (error) {
    console.error("Failed to upload PDF", error);
    pdfUrl = URL.createObjectURL(pdfBlob);
  }

  // Save metadata
  try {
    await fetch(`${API_BASE_URL}/learning-paths`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: pathId,
        subject,
        chapter,
        content: markdownContent,
        pdf_url: pdfUrl,
        is_generated: true
      })
    });
  } catch (error) {
    console.error("Failed to save learning path metadata", error);
  }

  if (onProgress) onProgress('Complete!', 100);
  return { pdfUrl, content: markdownContent };
}

export async function getOrGeneratePracticeTests(subject: string, chapter: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/practice-tests?subject=${encodeURIComponent(subject)}&chapter=${encodeURIComponent(chapter)}`);
    if (response.ok) {
      const tests = await response.json();
      if (tests && tests.length > 0) return tests;
    }
  } catch (error) {
    console.warn("Backend fetch failed", error);
  }

  const prompt = `You are an expert CBSE examiner. Generate exactly 4 practice tests for Class 10 ${subject}, Chapter: "${chapter}".
Output strictly as a JSON array of 4 objects with "questions" array. Each question has "type", "question", "options" (for MCQ), "answer", "explanation".`;

  const result = await generateWithRetry(prompt, {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING },
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                answer: { type: Type.STRING },
                explanation: { type: Type.STRING }
              },
              required: ["type", "question", "answer", "explanation"]
            }
          }
        },
        required: ["questions"]
      }
    }
  });

  const generatedTests = JSON.parse(result.response.text() || "[]");

  const testsToSave = generatedTests.map((test: any, index: number) => ({
    id: `${makeId(subject)}_${makeId(chapter)}_test${index + 1}`,
    subject,
    chapter,
    test_id: `test${index + 1}`,
    questions: test.questions
  }));

  try {
    await fetch(`${API_BASE_URL}/practice-tests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testsToSave)
    });
  } catch (error) {
    console.error("Failed to save practice tests", error);
  }

  return testsToSave;
}
