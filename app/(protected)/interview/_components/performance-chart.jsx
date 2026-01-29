"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { format } from "date-fns";

// export default function PerformanceChart({ assessments }) {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     if (assessments) {
//       const formattedData = assessments.map((assessment) => ({
//         date: format(new Date(assessment.createdAt), "MMM dd"),
//         score: assessment.quizScore,
//       }));
//       setChartData(formattedData);
//     }
//   }, [assessments]);

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="gradient-title text-3xl md:text-4xl">
//           Performance Trend
//         </CardTitle>
//         <CardDescription>Your quiz scores over time</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis domain={[0, 100]} />
//               <Tooltip
//                 content={({ active, payload }) => {
//                   if (active && payload?.length) {
//                     return (
//                       <div className="bg-background border rounded-lg p-2 shadow-md">
//                         <p className="text-sm font-medium">
//                           Score: {payload[0].value}%
//                         </p>
//                         <p className="text-xs text-muted-foreground">
//                           {payload[0].payload.date}
//                         </p>
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="score"
//                 stroke="white"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

export default function PerformanceChart({ assessments }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments) {
      setChartData(
        assessments.map((a) => ({
          date: format(new Date(a.createdAt), "MMM dd"),
          score: a.quizScore,
        }))
      );
    }
  }, [assessments]);

  return (
    <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
      <CardHeader>
        <CardTitle className="gradient-title text-3xl md:text-4xl">
          Performance Trend
        </CardTitle>
        <CardDescription className="text-gray-400">
          Your quiz scores over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis domain={[0, 100]} stroke="#aaa" />
              <Tooltip
                content={({ active, payload }) =>
                  active && payload?.length ? (
                    <div className="bg-black/80 border border-white/10 rounded-lg p-3 backdrop-blur-xl">
                      <p className="text-white font-medium">
                        Score: {payload[0].value}%
                      </p>
                      <p className="text-gray-400 text-xs">
                        {payload[0].payload.date}
                      </p>
                    </div>
                  ) : null
                }
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="white"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
