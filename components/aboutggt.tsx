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
          overflow: visible;
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

        /* Top Right Glow - moved to inner wrapper */
        .glow-wrapper::after {
          content: '';
          position: absolute;
          top: -75.01px;
          left: 745.87px;
          width: 342.68px;
          height: 342.68px;
          background: linear-gradient(270deg, #0D3DEE 0%, #A3B7FF 100%);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 1;
          z-index: 1;
        }

        .top-right-circle {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-container:hover .top-right-circle {
          opacity: 0;
        }

        /* Hover Effects for Glows */
        .about-container:hover::before {
          width: 0;
          height: 0;
        }

        /* Content - Left Side */
        .right-content {
          position: absolute;
          top: 50%;
          left: 100px;
          transform: translateY(-50%);
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-right: 2rem;
          z-index: 5;
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

        /* Bottom Right Small Card - span::after */
        .card-span::after {
          content: '';
          position: absolute;
          bottom: 33%;
          right: 0;
          width: 100px;
          height: 100px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: 0.5s;
          animation: animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          animation-delay: -1s;
          z-index: 30;
        }

        .about-container:hover .card-span::after {
          bottom: -10%;
          right: 250px;
          width: 100px;
          height: 100px;
          opacity: 1;
        }

        .vector-in-animated-card {
          position: absolute;
          bottom: 33%;
          right: 0;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.5s ease-in-out;
          pointer-events: none;
          z-index: 31;
        }

        .about-container:hover .vector-in-animated-card {
          bottom: -10%;
          right: 250px;
          width: 100px;
          height: 100px;
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

        @media (max-width: 1441px) {
          .about-container {
            width: 792px !important;
            height: 366px !important;
            margin-bottom: 76px !important;
          }

          .about-heading {
            left: 38px !important;
            top: 34px !important;
          }

          .about-heading h2 {
            font-size: 38px !important;
            margin-left: 38px !important;
            margin-bottom: 12px !important;
          }

          .about-container::after {
            top: -57px !important;
            left: 567px !important;
            width: 260px !important;
            height: 260px !important;
            filter: blur(60px) !important;
          }

          .top-right-circle {
            top: -57px !important;
            left: 567px !important;
            width: 260px !important;
            height: 260px !important;
          }

          .top-right-circle img {
            width: 91px !important;
            height: 91px !important;
          }

          .right-content {
            left: 76px !important;
          }

          .about-text {
            font-size: 12px !important;
            line-height: 1.5 !important;
            margin-bottom: 18px !important;
          }

          .external-card {
            bottom: 38px !important;
            right: 152px !important;
            width: 114px !important;
            height: 114px !important;
          }

          .vector-in-card {
            bottom: 38px !important;
            right: 152px !important;
            width: 114px !important;
            height: 114px !important;
          }

          .vector-in-card img {
            width: 53px !important;
            height: 53px !important;
          }
        }
      `}</style>
      <section className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-center">
            <div className="about-wrapper">
              <div className="about-container">
                <div className="glow-wrapper" style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '16px', pointerEvents: 'none' }}>
                  {/* Top Right Circle */}
                  <div className="top-right-circle" style={{
                    position: 'absolute',
                    top: '-75.01px',
                    left: '745.87px',
                    width: '342.68px',
                    height: '342.68px',
                    background: 'linear-gradient(270deg, #0D3DEE 0%, #A3B7FF 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                  }}>
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
                <span className="card-span">
                  <div className="vector-in-animated-card">
                    <Image
                      src="/Vector 3.svg"
                      alt="Vector decoration"
                      width={50}
                      height={50}
                      className="object-contain filter brightness-0 invert"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                </span>

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


            </div>
          </div>
        </div>
      </section>
    </>
  );
}