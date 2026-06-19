import React, { Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";

const Layout = ({ children }) => {
  return (
    <main className="page-shell">
      <div className="mb-8 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
          AI market intelligence
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Industry Insights
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 md:text-base">
          Monitor outlook, growth, compensation, trends, and skill signals for
          the field you are targeting.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="mt-16 flex justify-center">
            <BarLoader width={240} color="#67e8f9" />
          </div>
        }
      >
        {children}
      </Suspense>
    </main>
  );
};

export default Layout;
