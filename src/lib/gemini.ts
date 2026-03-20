import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 1. AI Tutor Chat Instance
export const createTutorChat = () => {
  return ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction:
        "You are an expert CBSE Class 10 tutor. Your goal is to guide the student to the answer using the Socratic method. DO NOT give the direct answer immediately. 1. Acknowledge the student's query. 2. Break down the concept into simple steps. 3. Ask a guiding question to check understanding. Keep the tone encouraging. Use analogies if the student's mastery level is low.",
    },
  });
};

// 2. Question Generator
export async function generateQuestions(topic: string, difficulty: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate 3 CBSE Class 10 questions for the topic: ${topic}. Difficulty: ${difficulty}. Type: MCQ. Include the marking scheme and ideal answer for each.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            question: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            correctAnswer: { type: Type.STRING },
            explanation: { type: Type.STRING },
          },
          required: ["id", "question", "options", "correctAnswer", "explanation"],
        },
      },
      temperature: 0.7,
    },
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse generated questions", e);
    return [];
  }
}

// 3. Answer Evaluator (for Subjective questions - if needed later)
export async function evaluateAnswer(
  question: string,
  idealAnswer: string,
  studentAnswer: string,
  totalMarks: number
) {
  const prompt = `
    Question: ${question}
    Total Marks: ${totalMarks}
    Ideal Answer: ${idealAnswer}
    
    Student Answer: ${studentAnswer}
    
    Evaluate step-by-step.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      systemInstruction:
        "You are a strict CBSE Class 10 examiner. Evaluate the student's answer against the ideal rubric. Award step marks. Classify mistakes strictly as: 'Conceptual', 'Calculation', 'Interpretation', or 'None'.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          marks_awarded: { type: Type.NUMBER },
          total_marks: { type: Type.NUMBER },
          mistake_type: { type: Type.STRING },
          step_by_step_feedback: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          improvement_suggestion: { type: Type.STRING },
        },
        required: [
          "marks_awarded",
          "total_marks",
          "mistake_type",
          "step_by_step_feedback",
          "improvement_suggestion",
        ],
      },
      temperature: 0.2,
    },
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Failed to parse evaluation", e);
    return null;
  }
}
