"use client";

import AboutMe from "@/components/AboutMe";
import WelcomeText from "@/components/WelcomeText";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <main className="flex-grow">
        <WelcomeText />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
