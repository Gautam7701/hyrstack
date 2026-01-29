"use-client"

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "../data/features";
import { testimonial } from "../data/testimonial";
import { faqs } from "../data/faqs";
import { howItWorks } from "../data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
  
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
  </div>

  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
        Platform at a glance
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
        Built to help you get hired  
        <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          faster & smarter
        </span>
      </h2>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">

      {[
        { value: "100+", label: "ATS-Optimized Templates" },
        { value: "1,500+", label: "AI Interview Questions" },
        { value: "90%", label: "Resume Shortlisting Rate" },
        { value: "24/7", label: "AI Career Assistance" },
      ].map((stat, i) => (
        <div
          key={i}
          className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
        >
          <h3 className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-3">
            {stat.value}
          </h3>
          <p className="text-sm md:text-base text-white/60">
            {stat.label}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>




      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full" />
  </div>

  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
        Testimonials
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-white">
        What our users say
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonial.map((item, index) => (
        <div
          key={index}
          className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
        >
          {/* Quote */}
          <p className="text-white/70 text-sm md:text-base leading-relaxed italic mb-6 relative">
            <span className="absolute -top-4 -left-2 text-4xl text-blue-400/30">“</span>
            {item.quote}
          </p>

          {/* User */}
          <div className="flex items-center gap-4 mt-auto">
            <Image
              src={item.image}
              alt={item.author}
              width={48}
              height={48}
              className="rounded-full border border-white/10 object-cover"
            />
            <div>
              <p className="text-white font-medium leading-tight">
                {item.author}
              </p>
              <p className="text-xs text-white/50">
                {item.role}
              </p>
              <p className="text-xs bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {item.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-black/95 to-black">
  <div className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
    
    {/* subtle glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-40" />

    <div className="relative z-10 py-20 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        Ready to accelerate your career?
      </h2>

      <p className="mt-4 text-base md:text-lg text-white/60">
        Join thousands of professionals building better resumes, writing
        stronger cover letters, and preparing smarter for interviews.
      </p>

      <Link href="/dashboard">
        <Button
          size="lg"
          className="mt-10 rounded-2xl bg-white text-black hover:bg-white/90 px-10 py-6 gap-2"
        >
          Start Your Journey Today <ArrowRight size={18} />
        </Button>
      </Link>
    </div>
  </div>
</section>

    </>
  );
}
