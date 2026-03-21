import DOMPurify from 'dompurify';
import html2pdf from 'html2pdf.js';
import { marked } from 'marked';

// Use relative path - Vite proxy will forward /api to backend server
// This works for both localhost and Cloudflare tunnel
const API_BASE_URL = '/api';

// Helper to generate safe ID
const makeId = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '_');

export async function getOrGenerateSyllabus(subject: string) {
  const subjectId = makeId(subject);

  try {
    const response = await fetch(`${API_BASE_URL}/syllabus/${subjectId}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Syllabus API error:', response.status, errorText);
      throw new Error(`Failed to fetch syllabus: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("Backend fetch failed:", error);
    throw new Error("Failed to load syllabus. Check database seeded content.");
  }
}

export async function getOrGenerateLearningPath(
  subject: string,
  chapter: string,
  onProgress?: (status: string, percent: number) => void
) {
  if (onProgress) onProgress('Loading chapter content...', 50);
  const pathId = `${makeId(subject)}_${makeId(chapter)}`;

  try {
    const response = await fetch(`${API_BASE_URL}/learning-paths/${pathId}`);
    if (response.ok) {
      const data = await response.json();
      if (data.content) {
        if (onProgress) onProgress('Path loaded successfully!', 100);
        return {
          pdfUrl: data.pdf_url || '',
          content: data.content
        };
      }
    }
  } catch (error) {
    console.error("Backend fetch failed for learning paths:", error);
  }

  if (onProgress) onProgress('Content not found', 100);
  return { 
    pdfUrl: '', 
    content: `# Learning Path Not Found\n\nThe content for **${chapter}** could not be found in the database. Ensure the Markdown files are properly seeded.` 
  };
}

export async function getOrGeneratePracticeTests(subject: string, chapter: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/practice-tests?subject=${encodeURIComponent(subject)}&chapter=${encodeURIComponent(chapter)}`);
    if (response.ok) {
      const tests = await response.json();
      if (tests && tests.length > 0) return tests;
    }
  } catch (error) {
    console.error("Backend fetch failed for practice tests:", error);
  }

  // Return empty if not found
  return [];
}

