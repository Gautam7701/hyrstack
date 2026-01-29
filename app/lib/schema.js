import { z } from "zod";

export const onboardingSchema = z.object({
    industry: z.string().min(1, "Industry is required"),
    experience: z.number().min(1, "Experience is required"),
    bio: z.string().min(1, "Bio is required").max(500, "Bio must be at most 500 characters"),
    skills: z.string().transform((val) => val.split(",").map((skill) => skill.trim())).refine((skills) => skills.length > 0, "At least one skill is required"),
});


export const contactSchema = z.object({
    email: z.string().email("Invalid email address"),
    mobile:z.string().min(10,"Invalid mobile number"),
    linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
    github: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
    twitter: z.string().url("Invalid Twitter URL").optional().or(z.literal("")),
});

export const entrySchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    organization: z.string().min(1, "Organization is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().optional(),
    description: z.string().min(1, "Description is required"),
    current: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (!data.current && !data.endDate) {
        return false;
      }
      return true;
    },
    {
      message: "End date is required unless this is your current position",
      path: ["endDate"],
    }
  );


  export const resumeSchema = z.object({
  contactInfo: contactSchema,
  summary: z.string().min(1, "Professional summary is required"),
  skills: z.string().min(1, "Skills are required"),
  experience: z.array(entrySchema),
  education: z.array(entrySchema),
  projects: z.array(entrySchema),
});


export const coverLetterSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Job description is required"),
});