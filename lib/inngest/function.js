import { inngest } from "./client";
import {db} from "../prisma"
import { OpenAI } from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);


export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // every week
  async ({ step }) => {
    const industries = await step.run("Fetch Industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      })
    })
    for (const { industry } of industries) {
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

// Return JSON ONLY. No text. No markdown.
// `;

const res = await step.ai.wrap("openai", async () => {
  return await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: prompt }
    ],
  });
});

const text = res.choices?.[0]?.message?.content || "";
// const cleanedText = text.replace(/[\n\r]/g, ' ');
// const insights = JSON.parse(cleanedText);

const cleanedText = text.replace(/[\n\r]/g, ' ');
const insights = JSON.parse(cleanedText);

// 🔥 FIX: normalize enum values for Prisma
if (insights.demandLevel) {
  insights.demandLevel = insights.demandLevel.toUpperCase();
}

if (insights.marketOutlook) {
  insights.marketOutlook = insights.marketOutlook.toUpperCase();
}


await step.run(`Update${industry} insights`, async () => {
  await db.industryInsight.update({
      where: { industry: industry },
      data: {
        ...insights,
        lastUpdated : new Date(),
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
  })
    }
  }
);