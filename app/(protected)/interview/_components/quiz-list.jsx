
"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuizResult from "./quiz-result";

// export default function QuizList({ assessments }) {
//   const router = useRouter();
//   const [selectedQuiz, setSelectedQuiz] = useState(null);

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle className="gradient-title text-3xl md:text-4xl">
//                 Recent Quizzes
//               </CardTitle>
//               <CardDescription>
//                 Review your past quiz performance
//               </CardDescription>
//             </div>
//             <Button onClick={() => router.push("/interview/mock")}>
//               Start New Quiz
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {assessments?.map((assessment, i) => (
//               <Card
//                 key={assessment.id}
//                 className="cursor-pointer hover:bg-muted/50 transition-colors"
//                 onClick={() => setSelectedQuiz(assessment)}
//               >
//                 <CardHeader>
//                   <CardTitle className="gradient-title text-2xl">
//                     Quiz {i + 1}
//                   </CardTitle>
//                   <CardDescription className="flex justify-between w-full">
//                     <div>Score: {assessment.quizScore.toFixed(1)}%</div>
//                     <div>
//                       {format(
//                         new Date(assessment.createdAt),
//                         "MMMM dd, yyyy HH:mm"
//                       )}
//                     </div>
//                   </CardDescription>
//                 </CardHeader>
//                 {assessment.improvementTip && (
//                   <CardContent>
//                     <p className="text-sm text-muted-foreground">
//                       {assessment.improvementTip}
//                     </p>
//                   </CardContent>
//                 )}
//               </Card>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
//         <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle></DialogTitle>
//           </DialogHeader>
//           <QuizResult
//             result={selectedQuiz}
//             hideStartNew
//             onStartNew={() => router.push("/interview/mock")}
//           />
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }


export default function QuizList({ assessments }) {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <>
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10 mb-10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="gradient-title text-3xl md:text-4xl">
                Recent Quizzes
              </CardTitle>
              <CardDescription className="text-gray-400">
                Review your past quiz performance
              </CardDescription>
            </div>
            <Button
              className="bg-white hover:bg-white/90 text-black"
              onClick={() => router.push("/interview/mock")}
            >
              Start New Quiz
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {assessments?.map((assessment, i) => (
            <div
              key={assessment.id}
              onClick={() => setSelectedQuiz(assessment)}
              className="cursor-pointer rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  Quiz {i + 1}
                </h3>
                <span className="text-gray-400 text-sm">
                  {format(new Date(assessment.createdAt), "MMM dd, yyyy HH:mm")}
                </span>
              </div>

              <p className="mt-2 text-gray-300">
                Score:{" "}
                <span className="text-green-400 font-medium">
                  {assessment.quizScore.toFixed(1)}%
                </span>
              </p>

              {assessment.improvementTip && (
                <p className="text-sm text-gray-400 mt-1">
                  {assessment.improvementTip}
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/80 backdrop-blur-xl border border-white/10">
          <QuizResult
            result={selectedQuiz}
            hideStartNew
            onStartNew={() => router.push("/interview/mock")}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
