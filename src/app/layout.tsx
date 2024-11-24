import { Confetti } from "@/components/confetti";
import {
  Bars3Icon,
  CheckBadgeIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "sonner";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Raiyan Sarker",
    default: "Raiyan | Building Digital Dreams & Debugging Reality",
  },
  description:
    "Developer by trade, eternal student by choice. Specializing in creating robust, user-friendly applications while constantly expanding my technical horizons.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black.png",
        href: "/favicon-black.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-white.png",
        href: "/favicon-white.png",
      },
    ],
  },
  keywords: [
    "Raiyan Sarker",
    "Sarker Developer",
    "Raiyan Dev",
    "Raiyan Portfolio",

    // Core Professional Terms
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Student Developer",

    // Technical Skills
    "Frontend Development",
    "Backend Development",
    "JavaScript Developer",
    "Web Applications",
    "API Development",
    "Clean Code",

    // Action Terms
    "Hire Developer",
    "Developer Portfolio",
    "Code Projects",
    "Software Solutions",
    "Tech Portfolio",

    // Soft Skills & Traits
    "Problem Solver",
    "Tech Innovator",
    "Software Architect",
    "Tech Enthusiast",
    "Digital Craftsman",

    // Branded Terms
    "Code Artisan",
    "Tech Explorer",
    "Digital Solutions",
    "Future-Focused Developer",

    // Location & Work Style
    "Remote Developer",
    "Available for Hire",
    "Freelance Developer",

    // Industry Specific
    "Web Solutions",
    "Software Development",
    "Tech Projects",
    "Digital Innovation",

    "JavaScript",
    "React",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster theme="system" invert />
        <Confetti>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(min-content,25%),1fr] lg:mx-auto lg:w-[80vw] lg:border-x lg:dark:border-white/20">
            <div className="hidden border-r md:block dark:border-white/20">
              <ul className="grid grid-cols-1">
                {Array(7)
                  .fill({})
                  .map((_, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[theme(spacing[12]),1fr] items-center gap-x-4 border-b px-4 py-6 dark:border-white/20"
                    >
                      <div className="size-12 animate-pulse rounded-full bg-gray-950/10 dark:bg-white/10" />
                      <div className="w-full space-y-2">
                        <div className="h-4 w-[95%] animate-pulse rounded-md bg-gray-950/10 dark:bg-white/10" />
                        <div className="h-4 w-[70%] animate-pulse rounded-md bg-gray-950/10 dark:bg-white/10" />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="relative grid h-full min-h-svh grid-rows-[theme(spacing[16]),1fr]">
              <header className="sticky top-0 z-10 grid grid-cols-[theme(spacing[6]),1fr,theme(spacing[6])] grid-rows-1 content-center gap-x-4 border-b bg-background px-6 py-3 dark:border-white/20">
                <button>
                  <Bars3Icon className="size-6 stroke-2" />
                </button>
                <div className="flex items-center gap-x-3">
                  <Image
                    src="https://avatars.githubusercontent.com/u/38852396?v=4"
                    alt="Raiyan"
                    width={200}
                    height={200}
                    className="size-11 rounded-full ring-1 ring-gray-950/90 ring-offset-2 ring-offset-[var(--background)] dark:ring-white/30"
                  />
                  <div className="space-y-1">
                    <h1 className="flex items-center gap-x-2 text-lg font-semibold leading-none">
                      Raiyan Sarker
                      <span>
                        <CheckBadgeIcon className="size-5" />
                      </span>
                    </h1>
                    <p className="text-sm leading-none text-gray-950/70 dark:text-white/50">
                      Online
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-grid place-items-center"
                  title="Contact Me"
                >
                  <span className="sr-only">Go to contact page</span>
                  <EnvelopeIcon className="size-6 stroke-2" />
                </Link>
              </header>
              {children}
            </div>
          </div>
        </Confetti>
      </body>
    </html>
  );
}
