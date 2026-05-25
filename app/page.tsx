"use client";

import AboutMe from "@/components/AboutMe";
import WelcomeText from "@/components/WelcomeText";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Analytics } from "@vercel/analytics/next" 

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <main className="flex-grow">
        <WelcomeText />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
        <Analytics /> {/* Vercel Analytics */}
      </main>
    </div>
  );
}
