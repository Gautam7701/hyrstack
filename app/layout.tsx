import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = "https://hyrstack.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "HyrStack",
  title: {
    default: "HyrStack | AI Career Platform",
    template: "%s | HyrStack",
  },
  description:
    "Build ATS-ready resumes, tailored cover letters, and interview confidence with an AI-powered career platform.",
  keywords: [
    "AI resume builder",
    "ATS resume",
    "AI cover letter",
    "mock interview",
    "career platform",
    "job preparation",
  ],
  authors: [{ name: "HyrStack" }],
  creator: "HyrStack",
  publisher: "HyrStack",
  category: "career technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "HyrStack | AI Career Platform",
    description:
      "A premium AI career workspace for resumes, cover letters, interviews, and industry insights.",
    url: siteUrl,
    siteName: "HyrStack",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HyrStack AI career platform social preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HyrStack | AI Career Platform",
    description:
      "Build sharper career materials and prepare for interviews with AI.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster className="z-50" richColors />

            <footer className="relative overflow-hidden border-t border-white/10 bg-black/20">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/45 to-transparent" />
              <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      HyrStack
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      AI-powered tools to build your career faster.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
                    <Link href="/privacy" className="transition hover:text-white">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="transition hover:text-white">
                      Terms
                    </Link>
                    <Link href="/contact" className="transition hover:text-white">
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="mt-8 text-center text-xs text-white/40">
                  © {new Date().getFullYear()} HyrStack. All rights reserved.
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
