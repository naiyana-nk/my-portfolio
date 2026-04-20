"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Change the ref to target an iframe instead of audio
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleAudio = () => {
    // Safety check
    if (!iframeRef.current?.contentWindow) return;

    if (isPlaying) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute", args: [] }),
        "*",
      );
      setIsPlaying(false);
    } else {
      // Tell the video to seek back to 0 seconds
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "seekTo", args: [0, true] }),
        "*",
      );

      // Unmute it so they hear the intro immediately
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: [] }),
        "*",
      );
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="relative pt-32 pb-40 px-6 lg:px-8 w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=dQw4w9WgXcQ&enablejsapi=1"
              className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            ></iframe>
          </div>

          <div className="absolute inset-0 bg-gray-900/75 -z-10 backdrop-blur-[2px]"></div>

          <h1 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-black pb-8 drop-shadow-lg max-w-4xl mx-auto">
            Welcome to My Portfolio Website
          </h1>

          <p className="text-center mb-10 text-lg text-black-200 max-w-2xl mx-auto drop-shadow-md">
            I'm a full-stack developer passionate about building seamless
            digital experiences. I'm never gonna give up on writing clean code.
          </p>

          <button
            onClick={toggleAudio}
            className={`cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 rounded-full shadow-lg ${
              isPlaying
                ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-95"
                : "bg-white text-gray-900 border border-transparent hover:bg-gray-100 hover:scale-105"
            }`}
          >
            {isPlaying ? "⏸ Pause Music" : "🔊 Surprise!"}
          </button>
        </section>

        {/* WHAT I DO SECTION */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10 text-center">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Frontend Engineering
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crafting beautiful, responsive, and accessible user interfaces
                  using modern frameworks like React and Next.js.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Backend Systems
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Designing robust APIs and managing scalable databases to
                  ensure data integrity and lightning-fast performance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Problem Solving
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Turning complex business requirements into elegant technical
                  solutions that scale effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
