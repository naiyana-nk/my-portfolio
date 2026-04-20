export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* HERO SECTION (Your original code, enhanced) */}
        <section className="pt-10 pb-16 px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 pb-10">
            Welcome to My Portfolio
          </h1>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="-m-1.5 p-1.5 block w-fit mx-auto group"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Never Gonna Give You Up</span>
            <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-indigo-500/20 ring-1 ring-gray-900/5">
              <img
                alt="My best project"
                src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                className="h-auto max-h-[400px] w-auto rounded-xl object-cover"
              />
              {/* Subtle overlay effect on hover */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 rounded-xl"></div>
            </div>
          </a>

          <p className="text-center mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a full-stack developer passionate about building seamless
            digital experiences. Click the image above to see my most robust and
            foolproof application yet.
          </p>
        </section>

        {/* WHAT I DO SECTION (New addition for a complete landing page) */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10 text-center">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  {/* Icon placeholder */}
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

      {/* FOOTER */}
      <footer className="bg-white py-10 text-center text-gray-500 border-t border-gray-200">
        <p className="text-sm">
          © {new Date().getFullYear()} Naiyana Norkaew. Never gonna let you down.
        </p>
      </footer>
    </div>
  );
}
