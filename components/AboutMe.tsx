"use client";

import Image from "next/image";

export default function AboutMe() {
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
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
  ];

  return (
    <section id="about" className="about-section py-28 px-6 lg:px-8 bg-white border-t border-gray-100 scroll-mt-10">
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
          <span className="text-lg tracking-[0.18em] uppercase text-black font-bold">
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
              Hi, I&apos;m Naiyana, please call me Oki — a Thai developer who
              has passions for both logic and creativity. I enjoy building web
              applications using logics and create creative writings and
              artworks in my free time. I have a background in Information
              Technology and have experience working with various programming
              languages and frameworks. I&apos;m always eager to learn new
              technologies and take on challenging projects that allow me to
              grow as a developer.
            </p>
            <p className="text-base leading-[1.9] text-gray-600 font-light mb-10">
              I&apos;m currently looking for new opportunities to contribute my
              skills and grow as a developer. Especially in the field of AI and
              machine learning, or Robotic Process Automation (RPA). If you have
              any opportunities or would like to connect, please feel free to
              reach out to me through the contact links below. I&apos;m excited
              to collaborate and create amazing things together!
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
              <Image
                src="/imgs/mypfp.jpg"
                alt="My Profile Picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

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
                <span className="text-xs">My Profile</span>
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
  );
}
