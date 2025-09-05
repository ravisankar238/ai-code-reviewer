
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const buildPrompt = (code: string, language: string): string => {
  return `
Please act as an expert senior software engineer and perform a thorough code review.

**Language:** ${language}

**Code Snippet:**
\`\`\`${language}
${code}
\`\`\`

**Review Focus:**
Provide a comprehensive review in Markdown format. Cover the following aspects:
1.  **Overall Impression:** A brief summary of the code's quality and purpose.
2.  **Bugs & Logic Errors:** Identify any potential bugs, logical flaws, or edge cases that might not be handled correctly.
3.  **Performance:** Suggest optimizations to improve execution speed or resource usage.
4.  **Security:** Point out any potential security vulnerabilities (e.g., injection attacks, data exposure).
5.  **Readability & Style:** Comment on code style, naming conventions, clarity, and adherence to language-specific best practices.
6.  **Refactoring Suggestions:** Provide specific, actionable examples of how the code could be improved for better structure, maintainability, and elegance.
`;
};

export const reviewCode = async (code: string, language: string): Promise<string> => {
  try {
    const prompt = buildPrompt(code, language);
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    if (!response || !response.text) {
        throw new Error("Received an empty response from the API.");
    }

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to get code review: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the Gemini API.");
  }
};
