import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-8">
          <div className="mb-6">
            <h1 className="font-bold gradient-title text-4xl md:text-5xl text-left">
              Cover Letter Generator
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-white">My Cover Letters</h2>
            <Link href="/ai-cover-letter/new" prefetch={true}>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Button>
            </Link>
          </div>

          <CoverLetterList coverLetters={coverLetters} />
        </div>
      </div>
    </>
  );
}
