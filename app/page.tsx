"use client";

import AboutMe from "@/components/AboutMe";
import WelcomeText from "@/components/WelcomeText";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <main className="flex-grow">
        <WelcomeText />
        <AboutMe />
      </main>
    </div>
  );
}
