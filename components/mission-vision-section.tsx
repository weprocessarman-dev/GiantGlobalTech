'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MissionVisionSection() {
  return (
    <section 
      className="w-full" 
      style={{
        width: '100%',
        height: '1200px',
        padding: '80px 0',
        margin: '80px 0 0 0',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4" style={{ maxWidth: '1440px', height: '100%', position: 'relative' }}>
        {/* Grid Container - 2x2 */}
        <div 
          className="grid grid-cols-2 gap-16 mx-auto items-center"
          style={{
            height: '100%',
          }}
        >
          {/* First Row - Left: Mission Content */}
          <div 
            className="flex flex-col justify-center"
            style={{
              paddingLeft: '120px',
              paddingRight: '120px',
              position: 'relative',
            }}
          >
            <h2 
              className={`${inter.className} font-bold mb-8`}
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: '1.1',
                marginBottom: '32px',
              }}
            >
              Our Mission
            </h2>
            <p 
              className={`${inter.className}`}
              style={{
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '450px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* First Row - Right: Mission Image */}
          <div 
            className="flex items-center justify-center"
          >
            <div
              className="mission-float"
              style={{
                position: 'relative',
                width: '440px',
                height: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="/M.png" 
                alt="Mission Rocket"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Second Row - Left: Vision Image */}
          <div 
            className="flex items-center justify-center"
          >
            <div
              className="vision-float"
              style={{
                position: 'relative',
                width: '440px',
                height: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="/V.png" 
                alt="Vision Bulb"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Second Row - Right: Vision Content */}
          <div 
            className="flex flex-col justify-center"
            style={{
              paddingLeft: '120px',
              paddingRight: '120px',
              position: 'relative',
            }}
          >
            <h2 
              className={`${inter.className} font-bold mb-8`}
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: '1.1',
                marginBottom: '32px',
                textAlign: 'right',
              }}
            >
              Our Vision
            </h2>
            <p 
              className={`${inter.className}`}
              style={{
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '450px',
                marginLeft: 'auto',
                textAlign: 'right',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        

      </div>

      {/* Floating Animations & Mobile Responsive Styles */}
      <style jsx>{`
        @keyframes floatMission {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% { 
            transform: translateY(-15px) rotate(2deg) scale(1.02);
          }
          50% { 
            transform: translateY(-25px) rotate(0deg) scale(1.03);
          }
          75% { 
            transform: translateY(-10px) rotate(-2deg) scale(1.01);
          }
        }
        
        @keyframes floatVision {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-12px) rotate(-1deg) scale(1.015);
          }
          66% { 
            transform: translateY(-20px) rotate(1deg) scale(1.025);
          }
        }
        
        .mission-float {
          animation: floatMission 6s ease-in-out infinite;
        }
        
        .vision-float {
          animation: floatVision 5s ease-in-out infinite;
          animation-delay: -2s;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          
          .mission-content-glow,
          .vision-content-glow {
            padding-left: 40px !important;
            padding-right: 40px !important;
            text-align: center !important;
          }
          
          .mission-content-glow h2,
          .vision-content-glow h2 {
            text-align: center !important;
          }
          
          .mission-content-glow p,
          .vision-content-glow p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          .mission-float,
          .vision-float {
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 768px) {
          .mission-content-glow,
          .vision-content-glow {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .mission-content-glow h2,
          .vision-content-glow h2 {
            font-size: 40px !important;
            margin-bottom: 20px !important;
          }
          
          .mission-content-glow p,
          .vision-content-glow p {
            font-size: 16px !important;
            max-width: 100% !important;
          }
          
          .mission-float,
          .vision-float {
            width: 300px !important;
            height: 300px !important;
          }
        }
        
        @media (max-width: 480px) {
          .mission-content-glow,
          .vision-content-glow {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          .mission-content-glow h2,
          .vision-content-glow h2 {
            font-size: 32px !important;
            margin-bottom: 16px !important;
          }
          
          .mission-content-glow p,
          .vision-content-glow p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .mission-float,
          .vision-float {
            width: 250px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}