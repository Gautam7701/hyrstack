import {
  ArrowRight,
  Clock3,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { features } from "../data/features";
import { testimonial } from "../data/testimonial";
import { faqs } from "../data/faqs";
import { howItWorks } from "../data/howItWorks";

const metrics = [
  { value: "100+", label: "ATS-ready resume patterns" },
  { value: "1,500+", label: "AI interview prompts" },
  { value: "24/7", label: "Career workspace access" },
  { value: "4-in-1", label: "Resume, cover, interview, insights" },
];

const benefits = [
  {
    icon: Target,
    title: "Personalized to your market",
    text: "Industry insights and interview prep adapt to the role and skill path you choose.",
  },
  {
    icon: Clock3,
    title: "Built for momentum",
    text: "Move from profile to resume, cover letter, and practice session without fragmented tools.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy workflow",
    text: "Clerk authentication, saved progress, and clear review screens keep your work grounded.",
  },
];

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Career launchpad
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Everything you need to present, prepare, and progress.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/15 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-200/35 hover:bg-white/[0.07]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-sky-200/20 bg-white/[0.05] text-sky-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <div className="grid gap-6 md:grid-cols-4">
            {metrics.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/[0.04] p-6">
                <p className="gradient-title text-4xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/58">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Guided workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A clean path from profile to interview confidence.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              HyrStack keeps the full career preparation loop in one place:
              onboarding, AI content creation, market context, and measurable
              practice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {howItWorks.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6"
            >
              <Icon className="h-6 w-6 text-sky-200" />
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Social proof
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Designed for ambitious candidates.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonial.map((item) => (
              <article
                key={item.author}
                className="flex min-h-72 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
              >
                <div>
                  <div className="mb-5 flex gap-1 text-sky-200">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Sparkles key={index} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="leading-7 text-white/70">&ldquo;{item.quote}&rdquo;</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={48}
                    height={48}
                    className="rounded-full border border-white/10 object-cover"
                  />
                  <div>
                    <p className="font-medium text-white">{item.author}</p>
                    <p className="text-sm text-white/45">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Clear answers before you start.
            </h2>
            <p className="mt-5 text-white/60">
              HyrStack is built to make job preparation faster, cleaner, and
              more confidence-building.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-white/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl md:p-14">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Zap className="h-7 w-7 text-sky-200" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to make your next application sharper?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            Create stronger career materials, practice with AI, and walk into
            the next hiring conversation with a clearer story.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="xl">
              <Link href="/dashboard">
                Start Your Journey
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/interview">
                <Trophy />
                Practice Interviews
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
