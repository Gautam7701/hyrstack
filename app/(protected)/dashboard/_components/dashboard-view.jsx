// "use client"
// import { get } from 'http';
// import React from 'react'
// import { format, formatDistanceToNow } from 'date-fns';
// import { Badge } from '@/components/ui/badge';

// const DashboardView = ({ insights }) => {
//   //   if (!insights) {
//   //   return <div className="text-white/60">Loading insights...</div>;
//   // }

//   // if (!Array.isArray(insights.salaryRanges)) {
//   //   return (
//   //     <div className="text-red-500">
//   //       Salary data unavailable. Please refresh.
//   //     </div>
//   //   );
//   // }
//   const salaryData = insights.salaryRanges.map((range)=>({
//     name:range.role,
//     min:range.min/1000,
//     max:range.max/1000,
//     median:range.median/1000,
//     location:range.location 
//   }));

//   const getDemandLevelColor = (level) => {
//     switch (level.toLowerCase()) {
//       case "High": return "text-green-500";
//       case "Medium": return "text-yellow-500";
//       case "Low": return "text-red-500";
//       default: return "text-gray-500";
//     }
//   };


//   const getMarketOutlookInfo=(outlook)=>{
//     switch (outlook.toLowerCase()) {
//       case "positive": return { icon: "📈", color: "text-green-500" };
//       case "negative": return { icon: "📉", color: "text-red-500" };
//       case "neutral": return { icon: "📊", color: "text-yellow-500" };
//       default: return { icon: "📊", color: "text-gray-500" };
//     }
//   };

//   const OutlookIcon= getMarketOutlookInfo(insights.marketOutlook).icon;
//   const outlookColor= getMarketOutlookInfo(insights.marketOutlook).color;


//   const lastUpdatedDate = format(new Date(insights.updatedAt), 'MMMM dd, yyyy');
//   const nextUpdateDistance = formatDistanceToNow(new Date(insights.nextUpdate), { addSuffix: true }); 
//   return (
//     <div className='space-y-6'>
//         <div className='flex justify-between items-center'>
//           <Badge variant="default | outline | secondary | destructive">Last updated: {lastUpdatedDate}</Badge>
//         </div>
//     </div>
//   )
// }

// export default DashboardView;


// "use client"

// import React from 'react';
// import { format, formatDistanceToNow } from 'date-fns';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';

// const DashboardView = ({ insights }) => {
//   if (!insights) return <div className="text-white/60">Loading insights...</div>;

//   const salaryData = Array.isArray(insights.salaryRanges)
//     ? insights.salaryRanges.map((range) => ({
//       name: range.role,
//       min: range.min / 1000,
//       max: range.max / 1000,
//       median: range.median / 1000,
//       location: range.location,
//     }))
//     : [];

//   const getDemandLevelColor = (level) => {
//     switch (level?.toLowerCase?.()) {
//       case "high": return "text-green-500";
//       case "medium": return "text-yellow-500";
//       case "low": return "text-red-500";
//       default: return "text-gray-500";
//     }
//   };

//   const getMarketOutlookInfo = (outlook) => {
//     switch (outlook?.toLowerCase?.()) {
//       case "positive": return { icon: "📈", color: "text-green-500" };
//       case "negative": return { icon: "📉", color: "text-red-500" };
//       case "neutral": return { icon: "📊", color: "text-yellow-500" };
//       default: return { icon: "📊", color: "text-gray-500" };
//     }
//   };

//   const { icon: OutlookIcon, color: outlookColor } = getMarketOutlookInfo(insights.marketOutlook);

//   const lastUpdatedDate = insights.lastUpdated
//     ? format(new Date(insights.lastUpdated), 'MMMM dd, yyyy')
//     : "N/A";

//   const nextUpdateDistance = insights.nextUpdate
//     ? formatDistanceToNow(new Date(insights.nextUpdate), { addSuffix: true })
//     : "N/A";

//   return (
//     <div className='space-y-6'>
//       <div className='flex justify-between items-center'>
//         <Badge variant="default">Last updated: {lastUpdatedDate}</Badge>
//       </div>
//       <div>
//         <Card>
//           <CardHeader className='flex items-center justify-between space-y-0 pb-2'>
//             <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
//             <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
//           </CardHeader>
//           <CardContent>
//             <div className='text-2xl font-bold'>{insights.marketOutlook}</div>
//             <p className='mt-2 text-xs text-muted-foreground'>
//               Next update {nextUpdateDistance}
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardView;


"use client";

import React from "react";
import { format, differenceInDays } from "date-fns";
import { TrendingUp, TrendingDown, BarChart, Briefcase, BriefcaseIcon, Brain, Salad } from "lucide-react";
import { Progress } from "@/components/ui/progress";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@/components/ui/card";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const DashboardView = ({ insights }) => {
  console.log("Insights:", insights);
  console.log("Top skills:", insights?.topSkills);
  if (!insights) {
    return <div className="text-white/60">Loading insights...</div>;
  }
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
    location: range.location
  }));


  const getDemandLevelColor = (level) => {
    switch (level?.toLowerCase?.()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook?.toLowerCase?.()) {
      case "positive":
        return { Icon: TrendingUp, color: "text-green-500" };
      case "negative":
        return { Icon: TrendingDown, color: "text-red-500" };
      case "neutral":
        return { Icon: BarChart, color: "text-yellow-500" };
      default:
        return { Icon: BarChart, color: "text-gray-500" };
    }
  };



  const lastUpdatedDate = insights.lastUpdated
    ? format(new Date(insights.lastUpdated), "MMMM dd, yyyy")
    : "N/A";

  const nextUpdateDistance = insights.nextUpdate
    ? `in ${differenceInDays(
      new Date(insights.nextUpdate),
      new Date()
    )} days`
    : "N/A";

  const { Icon: OutlookIcon, color: outlookColor } =
    getMarketOutlookInfo(insights.marketOutlook);



  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge variant="default">
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Market Outlook */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Market Outlook
            </CardTitle>
            <OutlookIcon className={`h-5 w-5 ${outlookColor}`} />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {insights.marketOutlook}
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        {/* Industry Growth */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Industry Growth
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Demand Level
            </CardTitle>
            <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold">
              {insights.demandLevel}
            </div>
            <div
              className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(insights.demandLevel)}`}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Top Skills
            </CardTitle>
            <Brain className="h-5 w-5 text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap">
              {insights.topSkills?.length > 0 ? (
                insights.topSkills.map((skill) => (
                  <Badge key={skill} className="mr-2 mb-2" variant="secondary">
                    {skill}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No skills data available
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Salary Ranges by Role</CardTitle>
          <CardDescription>
            Salary ranges are shown in thousands (K)
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="min" name="Min Salary (K)" />
                <Bar dataKey="max" name="Max Salary (K)" />
                <Bar dataKey="median" name="Median Salary (K)" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="mb-2 flex items-start space-x-2">
                  <div className="ml-4 h-2 w-2 mt-2 rounded-full bg-primary"/>
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>
              Skills recommended for career growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              {insights.recommendedSkills.map((skill) => (
                <Badge key={skill} className="mr-2 mb-2" variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
