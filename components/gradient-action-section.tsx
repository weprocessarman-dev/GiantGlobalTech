'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GradientActionSection() {
  return (
    <section className="w-full gradient-action-section" style={{ marginTop: '80px' }}>
      <div className="container mx-auto px-4">
        {/* Gradient Action Container */}
        <div 
          className="w-full relative"
          style={{
            width: '1035.4px',
            height: '345.11px',
            maxWidth: '100%',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.05) 100%)',
            backgroundImage: 'url("/startnowrectangle.png")',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Content inside the gradient action container */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <h2 
                className={`${inter.className} font-bold mb-4`}
                style={{
                  fontWeight: 700,
                  fontSize: '50px',
                  lineHeight: '55px',
                  textAlign: 'center',
                  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #FFFFFF 50.49%, rgba(0, 0, 0, 0) 100%)',
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
                Add your action-oriented content inside this gradient container
              </p>
              <button
                className={`${inter.className} font-medium transition-all duration-300 ease-in-out hover:transform hover:scale-105`}
                style={{
                  boxSizing: 'border-box',
                  width: '213.59px',
                  height: '55.63px',
                  background: '#001300',
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
                Take Action For Free
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .gradient-action-section > div > div {
            width: 95% !important;
            height: auto !important;
            padding: 40px 20px !important;
          }
          
          .gradient-action-section h2 {
            width: 100% !important;
            height: auto !important;
            font-size: 32px !important;
            line-height: 1.3 !important;
          }
          
          .gradient-action-section p {
            font-size: 16px !important;
          }
          
          .gradient-action-section button {
            width: 90% !important;
            max-width: 250px !important;
            height: 50px !important;
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .gradient-action-section > div > div {
            padding: 30px 15px !important;
          }
          
          .gradient-action-section h2 {
            font-size: 24px !important;
          }
          
          .gradient-action-section p {
            font-size: 14px !important;
          }
          
          .gradient-action-section button {
            width: 95% !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}
