// import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher([
//   "/dashboard/(.*)",
//   "/resumebuilder/(.*)",
//   "/coverletter/(.*)",
//   "/interview/(.*)",
//   "/onboarding/(.*)",
// ])
// export default clerkMiddleware(async(auth,req)=>{
//   const {userId} = await auth();
//   if(!userId && isProtectedRoute(req)){
//     const {redirectToSignIn}= await auth();
//     return redirectToSignIn();
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };
// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//   matcher: ['/((?!_next|.*\\..*).*)'],
// }


import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl;

  // ✅ Allow Inngest to access without auth

  // if (pathname.startsWith("/api/inngest")) {
  //   return NextResponse.next();
  // }
   const publicRoutes = ["/", "/privacy", "/terms", "/contact"];
  if (publicRoutes.includes(pathname) || pathname.startsWith("/api/inngest")) {
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/api/(.*)",
  ],
};
