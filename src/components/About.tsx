import { portfolioData } from "@/services/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700">
          <p className="mb-6">
            {portfolioData.about}
          </p>
          <p className="mb-6">
            With over 5 years of experience in web development, I specialize in creating
            scalable applications with clean, maintainable code. I'm passionate about
            user experience and performance optimization.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source projects,
            writing technical articles, or exploring new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
