'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Leading the company with 10+ years of experience in technology and innovation.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Technical visionary driving our product development and engineering excellence.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Head of Design",
    bio: "Creating beautiful and intuitive user experiences that delight our customers.",
    image: "/placeholder-user.jpg"
  }
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`${inter.className} font-bold mb-8`}
            style={{
              fontSize: '36px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0.2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Meet Our Team
          </h2>
          <p 
            className={`${inter.className} text-lg max-w-3xl mx-auto`}
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 400,
              lineHeight: '1.6'
            }}
          >
            The talented individuals behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg transition-transform duration-300 hover:scale-105"
              style={{
                background: 'rgba(135, 135, 135, 0.2)',
                borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                borderRight: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Team Member Image */}
              <div 
                className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)'
                  }}
                />
              </div>

              {/* Team Member Info */}
              <h3 
                className={`${inter.className} font-semibold text-xl mb-2`}
                style={{ color: '#FFFFFF' }}
              >
                {member.name}
              </h3>
              
              <p 
                className={`${inter.className} text-sm mb-3`}
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {member.role}
              </p>
              
              <p 
                className={`${inter.className} text-sm`}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.5'
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}