import { Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getCoverLetters } from "../../actions/coverletter";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="page-shell space-y-8">
      <div className="flex flex-col justify-between gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:flex-row md:items-center md:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
            Application studio
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            My Cover Letters
          </h1>
          <p className="mt-3 max-w-2xl text-white/60">
            Create, review, and reuse AI-generated cover letters tailored to
            each role.
          </p>
        </div>

        <Button asChild size="lg">
          <Link href="/coverletter/new">
            <Plus className="h-4 w-4" />
            Create New
          </Link>
        </Button>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
