import { portfolioData } from "@/services/portfolioData";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight ml-10">
            {portfolioData.name}
          </h1>
          <h2 className="text-2xl md:text-4xl text-blue-400 mt-2 ml-10">
            {portfolioData.title}
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-lg ml-10">
            I create responsive, performant web applications with modern technologies
          </p>
          {/* <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            View My Work
          </button> */}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />
        </div>
      </div>
    </section>
  );
}
