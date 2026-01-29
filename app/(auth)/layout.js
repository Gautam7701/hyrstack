// import React from 'react'

// const layout = ({ children }) => {
//   return (
//     <div className='flex-justify-center'>
//       {children}
//     </div>
//   )
// }

// export default layout


// import React from 'react';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#111111]">
//       <div
//         className="w-full max-w-sm p-6 rounded-2xl
//                    bg-white/5 backdrop-blur-xl
//                    border border-white/10
//                    shadow-lg shadow-black/40"
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] px-4">
      <div
        
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
