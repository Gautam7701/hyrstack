// "use client";

// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, LayoutDashboard } from "lucide-react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const HeroSection = () => {
//   const heroImages = [
//     "/1sthero.png",
//     "/2ndhero.png",
//     "/3rdhero.png",
//     "/4thhero.png",
//   ];

//   return (
//     <section className="relative pt-40 pb-28 px-6 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 grid-background" />

//       {/* Content */}
//       <motion.div
//         className="relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//       >
//         <div className="mx-auto max-w-6xl text-center">
//           {/* Badge */}
//           <motion.div
//             variants={fadeUp}
//             className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm text-white/70"
//           >
//             <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
//             AI-powered career tools
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white"
//           >
//             Build your career, <br />
//             <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
//               not just a resume.
//             </span>
//           </motion.h1>

//           {/* Professional Subheading */}
//           <motion.p
//             variants={fadeUp}
//             className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/60 leading-relaxed"
//           >
//             An all-in-one AI career platform to craft ATS-ready resumes,
//             generate role-specific cover letters, and prepare confidently
//             with intelligent mock interviews.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             variants={fadeUp}
//             className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <Link href="/dashboard">
//               <Button
//                 size="xl"
//                 className="group gap-2 rounded-2xl bg-white text-black hover:bg-white/90 transition px-12 py-4 cursor-pointer"
//               >
//                 Get Started
//                 <ArrowRight
//                   size={18}
//                   className="transition group-hover:translate-x-2"
//                 />
//               </Button>
//             </Link>

//             <Link href="/resumebuilder">
//               <Button
//                 size="xl"
//                 variant="outline"
//                 className="rounded-2xl border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-12 py-4 cursor-pointer"
//               >
//                 <LayoutDashboard size={18} />
//                 Build My Resume
//               </Button>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Cards */}
//         {/* <motion.div
//           variants={containerVariants}
//           className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
//         >
//           {heroImages.map((src, idx) => (
//             <motion.div key={idx} variants={cardVariants}>
//               <Tilt
//                 tiltMaxAngleX={10}
//                 tiltMaxAngleY={10}
//                 glareEnable
//                 glareMaxOpacity={0.2}
//                 glareColor="#ffffff"
//                 className="cursor-pointer"
//               >
//                 <div
//                   className="w-full h-[350px] bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center transition-transform hover:scale-105"
//                   style={{
//                     transform: `rotate(${idx * 2 - 3}deg)`,
//                   }}
//                 >
//                   <img
//                     src={src}
//                     alt={`Hero ${idx + 1}`}
//                     className="w-full h-full object-cover rounded-2xl"
//                   />
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </motion.div> */}
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur text-sm text-white/70">
            AI Career Assistant
          </span>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            Your personal AI <br />
            <span className="bg-gradient-to-r from-white via-white/70 to-white/40 bg-clip-text text-transparent">
              career co-pilot
            </span>
          </h1>

          <p className="mt-6 text-white/60 max-w-xl text-lg leading-relaxed">
            Build ATS-ready resumes, generate tailored cover letters,
            and train with intelligent mock interviews — all powered by AI.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/dashboard">
              <Button
                size="xl"
                className="rounded-2xl bg-white text-black px-10 py-4 hover:bg-white/90"
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>

            <Link href="/resumebuilder">
              <Button
                size="xl"
                variant="outline"
                className="rounded-2xl border-white/20 bg-white/5 text-white px-10 py-4 hover:bg-white/10"
              >
                Build Resume
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — ROBOT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          {/* <div className="absolute w-[380px] h-[380px] bg-white/10 blur-3xl rounded-full" /> */}

          {/* <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            glareEnable
            glareMaxOpacity={0.25}
            glareColor="#ffffff"
            className="relative z-10"
          > */}
          
{/* <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.03}>
  <motion.img
    src="/herimage.png"
    alt="AI Robot"
    className="
      w-[80vw]
      max-w-[1000px]
      h-auto
       translate-x-[-90px]
      translate-y-10
      drop-shadow-[0_40px_120px_rgba(0,255,255,0.25)]
    "
    animate={{ y: [0, -25, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
</Tilt> */}

{/* Glow */}
<div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-[120px] rounded-full" />

<Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.03}>
  <motion.img
    src="/herimage.png"
    alt="AI Robot"
    className="
      w-[80vw]
      max-w-[1000px]
      h-auto
      -translate-x-[90px]
      translate-y-10
      drop-shadow-[0_40px_120px_rgba(0,255,255,0.25)]
    "
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
  />
</Tilt>



          {/* </Tilt> */}
        </motion.div>
      </div>
    </section>
  );
}
