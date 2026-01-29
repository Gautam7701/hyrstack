import { getCoverLetters } from "../../actions/coverletter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto space-y-8 min-h-screen text-white">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold gradient-title">
          My Cover Letters
        </h1>

        <Link href="/coverletter/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      {/* List */}
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
