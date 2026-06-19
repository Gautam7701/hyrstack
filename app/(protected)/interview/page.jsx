import { getAssessments } from "../../actions/interview";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";
import StatsCards from "./_components/stats-cards";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div className="page-shell space-y-8">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
          Interview intelligence
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Interview Preparation
        </h1>
        <p className="mt-3 max-w-2xl text-white/60">
          Practice role-specific questions, track scores, and review feedback
          that sharpens your answers.
        </p>
      </div>

      <StatsCards assessments={assessments} />
      <PerformanceChart assessments={assessments} />
      <QuizList assessments={assessments} />
    </div>
  );
}
