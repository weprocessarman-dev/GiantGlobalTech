'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MissionVisionSection() {
  return (
    <section className="w-full mission-vision-section">
      <div className="mx-auto px-4 section-container">
        {/* Grid Container - 2x2 */}
        <div className="grid grid-cols-2 gap-8 mx-auto items-center grid-container">
          {/* First Row - Left: Mission Content */}
          <div className="flex flex-col justify-center mission-content">
            <h2 className={`${inter.className} font-bold mb-8 mission-heading`}>
              Our Mission
            </h2>
            <p className={`${inter.className} mission-text`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* First Row - Right: Mission Image */}
          <div className="flex items-center justify-center">
            <div className="mission-float">
              <img 
                src="/M.png" 
                alt="Mission Rocket"
                className="mission-image"
              />
            </div>
          </div>

          {/* Second Row - Left: Vision Image */}
          <div className="flex items-center justify-center">
            <div className="vision-float">
              <img 
                src="/V.png" 
                alt="Vision Bulb"
                className="vision-image"
              />
            </div>
          </div>

          {/* Second Row - Right: Vision Content */}
          <div className="flex flex-col justify-center vision-content">
            <h2 className={`${inter.className} font-bold mb-8 vision-heading`}>
              Our Vision
            </h2>
            <p className={`${inter.className} vision-text`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animations & Responsive Styles */}
      <style jsx>{`
        .mission-vision-section {
          width: 100% !important;
          height: 1200px !important;
          padding: 40px 50px !important;
          overflow: hidden !important;
          background: #000013 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }

        .section-container {
          max-width: 1200px !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }

        .grid-container {
          height: 100% !important;
          max-width: 1200px !important;
          margin: 0 auto !important;
        }

        .mission-content {
          padding-left: 100px !important;
          position: relative !important;
        }

        .vision-content {
          padding-right: 100px !important;
          position: relative !important;
        }

        .mission-heading,
        .vision-heading {
          font-size: 44px !important;
          font-weight: 700 !important;
          color: rgba(255, 255, 255, 0.6) !important;
          line-height: 1.1 !important;
          margin-bottom: 32px !important;
          white-space: nowrap !important;
        }

        .vision-heading {
          text-align: right !important;
        }

        .mission-text,
        .vision-text {
          font-size: 16px !important;
          font-weight: 400 !important;
          line-height: 1.8 !important;
          color: rgba(255, 255, 255, 0.8) !important;
          max-width: 450px !important;
        }

        .vision-text {
          margin-left: auto !important;
          text-align: right !important;
        }

        .mission-float,
        .vision-float {
          position: relative !important;
          width: 373px !important;
          height: 373px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .mission-image,
        .vision-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
        }

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

        @media (max-width: 809px) {
        .mission-vision-section {
            height: 800px !important;
          }
          .section-container {
            max-width: 390px !important;
          }

          .grid-container {
            grid-template-columns: 1fr !important;
            height: auto !important;
            gap: 20px !important;
          }

          .grid-container > div:nth-child(1) { order: 2; }
          .grid-container > div:nth-child(2) { order: 1; }
          .grid-container > div:nth-child(3) { order: 3; }
          .grid-container > div:nth-child(4) { order: 4; }

          .mission-content {
            padding-left: 0 !important;
          }

          .vision-content {
            padding-right: 0 !important;
          }

          .mission-heading {
            font-size: 24px !important;
            text-align: left !important;
            white-space: normal !important;
          }

          .vision-heading {
            font-size: 24px !important;
            white-space: normal !important;
          }

          .mission-text {
            font-size: 10px !important;
            text-align: left !important;
            max-width: 100% !important;
          }

          .vision-text {
            font-size: 10px !important;
            max-width: 100% !important;
          }

          .mission-float,
          .vision-float {
            width: 200px !important;
            height: 200px !important;
          }

          .mission-float {
            margin-left: auto !important;
          }

          .vision-float {
            margin-right: auto !important;
          }
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .mission-vision-section {
            height: 650px !important;
          }

          .grid-container {
            height: 100px !important;
            gap: 20px !important;
          }

          .mission-heading,
          .vision-heading {
            font-size: 36px !important;
          }

          .mission-text,
          .vision-text {
            font-size: 14px !important;
          }

          .mission-float,
          .vision-float {
            width: 304px !important;
            height: 304px !important;
          }
        }

      `}</style>
    </section>
  );
}