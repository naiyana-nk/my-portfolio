"use client";

const experiences = [
  {
    id: 1,
    role: "Web & Automation Developer",
    company: "BeBlock Bangkok Co., Ltd.",
    period: "2025 — Present",
    type: "Full-time",
    description:
      "Design, develop and maintain web applications for a made-to-order ecommerce website for B2C customers with automation workflows using Google Apps Scripts and create responsive interfaces with interactive Canvas-Based components and real-time data visualization with production environments on AWS EC2 with 99%+ uptime cross browser compatibility and SEO best practices.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Script Apps",
      "Google Sheets",
      "Google Analytics",
    ],
  },
  {
    id: 2,
    role: "Cloud Engineer & IT Support (Internship)",
    company: "A-HOST Co., Ltd.",
    period: "2024 — 2025",
    type: "Internship",
    description:
      "Provided technical support by troubleshooting software and hardware issues while assisting in monitoring and maintaining database and implemented an AI-based firewall log analysis system to provide insights and recommendations for firewall network security and performance.",
    tags: [
      "Vue.js",
      "Vuetify",
      "Python",
      "SQL",
      "FastAPI",
      "Uvicorn",
      "Gemini 1.5 Flash",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 lg:px-8 bg-white border-t border-gray-100 scroll-mt-10"
    >
      <style>{`
        .exp-item {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 2rem;
          padding: 2.5rem 0;
          border-top: 0.5px solid #f3f4f6;
          transition: background 0.2s;
        }
        .exp-item:last-child { border-bottom: 0.5px solid #f3f4f6; }
        @media (max-width: 640px) {
          .exp-item { grid-template-columns: 1fr; gap: 1rem; }
        }
        .exp-tag {
          font-size: 11px;
          border: 0.5px solid #e5e7eb;
          border-radius: 100px;
          padding: 4px 12px;
          color: #9ca3af;
          transition: border-color 0.2s, color 0.2s;
        }
        .exp-item:hover .exp-tag {
          border-color: #d1d5db;
          color: #6366f1;
        }
        .exp-type {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 0.5px solid #d8dadd;
          border-radius: 100px;
          padding: 3px 10px;
          color: black;
          display: inline-block;
          margin-top: 6px;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-lg tracking-[0.18em] uppercase text-black font-bold">
            Experience
          </span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Timeline list */}
        <div>
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-item group">
              {/* Left — period + company */}
              <div className="pt-0.5 pr-3">
                <p className="text-sm font-light text-gray-500 mb-1">
                  {exp.period}
                </p>
                <p className="text-lg font-medium text-indigo-500">
                  {exp.company}
                </p>
                <span className="exp-type">{exp.type}</span>
              </div>

              {/* Right — role + description + tags */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {exp.role}
                </h3>
                <p className="text-md font-light leading-[1.85] text-gray-500 mb-5">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV */}
        <div className="mt-12 flex items-center gap-4">
          <a
            href="/files/naiyana-resume-fullstack.pdf"
            download
            className="text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full px-6 py-3 text-indigo-500 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Download Resume
          </a>
          <span className="text-xs text-gray-600 font-light">
            PDF, updated 22 June 2026
          </span>
        </div>
      </div>
    </section>
  );
}
