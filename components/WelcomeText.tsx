"use client";

import { useState, useRef } from "react";

export default function WelcomeText() {
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
    <section className="relative pt-30 pb-30 px-6 lg:px-8 w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900">
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

      <h1 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-white pb-8 drop-shadow-lg max-w-4xl mx-auto">
        Welcome to My Portfolio Website
      </h1>

      <p className="text-center mb-10 text-lg text-white max-w-2xl mx-auto drop-shadow-md">
        Please click the button below to experience a surprise that will make
        your day!
      </p>

      <button
        onClick={toggleAudio}
        className={`cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 rounded-full shadow-lg ${
          isPlaying
            ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-95"
            : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 hover:scale-105"
        }`}
      >
        {isPlaying ? "⏸ Stop" : "🔊 Start"}
      </button>
    </section>
  );
}
