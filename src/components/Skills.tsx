import { portfolioData } from "@/services/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-600">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-700">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="mb-6 text-black-100">
              <div className="flex justify-between mb-2 text-black-100">
                <span className="font-medium text-black-100">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
