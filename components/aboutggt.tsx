'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function AboutGGT() {
  return (
    <>
      <style jsx>{`
        .about-container {
          position: relative;
          width: 1041.59px;
          height: 481.49px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          margin-bottom: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }

        .about-wrapper {
          position: relative;
          overflow: visible;
        }

        /* Bottom Left Glow - Remove Extra Glow */
        .about-container::before {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 0;
          height: 0;
          background: transparent;
          z-index: 1;
        }

        /* Top Right Glow - Same Blue Color */
        .about-container::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: linear-gradient(315deg, #6366f1, #3b82f6);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0;
          transform: translate(50%, -50%);
          transition: all 0.5s ease-in-out;
          z-index: 1;
        }

        /* Hover Effects for Glows */
        .about-container:hover::before {
          width: 0;
          height: 0;
        }

        .about-container:hover::after {
          width: 350px;
          height: 350px;
          opacity: 0.8;
          filter: blur(25px);
        }

        /* Content Animation - Right Content Slides to Left Half */
        .right-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 2rem;
          padding-right: 2rem;
          transition: all 0.5s ease-in-out;
          z-index: 5;
        }

        .about-container:hover .right-content {
          transform: translateX(-86%);
          width: 50%;
        }

        /* Left Content - Position in Bottom Left */
        .left-content {
          position: absolute;
          bottom: 80px;
          left: 100px;
          width: 350px;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, 50%);
          z-index: 5;
        }

        /* Blue Circle with Expanding Glow */
        .blue-circle {
          transition: none;
          filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.8)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.6));
          box-shadow: 
            0 0 40px rgba(99, 102, 241, 0.7), 
            0 0 80px rgba(99, 102, 241, 0.5), 
            0 0 120px rgba(99, 102, 241, 0.3),
            0 0 160px rgba(59, 130, 246, 0.2);
        }

        .about-container:hover .blue-circle {
          filter: blur(8px) drop-shadow(0 0 60px rgba(99, 102, 241, 1)) drop-shadow(0 0 80px rgba(59, 130, 246, 0.9));
          box-shadow: 
            0 0 80px rgba(99, 102, 241, 1), 
            0 0 150px rgba(99, 102, 241, 0.8), 
            0 0 220px rgba(99, 102, 241, 0.6),
            0 0 290px rgba(59, 130, 246, 0.4);
          background: radial-gradient(circle, rgba(99, 102, 241, 1) 0%, rgba(59, 130, 246, 0.95) 20%, rgba(29, 78, 216, 0.85) 40%, rgba(99, 102, 241, 0.6) 70%, rgba(59, 130, 246, 0.3) 85%, rgba(99, 102, 241, 0.1) 95%, transparent 100%) !important;
          transform: scale(1.015);
        }

        /* Span Element for Card Animation */
        .card-span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }

        /* Remove Top Left Small Card - span::before */
        .card-span::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          opacity: 0;
          transition: none;
        }

        .about-container:hover .card-span::before {
          width: 0;
          height: 0;
          opacity: 0;
        }

        /* Bottom Right Small Card - span::after - Disabled */
        .card-span::after {
          content: '';
          opacity: 0;
          pointer-events: none;
        }

        .about-container:hover .card-span::after {
          opacity: 0;
        }

        /* External Bottom Right Card - Updated */
        .external-card {
          position: absolute !important;
          bottom: 50px !important;
          right: 200px !important;
          width: 150px;
          height: 150px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          z-index: 30;
          pointer-events: none;
          transform: translateY(0);
        }

        .about-wrapper:hover .external-card {
          opacity: 1 !important;
          transform: translateY(0);
        }

        /* Vector Travel Animation - Vector Disappears from Circle */
        .main-vector {
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-container:hover .main-vector {
          opacity: 0;
        }

        /* Vector in Bottom Right Card - Updated */
        .vector-in-card {
          position: absolute !important;
          bottom: 50px !important;
          right: 200px !important;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.2s ease-in-out;
          transition-delay: 0.3s;
          z-index: 35;
          transform: translateY(0);
        }

        .about-wrapper:hover .vector-in-card {
          opacity: 1;
        }

        /* Heading Stable Position */
        .about-heading {
          position: absolute;
          left: 50px;
          top: 45.05px;
          z-index: 20;
          font-family: ${inter.style.fontFamily}, Arial, sans-serif;
        }

        /* Floating Animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes animate {
          0%, 100% {
            transform: translateY(10px);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        /* Text Styling */
        .about-text {
          font-family: ${inter.style.fontFamily}, Arial, sans-serif;
        }
      `}</style>
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="about-wrapper">
              <div className="about-container">
                {/* About GGT Heading - Stable Position */}
                <div className="about-heading">
                  <h2 
                    className={`${inter.className} font-bold`}
                    style={{
                      fontSize: '50px',
                      fontWeight: 600,
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.2) 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      marginLeft: '50px',
                      marginBottom: '16px',
                      textAlign: 'center'
                    }}
                  >
                    About GGT
                  </h2>
                </div>

                {/* Span Element for Card Animations */}
                <span className="card-span"></span>

                {/* Left Content - Blue Circle in Bottom Left */}
                <div className="left-content">
                  <div 
                    className="relative flex items-center justify-center blue-circle"
                    style={{
                      width: '350px',
                      height: '350px',
                      background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #1d4ed8 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 0 60px rgba(99, 102, 241, 0.8), 0 0 120px rgba(99, 102, 241, 0.6), 0 0 180px rgba(99, 102, 241, 0.4), 0 0 240px rgba(59, 130, 246, 0.3)',
                      filter: 'drop-shadow(0 0 40px rgba(99, 102, 241, 0.9)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.7))'
                    }}
                  >
                    {/* Main Vector - Travels to Small Card */}
                    <div className="relative main-vector">
                      <Image
                        src="/Vector 3.svg"
                        alt="Vector decoration"
                        width={120}
                        height={120}
                        className="object-contain filter brightness-0 invert"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Content - Text (Slides to Left Half) */}
                <div className="right-content">
                  <div className="text-content w-full">
                    <p 
                      className="text-white text-base leading-relaxed mb-6 about-text"
                      style={{
                        fontWeight: 400,
                        lineHeight: '1.6',
                        color: '#ffffff',
                        opacity: 0.9,
                        textAlign: 'left'
                      }}
                    >
                      This world moves at lightning speed. Blink, and you lose a customer. We got tired of seeing good businesses bleed leads just because they were closed or busy. GGT was built for one reason: to give you the weapons to win.
                    </p>
                    
                    <p 
                      className="text-white text-base leading-relaxed about-text"
                      style={{
                        fontWeight: 400,
                        lineHeight: '1.6',
                        color: '#ffffff',
                        opacity: 0.9,
                        textAlign: 'left'
                      }}
                    >
                      From our 24/7 AI Agents that capture leads while you sleep to marketing that flat-out works, we deliver results, not excuses. In this new world, you’re either fast or you’re finished. We make you fast. Fast enough to crush the competition and own your market.
                    </p>
                  </div>
                </div>
              </div>

              {/* External Bottom Right Card */}
              <div className="external-card"></div>

              {/* Vector in Bottom Right Card */}
              <div className="vector-in-card">
                <Image
                  src="/Vector 3.svg"
                  alt="Vector decoration"
                  width={70}
                  height={70}
                  className="object-contain filter brightness-0 invert"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}