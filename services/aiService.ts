import { GoogleGenAI } from "@google/genai";
import { ScriptType } from '../types';

// Helper to get AI instance safely
const getAiInstance = () => {
  if (!process.env.API_KEY) return null;
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateRealEstateScript = async (type: ScriptType, context: string): Promise<string> => {
  const ai = getAiInstance();
  
  if (!ai) {
    return getDefaultScript(type);
  }

  try {
    const prompt = `
      Act as a world-class real estate coach.
      Write a short, punchy, and effective ${type} script for a real estate agent.
      
      Language: English
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