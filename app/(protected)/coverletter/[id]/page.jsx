import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getCoverLetter } from "../../../actions/coverletter";
import CoverLetterPreview from "../_components/cover-letter-preview";

export default async function EditCoverLetterPage({ params }) {
  const { id } = await params;
  const coverLetter = await getCoverLetter(id);

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
          Cover letter preview
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
      </div>

      <CoverLetterPreview content={coverLetter?.content} />
    </div>
  );
}
