"use client";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hobbies = [
  {
    emoji: "🎮",
    title: "Gaming",
    description:
      "Story-driven and Rhythmic games are my thing. I like worlds I can get lost in for a few hours just aggressively pressing the notes for fun after a long day of staring at a code editor.",
  },
  {
    emoji: "🎵",
    title: "Music",
    description:
      "My favorites are quite unique, I can listen to many different genres, but it has to be something that resonates with me or I just like the beats. I rarely listen to the monthly top chart music like others to be honest. I do play some instruments like guitar or drums too but I'm not that good at it, I just do it for fun and to relax myself.",
  },
  {
    emoji: "📚",
    title: "Reading",
    description:
      "Of course it has to be fictional stories, I like to read about different worlds and characters, it's a great way to escape reality, to give myself a breather and enjoy the world that is different from my world.",
  },
  {
    emoji: "📷",
    title: "Photography",
    description:
      "I usually take photos of nature, landscapes and the sunset. Sometimes, I take photos of not me but my friends when we hang out, I want to capture the moments where I am the perspective of an observer, not the one being observed. It's refreshing sometimes.",
  },
  {
    emoji: "✍️",
    title: "Writing",
    description:
      "I tend to not showing my real feelings to people around me, and sometimes, it just builds up and I need to let it out, so I write. sometimes diary, sometimes short stories just to make my feelings feel heard or some of my dreams that I cannot be come true.",
  },
];

const favorites = [
  {
    category: "Game",
    items: [
      "Genshin Impact",
      "Honkai Star Rail",
      "Umamusume Pretty Derby",
      "Project Sekai Colorful Stage",
      "Zenless Zone Zero",
      "Red Dead Redemption 2",
      "Call of Duty",
      "Stardew Valley",
      "FIFA",
      "F1",
    ],
  },
  {
    category: "Anime",
    items: [
      "Love Live! Series",
      "Kimetsu no Yaiba",
      "Lycoris Recoil",
      "Inazuma Eleven",
      "Sword Art Online",
      "Madoka Magica",
      "Re:Zero",
      "Kantai Collection",
      "Tensei oujo to Tensai reijou no Mahou Kakumei",
    ],
  },
  {
    category: "Music",
    items: [
      "D/N/A - Nightcord at 25:00",
      "Engeki - Nightcord at 25:00",
      "Stay on course - Dream Journey",
      "Supernova - MORE MORE JUMP!",
      "Cinema - Vivid BAD SQUAD",
      "Regulus - Leo/need",
      "Eyelid - Wonderland x Showtime",
      "Kotobakaze - Tokino Sora",
    ],
  },
  {
    category: "Manga",
    items: [
      "Kimi to Tsuzuru Utakata (The summer you were there)",
      "Sasayaku you ni Koi wo Utau (Whisper Me a Love Song)",
      "Watashi no oshi wa Akuyaku Reijou (I'm in love with the Villainess)",
    ],
  },
];

const YOUTUBE_VIDEO_ID = "o4AS22B_9vU";

export default function Interests() {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth bg-white min-h-screen`}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-lg tracking-[0.18em] uppercase text-black font-bold">
              Beyond Coding
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-gray-900 mb-8 max-w-3xl">
            The stuff I care about{" "}
            <em className="text-indigo-500">outside work.</em>
          </h1>
          <p className="text-base font-light leading-[1.9] text-gray-400 max-w-xl">
            Work is a big part of who I am, but not all of it. Here's a glimpse
            into how I spend my time when I'm not building things on a screen.
          </p>
        </div>
      </section>

      {/* ── MUSIC OF THE MOMENT ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm tracking-[0.18em] uppercase text-black font-bold">
              Music of the moment
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex justify-center">
            {/* YouTube embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-100 aspect-video w-full max-w-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Currently into"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOBBIES ──────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm tracking-[0.18em] uppercase text-black font-bold">
              Hobbies
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map(({ emoji, title, description }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl border border-gray-100 p-7 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mb-5 block">{emoji}</span>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm font-light leading-[1.85] text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAVORITES ────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm tracking-[0.18em] uppercase text-black font-bold">
              Favorites
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {favorites.map(({ category, items }) => (
              <div key={category}>
                <p className="text-[10px] tracking-[0.16em] uppercase text-indigo-500 font-bold mb-5">
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {items.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[10px] text-indigo-500 mt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-light text-gray-600 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ───────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.18em] uppercase text-gray-400">
              Captured moments
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "aspect-square",
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[4/3]",
              "aspect-square",
              "aspect-[3/4]",
            ].map((aspect, i) => (
              <div
                key={i}
                className={`${aspect} bg-gray-100 rounded-2xl border border-gray-100 flex items-center justify-center`}
              >
                <div className="flex flex-col items-center gap-2 text-gray-300 select-none pointer-events-none">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-[10px]">Photo {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
