"use client";

import { format, differenceInDays } from "date-fns";
import {
  BarChart,
  Brain,
  BriefcaseIcon,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  if (!insights) {
    return (
      <Card>
        <CardContent className="py-10 text-white/60">
          Loading insights...
        </CardContent>
      </Card>
    );
  }

  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
    location: range.location,
  }));

  const getDemandLevelClass = (level) => {
    switch (level?.toLowerCase?.()) {
      case "high":
        return "from-white to-sky-200";
      case "medium":
        return "from-yellow-300 to-orange-300";
      case "low":
        return "from-red-300 to-pink-300";
      default:
        return "from-slate-300 to-slate-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook?.toLowerCase?.()) {
      case "positive":
        return { Icon: TrendingUp, color: "text-emerald-300" };
      case "negative":
        return { Icon: TrendingDown, color: "text-red-300" };
      case "neutral":
        return { Icon: BarChart, color: "text-yellow-300" };
      default:
        return { Icon: BarChart, color: "text-white/60" };
    }
  };

  const lastUpdatedDate = insights.lastUpdated
    ? format(new Date(insights.lastUpdated), "MMMM dd, yyyy")
    : "N/A";

  const nextUpdateDistance = insights.nextUpdate
    ? `in ${Math.max(
        differenceInDays(new Date(insights.nextUpdate), new Date()),
        0
      )} days`
    : "N/A";

  const { Icon: OutlookIcon, color: outlookColor } = getMarketOutlookInfo(
    insights.marketOutlook
  );

  const summaryCards = [
    {
      title: "Market Outlook",
      value: insights.marketOutlook,
      helper: `Next update ${nextUpdateDistance}`,
      Icon: OutlookIcon,
      iconClass: outlookColor,
    },
    {
      title: "Industry Growth",
      value: `${insights.growthRate.toFixed(1)}%`,
      helper: "Projected momentum",
      Icon: TrendingUp,
      iconClass: "text-sky-200",
      progress: insights.growthRate,
    },
    {
      title: "Demand Level",
      value: insights.demandLevel,
      helper: "Hiring signal strength",
      Icon: BriefcaseIcon,
      iconClass: "text-sky-200",
      demand: true,
    },
    {
      title: "Top Skills",
      value: `${insights.topSkills?.length || 0} skills`,
      helper: "Most requested keywords",
      Icon: Brain,
      iconClass: "text-sky-200",
      skills: insights.topSkills,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Badge variant="secondary">Last updated: {lastUpdatedDate}</Badge>
        <p className="text-sm text-white/45">
          Salary data displayed in thousands (K)
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map(
          ({ title, value, helper, Icon, iconClass, progress, demand, skills }) => (
            <Card key={title} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/65">
                  {title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${iconClass}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold text-white">{value}</div>
                <p className="mt-2 text-xs text-white/45">{helper}</p>
                {progress !== undefined && (
                  <Progress value={progress} className="mt-4 h-2" />
                )}
                {demand && (
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${getDemandLevelClass(
                        insights.demandLevel
                      )}`}
                    />
                  </div>
                )}
                {skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.length > 0 ? (
                      skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-white/45">
                        No skills data available
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-white">
            Salary Ranges by Role
          </CardTitle>
          <CardDescription>
            Compare minimum, median, and maximum compensation bands.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={salaryData}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.55)" />
                <YAxis stroke="rgba(255,255,255,0.55)" />
                <Tooltip
                  contentStyle={{
                    background: "rgba(2, 6, 23, 0.92)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px",
                    color: "#fff",
                  }}
                />
                <Legend />
                <Bar dataKey="min" name="Min Salary (K)" fill="#67e8f9" radius={[8, 8, 0, 0]} />
                <Bar dataKey="median" name="Median Salary (K)" fill="#60a5fa" radius={[8, 8, 0, 0]} />
                <Bar dataKey="max" name="Max Salary (K)" fill="#a78bfa" radius={[8, 8, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-white">
              Key Industry Trends
            </CardTitle>
            <CardDescription>Current themes shaping your market.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start gap-3 text-white/72">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-200" />
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-white">
              Recommended Skills
            </CardTitle>
            <CardDescription>High-signal skills to prioritize.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills.map((skill) => (
                <Badge key={skill} variant="outline">
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
