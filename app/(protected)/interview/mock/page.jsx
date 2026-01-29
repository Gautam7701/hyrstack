// import React from 'react'
// import Link from 'next/link'
// import { ArrowLeft } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import Quiz from '../_components/quiz.jsx'

// const MockInterview = () => {
//   return (
//     <div>
//       <div className='flex flex-col space-y-2 mx-2'>
//         <Link href={'/interview'}>
//         <Button variant="outline" className="mt-4">
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Back to Interview Preparation
//         </Button>
//         </Link>

//         <div>
//           <h1 className='text-3xl font-bold gradient-title'>
//             Mock Interview
//           </h1>
//           <p className='text-muted-foreground'>
//             Test your skills with a simulated technical interview.
//           </p>
//         </div>
//       </div>

//       <Quiz/>
//     </div>
//   )
// }

// export default MockInterview;


// import React from "react";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Quiz from "../_components/quiz.jsx";

// const MockInterview = () => {
//   return (
//     <div className="min-h-screen bg-myDark text-white p-6 md:p-12">
//       {/* Header / Navigation */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//         <Link href="/interview">
//           <Button
//             variant="outline"
//             className="flex items-center gap-2 border-gray-600 hover:border-white text-gray-300 hover:text-white transition-colors duration-300"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Interview Preparation
//           </Button>
//         </Link>

//         <div className="mt-4 md:mt-0">
//           <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-white/10 gradient-text">
//             Mock Interview
//           </h1>
//           <p className="text-gray-400 mt-1 md:mt-2">
//             Test your skills with a simulated technical interview.
//           </p>
//         </div>
//       </div>

//       {/* Quiz Card */}
//       <div className="bg-dark rounded-2xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto">
//         <Quiz />
//       </div>

//       {/* Footer / Tip */}
//       <div className="mt-8 text-center text-gray-500 text-sm">
//         Tip: Focus on accuracy, not speed. Each question simulates a real interview scenario.
//       </div>
//     </div>
//   );
// };


// export default MockInterview;


// "use client";
// import React from "react";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Quiz from "../_components/quiz.jsx";

// const MockInterview = () => {
//   return (
//     <div className="min-h-screen bg-myDark text-white p-6 md:p-12 relative">
//       {/* Header / Navigation */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
//         <Link href="/interview">
//           <Button
//             variant="outline"
//             className="flex items-center gap-2 border-gray-600 hover:border-white text-gray-300 hover:text-white transition-colors duration-300 backdrop-blur-md"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Interview Preparation
//           </Button>
//         </Link>

//         <div className="mt-4 md:mt-0">
//           <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
//             Mock Interview
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Test your skills with a simulated technical interview.
//           </p>
//         </div>
//       </div>

//       {/* Glassmorphism Quiz Card */}
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
//           <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
//             Ready to test your knowledge?
//           </h2>
//           <p className="text-gray-300 mb-6">
//             This quiz contains 10 questions to help you assess your understanding of key concepts.
//           </p>

//           {/* Start Button */}
//           <Button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl shadow-lg backdrop-blur-md transition">
//             Start Quiz
//           </Button>

//           {/* Quiz Component */}
//           <div className="mt-10">
//             <Quiz />
//           </div>
//         </div>
//       </div>

//       {/* Footer / Tip */}
//       <div className="mt-12 text-center text-gray-400 text-sm">
//         Tip: Focus on accuracy, not speed. Each question simulates a real interview scenario.
//       </div>
//     </div>
//   );
// };

// export default MockInterview;



import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Quiz from "../_components/quiz.jsx";

const MockInterview = () => {
  return (
    <div className="min-h-screen bg-myDark text-white p-6 md:p-12 flex flex-col items-center pt-28">
      {/* Back Button */}
      <div className="w-full max-w-6xl mb-8">
        <Link href="/interview">
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-lg
            border border-white/20 bg-white/5 hover:bg-white/10
            text-white/80 hover:text-white transition duration-300 mt-10 mr-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </button>
        </Link>
      </div>

      {/* Quiz Card with Glassmorphism */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-5xl">
        {/* Title & Description */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mock Interview
          </h1>
          <p className="text-gray-300 mt-3 text-lg md:text-xl">
            Test your skills with a simulated technical interview.
          </p>
        </div>

        {/* Quiz Component */}
        <Quiz />
      </div>

      {/* Tip / Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm max-w-5xl">
        Tip: Focus on accuracy, not speed. Each question simulates a real interview scenario.
      </div>
    </div>
  );
};

export default MockInterview;
