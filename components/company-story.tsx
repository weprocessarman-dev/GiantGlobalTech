'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function CompanyStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              Our Story
            </h2>
          </div>

          <div className="space-y-12">
            {/* Story Content */}
            <div 
              className="p-8 rounded-lg"
              style={{
                background: 'rgba(135, 135, 135, 0.2)',
                borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                borderRight: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <p 
                className={`${inter.className} text-lg mb-6`}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                Founded in 2020, GGT began as a vision to bridge the gap between cutting-edge technology and practical business solutions. Our journey started with a small team of passionate developers and designers who believed that technology should be accessible, intuitive, and transformative.
              </p>
              
              <p 
                className={`${inter.className} text-lg mb-6`}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                Over the years, we've grown from a startup to a trusted technology partner for businesses worldwide. Our commitment to innovation has led us to develop groundbreaking solutions that have helped thousands of companies streamline their operations and achieve their goals.
              </p>
              
              <p 
                className={`${inter.className} text-lg`}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                Today, we continue to push the boundaries of what's possible, always staying true to our core values of innovation, quality, and customer focus. Our story is just beginning, and we're excited about the future we're building together with our clients and partners.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 
                className={`${inter.className} font-bold text-center mb-8`}
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#FFFFFF'
                }}
              >
                Key Milestones
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(135, 135, 135, 0.1)',
                    borderLeft: '4px solid rgba(13, 61, 238, 0.8)',
                  }}
                >
                  <h4 className={`${inter.className} font-semibold text-lg mb-2 text-white`}>
                    2020 - Founded
                  </h4>
                  <p className={`${inter.className} text-sm text-white/80`}>
                    GGT was established with a vision to revolutionize business technology solutions.
                  </p>
                </div>
                
                <div 
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(135, 135, 135, 0.1)',
                    borderLeft: '4px solid rgba(13, 61, 238, 0.8)',
                  }}
                >
                  <h4 className={`${inter.className} font-semibold text-lg mb-2 text-white`}>
                    2021 - First Major Client
                  </h4>
                  <p className={`${inter.className} text-sm text-white/80`}>
                    Secured our first enterprise client and delivered our flagship product.
                  </p>
                </div>
                
                <div 
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(135, 135, 135, 0.1)',
                    borderLeft: '4px solid rgba(13, 61, 238, 0.8)',
                  }}
                >
                  <h4 className={`${inter.className} font-semibold text-lg mb-2 text-white`}>
                    2023 - Global Expansion
                  </h4>
                  <p className={`${inter.className} text-sm text-white/80`}>
                    Expanded operations internationally with offices in multiple countries.
                  </p>
                </div>
                
                <div 
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(135, 135, 135, 0.1)',
                    borderLeft: '4px solid rgba(13, 61, 238, 0.8)',
                  }}
                >
                  <h4 className={`${inter.className} font-semibold text-lg mb-2 text-white`}>
                    2024 - Innovation Award
                  </h4>
                  <p className={`${inter.className} text-sm text-white/80`}>
                    Received industry recognition for our innovative approach to technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}