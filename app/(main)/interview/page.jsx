import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-8">
          <div className="mb-6">
            <h1 className="font-bold gradient-title text-4xl md:text-5xl text-left">
              Interview Prep
            </h1>
          </div>
          <div className="space-y-6">
            <StatsCards assessments={assessments} />
            <PerformanceChart assessments={assessments} />
            <QuizList assessments={assessments} />
          </div>
        </div>
      </div>
    </>
  );
}
