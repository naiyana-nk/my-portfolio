"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Change the ref to target an iframe instead of audio
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "SQL",
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "C#",
    "Git",
    "Google Script Apps",
  ];

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

          <p className="text-center mb-10 text-lg text-gray-700 max-w-2xl mx-auto drop-shadow-md">
            Please click the button below to experience a surprise that will
            make your day!
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

        {/* About Section */}
        <section className="about-section py-28 px-6 lg:px-8 bg-white border-t border-gray-100">
          <style>{`
        .about-fade-in {
          animation: aboutFadeUp 0.7s ease forwards;
          opacity: 0;
        }
        .about-fade-in:nth-child(1) { animation-delay: 0.1s; }
        .about-fade-in:nth-child(2) { animation-delay: 0.25s; }
        .about-fade-in:nth-child(3) { animation-delay: 0.4s; }
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-pill {
          transition: background 0.2s, color 0.2s;
        }
        .skill-pill:hover {
          background: #6366f1;
          color: #fff;
        }
        .social-link {
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .social-link:hover {
          background: #6366f1;
          color: #fff;
          border-color: #6366f1;
        }
        .avatar-ring {
          transition: transform 0.4s ease;
        }
        .avatar-ring:hover {
          transform: scale(1.015);
        }
      `}</style>

          <div className="max-w-5xl mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-16 about-fade-in">
              <span className="text-xs tracking-[0.18em] uppercase text-gray-400">
                About me
              </span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* ── LEFT COLUMN ─────────────────────────────────────── */}
              <div className="about-fade-in">
                {/* Name */}
                <h2 className="about-display text-5xl sm:text-6xl leading-[1.1] text-gray-900 mb-3">
                  Naiyana
                  <br />
                  <em className="text-indigo-500 text-5xl">Norkaew</em>
                </h2>

                <p className="text-sm font-light tracking-widest text-black uppercase mb-8">
                  Full-Stack Developer &nbsp;
                </p>

                {/* Bio */}
                <p className="text-base leading-[1.9] text-gray-600 font-light mb-5">
                  Hi, I&apos;m Naiyana, please call me Oki — a Thai developer
                  who has passions for both logic and creativity. I enjoy
                  building web applications using logics and create creative
                  writings and artworks in my free time. I have a background in
                  Information Technology and have experience working with
                  various programming languages and frameworks. I&apos;m always
                  eager to learn new technologies and take on challenging
                  projects that allow me to grow as a developer.
                </p>
                <p className="text-base leading-[1.9] text-gray-600 font-light mb-10">
                  I&apos;m currently looking for new opportunities to contribute
                  my skills and grow as a developer. Especially in the field of
                  AI and machine learning, or Robotic Process Automation (RPA).
                  If you have any opportunities or would like to connect, please
                  feel free to reach out to me through the contact links below.
                  I&apos;m excited to collaborate and create amazing things
                  together!
                </p>

                {/* Social links */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {["LinkedIn", "Email me"].map((label) => (
                    <a
                      key={label}
                      href={
                        label === "LinkedIn"
                          ? "https://linkedin.com"
                          : "mailto:naiyana.nk14@gmail.com"
                      }
                      className="social-link text-xs tracking-widest uppercase border border-gray-300 rounded-full px-5 py-2.5 text-gray-700"
                    >
                      {label}
                    </a>
                  ))}
                </div>

                {/* Skills */}
                <div>
                  <p className="text-[10px] tracking-[0.16em] uppercase text-gray-400 mb-4">
                    Tools &amp; Tech
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill text-xs border border-gray-200 rounded-full px-4 py-1.5 text-gray-600 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT COLUMN ────────────────────────────────────── */}
              <div className="about-fade-in flex flex-col gap-5">
                {/* Photo */}
                <div className="avatar-ring relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 aspect-[3/4] w-full flex items-center justify-center">
                  {/* 
                <Image
                  src="/images/your-photo.jpg"
                  alt="Alex Johnson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              */}
                  <div className="flex flex-col items-center gap-3 text-gray-300 select-none pointer-events-none">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="text-xs">Your photo here</span>
                  </div>

                  {/* Location tag */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-500 whitespace-nowrap shadow-sm">
                    Based in Bangkok, TH
                  </div>
                </div>
              </div>
            </div>
          </div>
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
