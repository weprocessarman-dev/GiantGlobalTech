'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GradientSection() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4" style={{ marginTop: '80px' }}>
        {/* Gradient Container */}
        <div 
          className="w-full relative"
          style={{
            width: '1035.4px',
            height: '345.11px',
            maxWidth: '100%',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
            backgroundImage: 'url("/startnowrectangle.png")',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Content inside the gradient container */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <h2 
                className={`${inter.className} font-bold mb-4`}
                style={{
                  width: '719.45px',
                  height: '55.66px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '50px',
                  lineHeight: '55px',
                  textAlign: 'center' as const,
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0.2) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              >
                Get Started Today
              </h2>
              <p 
                className={`${inter.className} text-lg mb-6`}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 400,
                }}
              >
                Add your content inside this gradient container
              </p>
              
              {/* Get Started Button */}
              <button
                className={`${inter.className} font-medium transition-all duration-300 ease-in-out hover:transform hover:scale-105`}
                style={{
                  boxSizing: 'border-box',
                  width: '200px',
                  height: '50px',
                  background: '#000013',
                  borderRadius: '26px',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '20px auto',
                }}
              >
                Get Start For Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}