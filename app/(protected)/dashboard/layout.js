// import React from 'react'
// import { Suspense } from 'react'
// import BarLoader from "react-spinners/BarLoader";

// const layout = ({ children }) => {
//   return (
    
//         <div className="px-5">
//             <div className='flex items-center justify-between mb-5'>
//                 <h1 className='text-6xl font-bold gradient-title'>Industry Insights</h1>
//             </div>
//             <Suspense fallback={<BarLoader className="mt-4" w-full color="gray" />}>
//                 {children}
//             </Suspense>
      
//     </div>
//   )
// }

// export default layout;


import React, { Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";

const Layout = ({ children }) => {
  return (
    <main className="pt-28 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div
        className="
          mb-8 rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          border border-white/15
          backdrop-blur-xl
          p-6 shadow-xl shadow-black/30
        "
      >
        <h1 className="text-4xl md:text-6xl font-extrabold gradient-title tracking-tight">
          Industry Insights
        </h1>
        <p className="mt-2 text-white/60 text-sm md:text-base">
          AI-powered analysis tailored to your industry
        </p>
      </div>

      {/* Content */}
      <Suspense
        fallback={
          <div className="flex justify-center mt-16">
            <BarLoader width={220} color="#9ca3af" />
          </div>
        }
      >
        <section
        //   className="
        //     rounded-2xl
        //     bg-white/5
        //     border border-white/10
        //     backdrop-blur-xl
        //     p-6 md:p-8
        //     shadow-lg shadow-black/20
        //   "
        >
          {children}
        </section>
      </Suspense>
    </main>
  );
};

export default Layout;
