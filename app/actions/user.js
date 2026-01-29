// "use server";

// import { auth } from "@clerk/nextjs/server";
// import { db } from "@/lib/prisma";


// export async function updateUser(data) {
//     console.log("updateUser called with data:", data);
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

//     try {
//         const result = await db.$transaction(async (tx) => {
//             // let industryInsight = await tx.industryInsight.upsert({
//             //     where: {
//             //         industry: data.industry,
//             //     },
//             // })
//             // if (!industryInsight) {
//             //     industryInsight = await tx.industryInsight.create({
//             //         data: {
//             //             industry: data.industry,
//             //             salaryRanges: [],
//             //             growthRate: [],
//             //             demandLevel: "MEDIUM",
//             //             topSkills: [],
//             //             marketOutlook: "NEUTRAL",
//             //             keyTrends: [],
//             //             recommendedSkills: [],
//             //             nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days later
//             //         }
//             //     });
//             // }
//             let industryInsight = await tx.industryInsight.upsert({
//   where: { industry: data.industry }, // unique field
//   update: {}, // nothing to update for now, but must be present
//   create: {
//     industry: data.industry,
//     salaryRanges: [],
//     growthRate: 0.0,
//     demandLevel: "MEDIUM",
//     topSkills: [],
//     marketOutlook: "NEUTRAL",
//     keyTrends: [],
//     recommendedSkills: [],
//     nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//   },
// });

//             const updatedUser = await tx.user.update({
//                 where: {
//                     id: user.id,
//                 },
//                 data: {
//                     industry: data.industry,
//                     experience: data.experience,
//                     bio: data.bio,
//                     skills: data.skills,
//                 }
//             })
//             return { user: updatedUser, industryInsight };
//         }, {
//             timeout: 10000,
//         }
//         );

//         return { success: true, ...result };
//     } catch (error) {
//         console.log("Error updating user:", error);
//         // throw new Error("Failed to update user");
//     }
// }



// export async function getUserOnboardingStatus() {
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

//     try {
//         const user = await db.user.findUnique({
//             where:{
//                 clerkUserId: userId,
//             },
//             select:{
//                 industry: true,
//             },
//         });

//         return{
//             isOnboarded: !!user?.industry,
//         }
//     } catch (error) {
//         console.log("Error fetching user onboarding data:", error);
//         throw new Error("Failed to fetch user onboarding data");
//     }
// }


"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

/* =========================
   UPDATE USER (ONBOARDING)
========================= */
export async function updateUser(data) {
  console.log("updateUser called with data:", data);

  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    return { success: false, error: "User not found" };
  }

  try {
    const result = await db.$transaction(
      async (tx) => {
        // ✅ Ensure Industry Insight Exists
        const industryInsight = await tx.industryInsight.upsert({
          where: { industry: data.industry },
          update: {
            topSkills:data.skills??[]
          }, // required by Prisma
          create: {
            industry: data.industry,
            salaryRanges: [],
            growthRate: 0.0,
            demandLevel: "MEDIUM",
            topSkills: data.skills ?? [],
            marketOutlook: "NEUTRAL",
            keyTrends: [],
            recommendedSkills: [],
            nextUpdate: new Date(
              Date.now() + 7 * 24 * 60 * 60 * 1000
            ), // +7 days
          },
        });

        // ✅ Update User Profile
        const updatedUser = await tx.user.update({
          where: { id: user.id },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { user: updatedUser, industryInsight };
      },
      {
        timeout: 10000,
      }
    );

    // 🔑 REQUIRED for frontend success flow
    return {
      success: true,
      user: result.user,
      industryInsight: result.industryInsight,
    };
  } catch (error) {
    console.error("Error updating user:", error);

    // ❗ Never fail silently
    return {
      success: false,
      error: "Failed to update user",
    };
  }
}

/* =========================
   CHECK ONBOARDING STATUS
========================= */
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      isOnboarded: Boolean(user.industry),
    };
  } catch (error) {
    console.error("Error fetching onboarding status:", error);
    throw new Error("Failed to fetch user onboarding data");
  }
}
