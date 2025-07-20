import { getResume } from "@/actions/resume";
import dynamic from "next/dynamic";

// Client-side dynamic import for resume builder
const ResumeBuilder = dynamic(
  () => import("./_components/resume-builder"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    ),
  }
);

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-8">
          <div className="mb-6">
            <h1 className="font-bold gradient-title text-4xl md:text-5xl text-left">
              Resume Builder
            </h1>
          </div>
          <ResumeBuilder initialContent={resume?.content} />
        </div>
      </div>
    </>
  );
}
