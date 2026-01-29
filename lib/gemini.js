

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// export async function generateAIInsights(industry) {
//   const prompt = `
// Analyze the ${industry} industry and return ONLY valid JSON:

// {
//   "salaryRanges": [
//     { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
//   ],
//   "growthRate": number,
//   "demandLevel": "High" | "Medium" | "Low",
//   "topSkills": ["skill1", "skill2"],
//   "marketOutlook": "Positive" | "Neutral" | "Negative",
//   "keyTrends": ["trend1", "trend2"],
//   "recommendedSkills": ["skill1", "skill2"]
// }

// JSON ONLY. No markdown. No text.
// `;

//   const result = await model.generateContent(prompt);
//   const text = result.response.text();

//   const match = text.match(/\{[\s\S]*\}/);
//   if (!match) throw new Error("Invalid JSON from Gemini");

//   return JSON.parse(match[0]);
// }

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAIInsights(industry) {
  const prompt = `
Analyze the ${industry} industry and return ONLY valid JSON:

{
  "salaryRanges": [
    { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
  ],
  "growthRate": number (percentage between 1 and 30, realistic industry CAGR)

  "demandLevel": "High" | "Medium" | "Low",
  "topSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
  "marketOutlook": "Positive" | "Neutral" | "Negative",
  "keyTrends": ["trend1", "trend2", "trend3", "trend4", "trend5"],
  "recommendedSkills": ["skill1", "skill2"]
}

JSON ONLY. No markdown. No text.
`;

// const prompt = `
// Analyze the ${industry} industry and return ONLY valid JSON.

// {
//   "salaryRanges": [
//     {
//       "role": "Software Engineer",
//       "min": 50000,
//       "max": 120000,
//       "median": 80000,
//       "location": "India"
//     }
//   ],
//   "growthRate": 12,
//   "demandLevel": "High",
//   "topSkills": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
//   "marketOutlook": "Positive",
//   "keyTrends": ["Trend1", "Trend2", "Trend3", "Trend4", "Trend5"],
//   "recommendedSkills": ["Skill1", "Skill2"]
// }

// Return JSON ONLY. No markdown. No text.
// `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini", // fast + cheap + good for structured output
    messages: [
      { role: "system", content: "You are a data analyst who outputs strict JSON." },
      { role: "user", content: prompt },
    ],
    temperature: 0.3,
  });

  const text = response.choices[0].message.content;

  // Safety check (same idea as Gemini)
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Invalid JSON from OpenAI");

  return JSON.parse(match[0]);
}
