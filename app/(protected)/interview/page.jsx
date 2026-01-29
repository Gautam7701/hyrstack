import { getAssessments } from "../../actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

// export default async function InterviewPrepPage() {
//   const assessments = await getAssessments();

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-5">
//         <h1 className="text-6xl font-bold gradient-title">
//           Interview Preparation
//         </h1>
//       </div>
//       <div className="space-y-6 flex items-cen
// ter flex-col">
//         <StatsCards assessments={assessments} />
//         <PerformanceChart assessments={assessments} />
//         <QuizList assessments={assessments} />
//       </div>
//     </div>
//   );
// }


export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div className="min-h-screen bg-myDark text-white pt-28 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl md:text-6xl font-bold gradient-title">
            Interview Preparation
          </h1>
        </div>

        <div className="space-y-8">
          <StatsCards assessments={assessments} />
          <PerformanceChart assessments={assessments} />
          <QuizList assessments={assessments} />
        </div>
      </div>
    </div>
  );
}
