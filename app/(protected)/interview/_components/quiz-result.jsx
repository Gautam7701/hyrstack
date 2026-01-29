// import { CheckCircle, CheckCircle2, Trophy, XCircle } from 'lucide-react';
// import React from 'react'
// import { Progress } from '@/components/ui/progress';
// import { CardContent, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';



// const QuizResult = ({ result, hideStartNew= false, onStartNew }) => {
//     if(!result) return null;
//   return (
//     <div className='mx-auto'>
//       <h1 className='flex items-center gap-2 text-3xl gradient-title'>
//         <Trophy className='w-8 h-8 text-yellow-500'/>
//         {/* You scored {result.quizScore} / {result.questions.length} */}
//         Quiz Completed!
//       </h1>

//       <CardContent>
//         <div className='text-center space-y-2'>
//             <h2 className='text-2xl font-semibold mb-2'>Your Score: {result.quizScore.toFixed(1)}</h2>
//             <Progress value={result.quizScore} className="w-full"/>
//         </div>
//         {result.improvementTip && (
//             <div className='mt-4 p-4 bg-gray-100 rounded-md'>
//                 <h3 className='text-lg font-medium mb-2'>Improvement Tip:</h3>
//                 <p className='text-muted-foreground'>{result.improvementTip}</p>
//             </div>
//         )}

//         <div className='space-y-4'>
//             <h3 className='font-medium'>Questions Review</h3>
//             {result.questions.map((q, index)=>(
//                 <div className='border rounded-lg p-4 space-y-2' key={index}>
//                     <div className='flex items-start justify-between gap-2'>
//                             <p className='font-medium'>{q.questions}</p>
//                             {q.isCorrect ? (
//                                 <CheckCircle2 className='w-5 h-5 text-green-500 inline-block ml-2'/>
//                             ) : (
//                                 <XCircle className='h-5 w-5 text-red-500 flex-shrink-0'/>)}
//                     </div>
//                     <div className='ml-2 text-sm text-muted-foreground'>
//                      <p>Your answers : {q.userAnswer}</p>
//                      {!q.isCorrect && (
//                         <p>Correct answer : {q.answer}</p>
//                      )}
//                     </div>
//                     <div className='text-sm bg-muted p-2 rounded'>
//                         <p className='font-medium'> Explanation: </p>
//                         <p>{q.explanation}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//       </CardContent>

//         {!hideStartNew && (
//             <CardFooter>
//                 <Button className="w-full" onClick={onStartNew}>Start New Quiz</Button>
//             </CardFooter>
//         )}
//     </div>
//   )
// }

// export default QuizResult;


import { CheckCircle2, Trophy, XCircle } from "lucide-react";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuizResult = ({ result, hideStartNew = false, onStartNew }) => {
  if (!result) return null;

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-9 h-9 text-yellow-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Quiz Completed
        </h1>
      </div>

      <CardContent className="space-y-8">
        {/* Score */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Your Score:{" "}
            <span className="text-green-400">
              {result.quizScore.toFixed(1)}%
            </span>
          </h2>
          <Progress value={result.quizScore} className="h-2" />
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
            <h3 className="text-lg font-medium text-white mb-2">
              Improvement Tip
            </h3>
            <p className="text-gray-300">{result.improvementTip}</p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Questions Review
          </h3>

          {result.questions.map((q, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-white">
                  {q.question}
                </p>

                {q.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}
              </div>

              <div className="text-sm text-gray-300 space-y-1">
                <p>
                  <span className="text-gray-400">Your answer:</span>{" "}
                  {q.userAnswer}
                </p>
                {!q.isCorrect && (
                  <p>
                    <span className="text-gray-400">Correct answer:</span>{" "}
                    {q.answer}
                  </p>
                )}
              </div>

              <div className="text-sm bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="font-medium text-white mb-1">
                  Explanation
                </p>
                <p className="text-gray-300">{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter className="mt-6">
          <Button
            className="w-full bg-white/10 hover:bg-white/20 text-white transition"
            onClick={onStartNew}
          >
            Start New Quiz
          </Button>
        </CardFooter>
      )}
    </div>
  );
};

export default QuizResult;
