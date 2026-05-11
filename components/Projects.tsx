"use client";

const projects = [
  {
    id: 1,
    title: "Corporate Website",
    description:
      "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image: "./imgs/corporate-web.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Google Analytics"],
    liveUrl: "https://beblock-bangkok.co.th/",
  },
  {
    id: 2,
    title: "Custom Acrylic E-commerce Website",
    description:
      "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image: "./imgs/acryl-prod.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Google App Scripts", "Google Analytics"],
    liveUrl: "https://acryltatsujin-th.com/",
  },
  {
    id: 3,
    title: "Firewall Log Analytic With Generative AI Website",
    description:
      "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image: "./imgs/firewall-proj.png",
    techStack: ["Vue.js", "Vuetify", "Python", "SQL", "FastAPI", "Uvicorn", "Gemini 1.5 Flash"],
    liveUrl: "https://drive.google.com/file/d/1iC2E2ghWqTiEp5ypoVh5ASoWhAxeV33c/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Automate Bed Management System",
    description:
      "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image: "./imgs/abms.png",
    techStack: ["Microsoft Power Automate", "Microsoft Forms", "Microsoft Excel"],
    liveUrl: "https://www.youtube.com/watch?v=_CL5Ty9P2vg",
  },
  {
    id: 5,
    title: "Monozukuri Sunshine Website",
    description:
      "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image: "./imgs/monozukuri.png",
    techStack: ["Wordpress",],
    liveUrl: "https://monozukurisunshine.wordpress.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 lg:px-8 bg-white border-t border-gray-100 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 about-fade-in">
          <span className="text-lg tracking-[0.18em] uppercase text-black font-bold">
            My Projects
          </span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] tracking-wide border border-gray-200 rounded-full px-3 py-1 text-indigo-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase text-indigo-500 hover:text-gray-900 transition-colors"
                  >
                    Link {">"}
                  </a>
                  {/* <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
