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

// Song at the moment
const YOUTUBE_VIDEO_ID = "7-7knsP2n5w";
const momentNote =
  "The World Cup 2026 is about to start and the news of Shakira singing yet another world cup has been announced. So here I am, back to the song of my first ever World Cup I watched";

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
    emoji: "✍️",
    title: "Writing",
    description:
      "This hobbie could have been what I do if I haven't got into coding, I tend to not showing my real feelings to people around me, and sometimes, it just builds up and I need to let it out, so I write. sometimes diary, sometimes short stories just to make my feelings feel heard or some of my dreams that I cannot be come true.",
  },
  {
    emoji: "🎞️",
    title: "Video Editing",
    description:
      "Another one of my hobbies that I once considered turning into a job too, I find it really fun to edit videos, to think of how the story goes and how I can align the video into a stunning story, but now I just edit videos for fun, like some of the clips that I took when playing a game with friends",
  },
  {
    emoji: "📷",
    title: "Photography",
    description:
      "I usually take photos of nature, landscapes and the sunset. Sometimes, I take photos of not me but my friends when we hang out, I want to capture the moments where I am the perspective of an observer, not the one being observed. It's refreshing sometimes.",
  },
];

const favorites = [
  {
    category: "Game",
    items: [
      { name: "Genshin Impact", image: "./imgs/genshin.jpg" },
      { name: "Honkai Star Rail", image: "./imgs/starrail.jpg" },
      { name: "Umamusume Pretty Derby", image: "./imgs/umamusume.png" },
      { name: "Project Sekai Colorful Stage", image: "./imgs/pjsk.png" },
      { name: "Zenless Zone Zero", image: "./imgs/zzz.png" },
      { name: "Red Dead Redemption 2", image: "./imgs/rdr2.jpg" },
      { name: "Call of Duty", image: "./imgs/cod.png" },
      { name: "Stardew Valley", image: "./imgs/stardew.png" },
      { name: "FIFA", image: "./imgs/fifa.png" },
      { name: "F1", image: "./imgs/f1.jpg" },
    ],
  },
  {
    category: "Anime",
    items: [
      { name: "Love Live! School Idol Project", image: "./imgs/lovelive.jpg" },
      { name: "Kimetsu no Yaiba", image: "./imgs/kny.png" },
      { name: "Lycoris Recoil", image: "./imgs/lycoreco.png" },
      { name: "Sword Art Online", image: "./imgs/sao.png" },
      { name: "Madoka Magica", image: "./imgs/madoka.png" },
      { name: "Re:Zero", image: "./imgs/rezero.jpg" },
      { name: "Kantai Collection", image: "./imgs/kancolle.jpg" },
      {
        name: "Tensei oujo to Tensai reijou no Mahou Kakumei",
        image: "./imgs/tensaitensei.jpg",
      },
    ],
  },
  {
    category: "Music",
    items: [
      {
        name: "D/N/A",
        image: "./imgs/dna.jpg",
        url: "https://www.youtube.com/watch?v=RyRfLSOewbU",
      },
      {
        name: "Engeki",
        image: "./imgs/engeki.jpg",
        url: "https://www.youtube.com/watch?v=U_RhSRVL6GI",
      },
      {
        name: "Stay on Course",
        image: "./imgs/janii.jpg",
        url: "https://www.youtube.com/watch?v=ybQ_ObZ9BaA",
      },
      {
        name: "Supernova",
        image: "./imgs/supernova.jpg",
        url: "https://www.youtube.com/watch?v=2DGf-KlKXGA",
      },
      {
        name: "Cinema",
        image: "./imgs/cinema.jpg",
        url: "https://www.youtube.com/watch?v=8m1cUgLepmY",
      },
      {
        name: "Regulus",
        image: "./imgs/regulus.png",
        url: "https://www.youtube.com/watch?v=i8XnOZgtE34",
      },
      {
        name: "Eyelid",
        image: "./imgs/eyelid.jpg",
        url: "https://www.youtube.com/watch?v=o4AS22B_9vU",
      },
      {
        name: "Kotobakaze",
        image: "./imgs/kotobakaze.png",
        url: "https://www.youtube.com/watch?v=a8p0l7_h9Ys",
      },
    ],
  },
  {
    category: "Manga",
    items: [
      { name: "The Summer You Were There", image: "./imgs/summer.png" },
      { name: "Whisper Me a Love Song", image: "./imgs/sasayaku.png" },
      {
        name: "I'm in Love with the Villainess",
        image: "./imgs/villainess.png",
      },
    ],
  },
];

const categoryIcon: Record<string, string> = {
  Game: "🎮",
  Anime: "🌸",
  Music: "🎵",
  Manga: "📖",
};

const photos = [
  {
    aspect: "aspect-4/5",
    img: "./imgs/moments-memes/wrong-shoes.jpg",
    date: "28 April 2026",
    caption:
      "When you work too hard and your brain fried, and here I am, wearing wrong pair of shoes to work, luckily I noticed it before I got on the bus lol.",
  },
  {
    aspect: "aspect-4/5",
    img: "./imgs/moments-memes/animonium.jpg",
    date: "05 February 2026",
    caption:
      "First time going to an anime exhibition as an exhibitor. Like holy- I have to stay until almost midnight DURING WEEKENDS after I've been at the convention since 8 in the morning... man.",
  },
  {
    aspect: "aspect-4/5",
    img: "./imgs/moments-memes/haruwinarima.jpg",
    date: "09 January 2026",
    caption:
      "I FINALLY GOT MY BABY HARU URARA TO WIN ARIMA KINEN, OMG ;^; (With the power of the clock and long and turf sparks I got from Orfevre & Seiun Sky)",
  },
];

// Replace thumbnail with your own image paths, and url with the actual links.
// type can be: "Video" | "Photo" | "Writing" | "Other"
const creativeWorks = [
  {
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/rD-5ZxbylMQ/maxresdefault.jpg",
    title: "Butterfly Effect Trailer (ที่ไม่รู้จะทำเกมเต็มเสร็จชาติไหน)",
    description:
      "Game trailer I created as my presentation for my 3rd year project at university, though I haven' really finished developing the game, but I still want to redevelop the game using better tools.",
    url: "https://www.youtube.com/watch?v=rD-5ZxbylMQ",
    date: "04 Jun 2025",
  },
  {
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/GgbZFgkOyzU/maxresdefault.jpg",
    title: "what's in phasmophobia",
    description:
      "Played phasmophobia and it's funny seeing one of my friends scared of some anomalies in the game even though there are no ghosts.",
    url: "https://www.youtube.com/watch?v=GgbZFgkOyzU",
    date: "04 Jun 2025",
  },
  {
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/xX4laMzVJ4o/maxresdefault.jpg",
    title: "[vlog] - Our daily lives",
    description:
      "A project to create our vlog video in english for my English class.",
    url: "https://www.youtube.com/watch?v=xX4laMzVJ4o",
    date: "15 Mar 2022",
  },
  {
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/pC2V-BJsMSs/maxresdefault.jpg",
    title: "เมื่อคุณเจอคนไทย AR60",
    description:
      "I saw a veteran player in genshin with many maximum constellations and weapon stacks in genshin and think of how many did this person spend on the game and compared to my broke self.",
    url: "https://www.youtube.com/watch?v=pC2V-BJsMSs",
    date: "15 Apr 2022",
  },
  {
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/lBO6MfhEdY8/maxresdefault.jpg",
    title: "เมื่อเพื่อนของคุณยังโหลดเกมไม่เสร็จ...",
    description:
      "Just a short funny moment where my friends and I were going to fight a boss in Genshin Impact and one of my friend has a potato device so we saw the character run in the air.",
    url: "https://www.youtube.com/watch?v=lBO6MfhEdY8",
    date: "14 Apr 2022",
  },
  {
    type: "Video",
    thumbnail: "https://img.youtube.com/vi/jbl6HWWKPas/maxresdefault.jpg",
    title: "รีวิวขนมญี่ปุ่น : ไอศกรีมกูลิโกะ",
    description:
      "Back when I was a high schooler, in my Japanese Cultural class, I got assigned with a project to make a review on Japanese snacks, so my team and I decided to review an ice cream from Glico.",
    url: "https://www.youtube.com/watch?v=jbl6HWWKPas",
    date: "08 Feb 2021",
  },
];

const typeStyles: Record<string, string> = {
  Video: "bg-indigo-50 text-indigo-500",
  Photo: "bg-emerald-50 text-emerald-500",
  Writing: "bg-amber-50 text-amber-500",
};

const typeIcon: Record<string, string> = {
  Video: "🎞️",
  Photo: "📷",
  Writing: "✍️",
};

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
          <p className="text-base font-light leading-[1.9] text-gray-500 max-w-xl">
            Work is a big part of who I am, but not all of it. Here&apos;s a
            glimpse into how I spend my time when I&apos;m not building things
            on a screen.
          </p>
        </div>
      </section>

      {/* ── MUSIC OF THE MOMENT ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm tracking-[0.18em] uppercase text-black font-bold">
              Music I'm addicted to Recently
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex justify-center">
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
          <p className="text-sm font-light leading-[1.5] text-gray-500 text-center pt-6">
            <span className="text-md text-indigo-500 font-bold">📝 Note: </span>
            {momentNote}
          </p>
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
                className="group bg-white rounded-2xl border border-gray-100 p-7 hover:border-indigo-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mb-5 block">{emoji}</span>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm font-light leading-[1.85] text-gray-500">
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

          <div className="flex flex-col gap-16">
            {favorites.map(({ category, items }) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-base">{categoryIcon[category]}</span>
                  <span className="text-sm font-bold text-indigo-500 tracking-wide">
                    {category}
                  </span>
                  <span className="flex-1 h-px bg-gray-200" />
                  <span className="text-[10px] tracking-widest uppercase text-gray-500">
                    {items.length} items
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                  {items.map(
                    ({
                      name,
                      image,
                      url,
                    }: {
                      name: string;
                      image: string | null;
                      url?: string;
                    }) => (
                      <div
                        key={name}
                        className="flex flex-col items-center gap-2 group"
                      >
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(url, "_blank");
                            }}
                          >
                            <div className="w-full aspect-square rounded-2xl bg-gray-200 border border-gray-100 overflow-hidden flex items-center justify-center group-hover:border-indigo-500 group-hover:shadow-sm transition-all duration-200">
                              {image ? (
                                <img
                                  src={image}
                                  alt={name}
                                  className="w-full h-full object-cover pointer-events-none"
                                />
                              ) : (
                                <span className="text-2xl select-none">
                                  {categoryIcon[category]}
                                </span>
                              )}
                            </div>
                          </a>
                        ) : (
                          <div className="w-full aspect-square rounded-2xl bg-gray-200 border border-gray-100 overflow-hidden flex items-center justify-center group-hover:border-indigo-500 group-hover:shadow-sm transition-all duration-200">
                            {image ? (
                              <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-2xl select-none">
                                {categoryIcon[category]}
                              </span>
                            )}
                          </div>
                        )}
                        <p className="text-[12px] text-center text-gray-600 font-light leading-tight line-clamp-2 w-full">
                          {name}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATIVE WORKS ───────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-[0.18em] uppercase text-black font-bold">
              Creative Works
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>
          <p className="text-sm font-light text-gray-600 mb-16">
            Things I&apos;ve made outside of my day job — video edits,
            photography, writing, and whatever else I felt like making.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeWorks.map((work, i) => (
              <a
                key={i}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-indigo-500 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="aspect-video w-full bg-gray-100 overflow-hidden flex items-center justify-center relative">
                  {work.thumbnail ? (
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />
                  ) : (
                    <span className="text-4xl select-none opacity-30">
                      {typeIcon[work.type]}
                    </span>
                  )}
                  {/* Play icon overlay for videos */}
                  {work.type === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-white/90 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#6366f1"
                        >
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] tracking-widest uppercase font-medium px-2.5 py-1 rounded-full ${typeStyles[work.type]}`}
                    >
                      {work.type}
                    </span>
                    <span className="text-[10px] text-gray-400 font-light">
                      {work.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-black mb-2 leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs font-light leading-[1.75] text-gray-500 flex-grow">
                    {work.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-indigo-500 text-xs font-medium">
                    <span>View</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ───────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-sm tracking-[0.18em] uppercase text-black font-bold">
              My Favorite Moments & Memes
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-indigo-500 hover:shadow-sm transition-all duration-300"
              >
                {/* Photo placeholder — swap with <Image> when ready */}
                <div
                  className={`${photo.aspect} bg-gray-100 w-full flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="flex flex-col items-center gap-2 text-gray-300 select-none pointer-events-none">
                    <img
                      src={photo.img}
                      className="w-full h-full object-cover"
                    />
                    <span className="text-[10px]">Photo {i + 1}</span>
                  </div>
                </div>

                {/* Post footer */}
                <div className="px-5 pt-4 pb-5">
                  <p className="text-[10px] text-indigo-500 mb-2">
                    {photo.date}
                  </p>
                  <p className="text-[13px] leading-[1.75] text-gray-500">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
