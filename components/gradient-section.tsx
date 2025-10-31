'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GradientSection() {
  return (
    <>
      <style jsx>{`
        @media (min-width: 810px) and (max-width: 1199px) {
          .gradient-container {
            width: 610px !important;
            height: 350px !important;
          }
          
          .gradient-heading {
            font-size: 36px !important;
            line-height: 42px !important;
            font-family: 'Inter', sans-serif !important;
          }
          
          .gradient-text {
            font-size: 18px !important;
            font-family: 'Inter', sans-serif !important;
          }
          
          .gradient-button {
            width: 200px !important;
            height: 56px !important;
            font-size: 18px !important;
            padding: 14px 24px !important;
            font-family: 'Inter', sans-serif !important;
          }
        }
        
        @media (min-width: 390px) and (max-width: 809px) {
          .gradient-container {
            width: 350px !important;
            height: 250px !important;
          }
          
          .gradient-heading {
            font-size: 24px !important;
            line-height: 28px !important;
          }
          
          .gradient-text {
            font-size: 14px !important;
          }

          .gradient-button {
            width: 150px !important;
            height: 46px !important;
            font-size: 12px !important;
            padding: 14px 24px !important;
        }
      `}</style>
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '60px' }}>
        {/* Gradient Container */}
        <div 
          className="w-full relative gradient-container"
          style={{
            width: '1000px',
            height: '350px',
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
                className={`${inter.className} font-bold mb-4 gradient-heading`}
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '44px',
                  lineHeight: '50px',
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
                className={`${inter.className} mb-6 gradient-text`}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 400,
                  fontSize: '18px',
                }}
              >
                Add your content inside this gradient container
              </p>
              
              {/* Get Started Button */}
              <button
                className={`${inter.className} font-medium transition-all duration-300 ease-in-out hover:transform hover:scale-105 gradient-button`}
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
    </>
  );
}