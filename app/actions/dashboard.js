"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { generateAIInsights } from "@/lib/gemini";

/**
 * Normalize AI enum output to Prisma enum format
 * e.g. "Medium" -> "MEDIUM"
 */
const normalizeEnum = (value) => value?.toUpperCase?.() ?? undefined;

export async function getDashboardData() {
  // ✅ Authenticate user
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // ✅ Fetch user with industry insight
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });

  if (!user || !user.industry) {
    throw new Error("User or industry not found");
  }

  let insights = user.industryInsight;

  // 🔥 Generate AI insights ONLY if empty or outdated
  if (!insights || insights.topSkills.length === 0 || insights.nextUpdate < new Date()) {
    // Generate AI insights
    const aiData = await generateAIInsights(user.industry);

    // Upsert into Prisma (normalize enums)
    insights = await db.industryInsight.upsert({
      where: { industry: user.industry },
      update: {
        salaryRanges: aiData.salaryRanges,
        growthRate: aiData.growthRate,
        demandLevel: normalizeEnum(aiData.demandLevel),
        topSkills: aiData.topSkills,
        marketOutlook: normalizeEnum(aiData.marketOutlook),
        keyTrends: aiData.keyTrends,
        recommendedSkills: aiData.recommendedSkills,
        lastUpdated: new Date(),
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // +7 days
      },
      create: {
        industry: user.industry,
        salaryRanges: aiData.salaryRanges,
        growthRate: aiData.growthRate,
        demandLevel: normalizeEnum(aiData.demandLevel),
        topSkills: aiData.topSkills,
        marketOutlook: normalizeEnum(aiData.marketOutlook),
        keyTrends: aiData.keyTrends,
        recommendedSkills: aiData.recommendedSkills,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // +7 days
      },
    });
  }

  return insights;
}


// "use server"

// import { auth } from "@clerk/nextjs/server";
// import { db } from "@/lib/prisma";
// import { generateAIInsights } from "@/lib/gemini";

// export async function getDashboardData() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     include: { industryInsight: true },
//   });

//   if (!user) throw new Error("User not found");

//   if (!user.industryInsight) {
//     const insights = await generateAIInsights(user.industry);

//     return await db.industryInsight.create({
//       data: {
//         industry: user.industry,
//         ...insights,
//         userId: user.id,
//         nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//       },
//     });
//   }

//   return user.industryInsight;
// }


// "use server"
// import { auth } from "@clerk/nextjs/server";
// import { db } from "@/lib/prisma";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(
//     process.env.GEMINI_API_KEY,
// );

// const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
// })

// export const generateAIInsights = async (industry) => {
//     const prompt = `
//           Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
//           {
//             "salaryRanges": [
//               { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
//             ],
//             "growthRate": number,
//             "demandLevel": "High" | "Medium" | "Low",
//             "topSkills": ["skill1", "skill2"],
//             "marketOutlook": "Positive" | "Neutral" | "Negative",
//             "keyTrends": ["trend1", "trend2"],
//             "recommendedSkills": ["skill1", "skill2"]
//           }
          
//           IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
//           Include at least 5 common roles for salary ranges.
//           Growth rate should be a percentage.
//           Include at least 5 skills and trends.
//         `;

//         const result = await model.generateContent(prompt);
//         const response = result.response;
//         const text = response.text();
//         const cleanedText = text.replace(/[\n\r]/g, '').trim();
//         console.log("AI Response:", cleanedText);
//         const insights = JSON.parse(cleanedText);
//         return insights;

// }

// export async function getDashboardData() {
//     const { userId } = await auth();
//     if (!userId) {
//         throw new Error("Unauthorized");
//     }
//     const user = await db.user.findUnique({
//         where: {
//             clerkUserId: userId,
//         }
//     });

//     if (!user) throw new Error("User not found");
//     if (!user.industryInsight) {
//         const insights = await generateAIInsights(user.industry);
//         const industryInsight = await db.industryInsight.create({
//             data: {
//                 industry: user.industry,
//                 ...insights,
//                 nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days later
//             }
//         });

//         return industryInsight;
//     }
//     return user.industryInsight;
// } 
