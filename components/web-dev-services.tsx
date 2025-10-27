'use client';

const services = [
  {
    title: 'Custom Web Applications',
    description: 'Scalable, high-performance web apps built with modern frameworks',
    icon: '🚀'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with secure payment integration',
    icon: '🛒'
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first designs that work flawlessly on all devices',
    icon: '📱'
  },
  {
    title: 'API Development',
    description: 'RESTful and GraphQL APIs for seamless integrations',
    icon: '🔌'
  },
  {
    title: 'CMS Integration',
    description: 'Easy content management with headless CMS solutions',
    icon: '📝'
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and optimal user experience',
    icon: '⚡'
  }
];

export default function WebDevServices() {
  return (
    <section className="relative w-full bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="text-white text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-400 text-xl text-center mb-16 max-w-2xl mx-auto">
          Comprehensive web development solutions tailored to your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-white text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
