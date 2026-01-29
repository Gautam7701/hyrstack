import {
  BrainCircuit,
  Briefcase,
  LineChart,
  ScrollText,
} from "lucide-react";

export const features = [
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-white" />,
    title: "ATS-Optimized Resume Builder",
    description:
      "Create clean, recruiter-approved resumes tailored to job descriptions and optimized for ATS systems.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-white" />,
    title: "AI Cover Letter Generator",
    description:
      "Generate role-specific cover letters in seconds, customized to your skills, experience, and company.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-white" />,
    title: "Smart Interview Preparation",
    description:
      "Practice AI-generated interview questions and receive instant feedback to improve clarity and confidence.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-white" />,
    title: "Career Progress Insights",
    description:
      "Track your readiness, identify skill gaps, and get actionable insights to move closer to your next role.",
  },
];
