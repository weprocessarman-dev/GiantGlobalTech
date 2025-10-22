'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function StartNowSection() {

  return (
    <section 
      className="w-full" 
      style={{
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '200px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '1040px',
          height: '169.33px',
          borderRadius: '15px',
          overflow: 'visible',
          backgroundImage: 'url(/startnowrectangle.png)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
        }}
      >
        {/* Left Side - Stats Content */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            zIndex: 2,
          }}
        >
          {/* 99% Client Satisfaction */}
          <div style={{ textAlign: 'center' }}>
            <h3 
              className={`${inter.className}`}
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                lineHeight: '1',
              }}
            >
              99%
            </h3>
            <p 
              className={`${inter.className}`}
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                margin: '8px 0 0 0',
                lineHeight: '1.2',
              }}
            >
              Client Satisfaction
            </p>
          </div>

          {/* 5k+ Project Completed */}
          <div style={{ textAlign: 'center' }}>
            <h3 
              className={`${inter.className}`}
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                lineHeight: '1',
              }}
            >
              5k+
            </h3>
            <p 
              className={`${inter.className}`}
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                margin: '8px 0 0 0',
                lineHeight: '1.2',
              }}
            >
              Project Completed
            </p>
          </div>

          {/* 24/7 Full Support */}
          <div style={{ textAlign: 'center' }}>
            <h3 
              className={`${inter.className}`}
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                lineHeight: '1',
              }}
            >
              24/7
            </h3>
            <p 
              className={`${inter.className}`}
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                margin: '8px 0 0 0',
                lineHeight: '1.2',
              }}
            >
              Full Support
            </p>
          </div>
        </div>

        {/* Right Side - Gear Image */}
        <div 
          style={{
            position: 'absolute',
            right: '50px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
          }}
        >
          <img 
            src="/Featuregare.png" 
            alt="Feature Gear"
            className="gear-float"
            style={{
              width: '400px',
              height: '400px',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      {/* Floating Animation for Gear */}
      <style jsx>{`
        @keyframes floatGear {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-15px) rotate(3deg) scale(1.02);
          }
          50% {
            transform: translateY(-25px) rotate(-2deg) scale(1.03);
          }
          75% {
            transform: translateY(-10px) rotate(1deg) scale(1.01);
          }
        }
        .gear-float {
          animation: floatGear 7s ease-in-out infinite;
        }
        
        @media (max-width: 1024px) {
          section > div {
            width: 90% !important;
            height: auto !important;
            padding: 40px 30px !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          
          section > div > div:first-child {
            flex-direction: column !important;
            gap: 30px !important;
            width: 100% !important;
          }
          
          section > div > div:last-child {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            display: flex !important;
            justify-content: center !important;
          }
          
          .gear-float {
            width: 250px !important;
            height: 250px !important;
          }
        }
        
        @media (max-width: 768px) {
          section > div {
            width: 60% !important;
            padding: 30px 20px !important;
            margin-top: 60px !important;
          }
          
          section > div > div:first-child h3 {
            font-size: 36px !important;
          }
          
          section > div > div:first-child p {
            font-size: 14px !important;
          }
          
          .gear-float {
            width: 200px !important;
            height: 200px !important;
          }
        }
        
        @media (max-width: 480px) {
          section > div {
            padding: 25px 15px !important;
          }
          
          section > div > div:first-child {
            gap: 20px !important;
          }
          
          section > div > div:first-child h3 {
            font-size: 32px !important;
          }
          
          section > div > div:first-child p {
            font-size: 12px !important;
          }
          
          .gear-float {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  );
}