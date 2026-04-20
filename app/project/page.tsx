const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-stack dashboard for managing online store inventory, tracking sales, and processing Stripe payments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col text-gray-900">
      <main className="flex-grow pt-16 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of things I've built. From full-stack applications to experimental front-end interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700"
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
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 flex items-center gap-1 transition-colors"
                  >
                    Live Demo
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900 flex items-center gap-1 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}