import { GoogleGenAI } from "@google/genai";
import { ScriptType, AppContent, Language } from '../types';

// Helper to get AI instance safely
const getAiInstance = () => {
  if (!process.env.API_KEY) return null;
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateRealEstateScript = async (type: ScriptType, context: string, lang: Language = 'en'): Promise<string> => {
  const ai = getAiInstance();
  
  if (!ai) {
    return getDefaultScript(type);
  }

  try {
    const prompt = `
      Act as a world-class real estate coach.
      Write a short, punchy, and effective ${type} script for a real estate agent.
      
      Language: ${lang === 'en' ? 'English' : lang === 'es' ? 'Spanish' : lang === 'de' ? 'German' : 'French'}
      Context: ${context || "General approach"}.
      
      Rules:
      1. Keep it under 150 words.
      2. Focus on getting the appointment.
      3. Use a friendly but professional tone.
      4. Return ONLY the script text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate script at this time.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return getDefaultScript(type);
  }
};

export const translateAppContent = async (content: AppContent, targetLang: Language): Promise<AppContent> => {
  const ai = getAiInstance();
  if (!ai) throw new Error("API Key missing");

  const prompt = `
    You are a professional localization expert. 
    Translate the values of the following JSON object into ${targetLang === 'es' ? 'Spanish' : targetLang === 'de' ? 'German' : 'French'}.
    
    Rules:
    1. Keep the JSON structure EXACTLY the same.
    2. Do NOT translate keys.
    3. Do NOT translate brand names like "EstateOS", "Notion", "Canva", "Gemini", "ChatGPT".
    4. Maintain the professional, persuasive marketing tone.
    5. Return valid JSON.

    Input JSON:
    ${JSON.stringify(content)}
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: "application/json"
    }
  });

  if (!response.text) throw new Error("No response from AI");
  
  return JSON.parse(response.text) as AppContent;
};

const getDefaultScript = (type: ScriptType): string => {
  switch (type) {
    case ScriptType.EXPIRED:
      return "Hi, I'm calling about the home for sale... I noticed it came off the market this morning. I was wondering, if I had a full price offer, would you still be willing to sell it? Great. The reason I ask is because I specialize in selling homes that other agents couldn't. I'm going to be in your area at 4pm today, would you be offended if I stopped by for 5 minutes to show you exactly why your home didn't sell?";
    case ScriptType.FSBO:
      return "Hello! I'm calling about the home for sale by owner. I work with a lot of buyers in the area and I wanted to see if you are open to working with agents if they bring you a buyer? Excellent. I'm not asking for a listing today, I just want to preview the home to see if it matches what my buyers are looking for. Are you free around 2pm?";
    default:
      return "Hi, this is [Name] with [Brokerage]. I'm calling because homes in your neighborhood are selling for record prices right now. We just sold one down the street for 10% over ask. Have you had any thoughts of selling in this market, or maybe curious about your home's new value?";
  }
};
