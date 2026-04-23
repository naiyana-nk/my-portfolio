"use client";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8 bg-white border-t border-gray-100 scroll-mt-10">
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
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] tracking-wide border border-gray-200 rounded-full px-3 py-1 text-gray-500"
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
                    className="text-xs tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
