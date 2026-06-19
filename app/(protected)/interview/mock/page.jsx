import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz.jsx";

const MockInterview = () => {
  return (
    <div className="page-shell space-y-8">
      <Button asChild variant="ghost" className="pl-0">
        <Link href="/interview">
          <ArrowLeft className="h-4 w-4" />
          Back to Interview Preparation
        </Link>
      </Button>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
          Mock interview
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Test your readiness
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/60">
          Answer AI-generated questions and review explanations before your
          next real interview.
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <Quiz />
      </div>
    </div>
  );
};

export default MockInterview;
