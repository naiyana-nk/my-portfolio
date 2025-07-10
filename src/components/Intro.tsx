import { portfolioData } from "@/services/portfolioData";

export default function intro() {
  return (
    <section className="min-h-screen flex items-center bg-blue-100 from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-15 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight ml-10">
            {portfolioData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-500 mt-2 ml-10">
            {portfolioData.title}
          </h2>
          <p className="mt-3 text-lm text-gray-600 max-w-lg ml-10">
            {portfolioData.statement}
          </p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition ml-10">
            View My Work
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <img src={portfolioData.profile} alt="Logo" className="w-300rem h-300rem rounded-full object-cover"/>
        </div>
      </div>
    </section>
  );
}
