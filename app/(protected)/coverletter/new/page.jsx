import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";

export default function NewCoverLetterPage() {
  return (
    <div className="page-shell space-y-8">
      <Button asChild variant="ghost" className="pl-0">
        <Link href="/coverletter">
          <ArrowLeft className="h-4 w-4" />
          Back to Cover Letters
        </Link>
      </Button>

      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
          AI writing assistant
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Create Cover Letter
        </h1>
        <p className="mt-3 max-w-2xl text-white/60">
          Generate a tailored cover letter for your job application.
        </p>
      </div>

      <CoverLetterGenerator />
    </div>
  );
}
