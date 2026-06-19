"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:pb-28 lg:pt-40">
      <div className="grid-background opacity-70" />
      <div className="absolute left-1/2 top-28 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-200/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-white/[0.04] px-4 py-2 text-sm font-medium text-sky-100 shadow-lg shadow-white/5"
          >
            <Sparkles className="h-4 w-4" />
            AI career operating system for modern job seekers
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Build a career profile recruiters remember.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            HyrStack helps you create ATS-ready resumes, generate tailored cover
            letters, and practice interviews with AI guidance tuned to your
            industry, skills, and target role.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="xl">
              <Link href="/dashboard">
                Start Building
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/resumebuilder">
                <FileText />
                Build Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-white/65 sm:grid-cols-3"
          >
            {[
              ["ATS-ready", BadgeCheck],
              ["AI feedback", BrainCircuit],
              ["Secure auth", ShieldCheck],
            ].map(([label, Icon]) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
              >
                <Icon className="h-4 w-4 text-sky-200" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative min-h-[470px] lg:min-h-[620px]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-sky-200/10 blur-3xl" />
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/70 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/45">Career readiness</p>
                      <p className="text-3xl font-semibold text-white">92%</p>
                    </div>
                    <div className="rounded-full border border-sky-200/20 bg-white/[0.05] px-3 py-1 text-sm text-sky-100">
                      Interview ready
                    </div>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[92%] rounded-full bg-sky-200" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                      Resume
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      ATS Optimized
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                      Cover Letter
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Role Matched
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02]">
                  <Image
                    src="/herimage.png"
                    alt="AI career assistant interface"
                    width={720}
                    height={600}
                    className="absolute bottom-[-4rem] right-[-5rem] w-[34rem] max-w-none drop-shadow-[0_40px_120px_rgba(125,211,252,0.18)] sm:right-[-3rem]"
                    priority
                  />
                  <div className="absolute left-5 top-5 max-w-[15rem]">
                    <p className="text-sm text-white/55">AI suggestion</p>
                    <p className="mt-2 text-lg font-medium text-white">
                      Add impact metrics to strengthen your experience section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
