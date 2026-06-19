import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      <div className="grid-background opacity-60" />
      <div className="relative w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
