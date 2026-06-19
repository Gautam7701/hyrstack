"use client"
import React from 'react'
import { useState } from 'react'
import { generateQuiz, saveQuizResult } from '../../../actions/interview'
import useFetch from '@/hooks/use-fetch'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarLoader } from 'react-spinners'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useEffect } from 'react'
import { toast } from 'sonner'
import QuizResult from './quiz-result'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showExplanation, setShowExplanation] = useState(false);


    const {
        loading: generatingQuiz,
        fn: generateQuizFn,
        data: quizData,
    } = useFetch(generateQuiz)


    const{
        loading:savingResult,
        fn:saveQuizResultFn,
        data:resultData,
        setData:setResultData
    }= useFetch(saveQuizResult)
    

    useEffect(() => {
  if (!resultData) return;

  if (resultData.success) {
    toast.success("Quiz results saved successfully!");
  } else {
    toast.error(resultData.message || "Failed to save quiz results.");
  }
}, [resultData]);

    const handleAnswer = (answer)=>{
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
    }


    const handleNext=()=>{
        if(currentQuestion < quizData.length -1){
            setCurrentQuestion(currentQuestion +1);
            setShowExplanation(false);
        }
        else{
            finishQuiz()
        }
    }

    const calculateScore = ()=>{
        let correct = 0;
        answers.forEach((answer, index)=>{
            if(answer === quizData[index].correctAnswer){
                correct +=1;
            }
    });
    return (correct/quizData.length) * 100;
    }

    const finishQuiz  = async()=>{
        const score = calculateScore();
            await saveQuizResultFn(quizData, answers, score);
            // toast.success("Quiz results saved successfully!");
        
      
    }

    const startNewQuiz=()=>{
        setCurrentQuestion(0);
        setAnswers([]);
        setShowExplanation(false);
        setResultData(null);
        generateQuizFn();
    }
    if (generatingQuiz) {
        return <BarLoader className="mt-4" width={"100%"} color="#67e8f9" />;
    }



    if(resultData){
        return(
            <div>
                <QuizResult result={resultData.assessment} onStartNew={startNewQuiz}/>
            </div>
        )
    }
    if (!quizData) {
        return (
            <Card className="text-center">
                <CardHeader>
                    <CardTitle className="text-2xl text-white">Ready to test your knowledge?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white/60">
                        This quiz contains 10 questions to help you assess your understanding of key concepts.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="lg" onClick={generateQuizFn}>Start Quiz</Button>
                </CardFooter>
            </Card>
        )
    }

    const question = quizData[currentQuestion];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Question {currentQuestion + 1} of {quizData.length}</CardTitle>
            </CardHeader>
            <CardContent>
                    <p className='text-lg font-medium text-white'>
                    {question.question}

                </p>
                <RadioGroup className="mt-4 space-y-2"
                onValueChange = {handleAnswer}
                value = {answers[currentQuestion]}>
                    {question.options.map((option,index)=>{
                        return(
                            <div className="flex items-center gap-3" key={index}>
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                        )
                    })}

                </RadioGroup>

                {showExplanation && (<div>
                    <p className='font-medium text-white'>Explanation: </p>
                    <p className='text-white/60'>{question.explanation || "Explanation not available for this question."}</p>
                    </div>)}
            </CardContent>
            <CardFooter className="flex justify-between">
                {
                    !showExplanation && (
                        <Button
                        onClick={() => setShowExplanation(true)}
                        variant = "outline"
                        disabled = {!answers[currentQuestion]}
                        >
                        Show Explanation
                        </Button>
                    )
                }
                 {
                                savingResult && (
                                    <BarLoader className='mt-4' width={"100%"} color="#67e8f9" />
                                )
                            }
                <Button
                        onClick={handleNext}
                        variant = "outline"
                        disabled = {!answers[currentQuestion] || savingResult}
                        >
                           
                        {currentQuestion <quizData.length - 1 ? 'Next Question' :
                        savingResult?"Saving...": 'Finish Quiz'}
                        </Button>
                </CardFooter>
        </Card>
    );
}

export default Quiz;
