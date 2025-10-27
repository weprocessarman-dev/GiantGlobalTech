'use client';

const technologies = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  backend: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD']
};

export default function TechStackSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="text-white text-5xl font-bold text-center mb-4">Technology Stack</h2>
        <p className="text-gray-400 text-xl text-center mb-16 max-w-2xl mx-auto">
          We use cutting-edge technologies to build robust and scalable solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-blue-400 text-2xl font-bold mb-6">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.frontend.map((tech, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-green-400 text-2xl font-bold mb-6">Backend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.backend.map((tech, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full border border-gray-700 hover:border-green-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-purple-400 text-2xl font-bold mb-6">Tools & DevOps</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.tools.map((tech, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
