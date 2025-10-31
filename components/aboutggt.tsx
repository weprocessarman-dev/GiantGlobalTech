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
          width: 1000px;
          height: 462px;
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
        
        .glow-wrapper {
          overflow: hidden;
        }


        /* Top Right Glow - moved to inner wrapper */
        .glow-wrapper::after {
          content: '';
          position: absolute;
          top: -95px;
          left: 690.87px;
          width: 450.68px;
          height: 450.68px;
          background: linear-gradient(270deg, #0D3DEE 0%, #A3B7FF 100%);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 1;
          z-index: 1;
        }

        .top-right-circle {
          top: -75.01px;
          left: 745.87px;
          width: 342.68px;
          height: 342.68px;
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

        /* Remove small card animations */
        .card-span::after {
          display: none;
        }

        .vector-in-animated-card {
          display: none;
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
        
        @media (min-width: 810px) and (max-width: 1199px) {
          .about-container {
            width: 610px !important;
            height: 635px !important;
            overflow: hidden !important;
          }
          
          .glow-wrapper {
            overflow: visible !important;
          }
          
          .glow-wrapper::after {
            top: -25%;
            left: 50%;
            width: 450px;
            height: 450px;
          }
          
          .top-right-circle {
            top: -20px !important;
            left: 72% !important;
            width: 200px !important;
            height: 200px !important;
            overflow: hidden !important;
          }
          
          .top-right-circle img {
            width: 60px !important;
            height: 60px !important;
          }
          
          .about-heading {
            left: 0;
            top: 0;
          }
          
          .about-heading h2 {
            margin-left: 43px !important;
            margin-top: 246px !important;
          }
          
          .right-content {
            left: 43px;
            top: 330px;
            transform: none;
            width: calc(100% - 86px);
            padding-right: 0;
          }
          
          .right-content .text-content p {
            margin-top: 0 !important;
          }
        }
        
        @media (min-width: 390px) and (max-width: 809px) {
          .about-container {
            width: 350px !important;
            height: 635px !important;
            overflow: hidden !important;
          }
          
          .glow-wrapper {
            overflow: visible !important;
          }
          
          .glow-wrapper::after {
            top: -30%;
            left: 30%;
            width: 450px;
            height: 450px;
          }
          
          .top-right-circle {
            top: -20px !important;
            left: 52% !important;
            width: 200px !important;
            height: 200px !important;
          }
          
          .top-right-circle img {
            width: 60px !important;
            height: 60px !important;
          }
          
          .about-heading {
            left: 35px !important;
            top: 235px !important;
          }
          
          .about-heading h2 {
            font-size: 30px !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
          }
          
          .right-content {
            left: 20px !important;
            top: 268px !important;
            transform: none !important;
            width: calc(100% - 40px) !important;
            padding: 0 !important;
          }
          
          .right-content .text-content p {
            font-size: 12px !important;
            margin: 0 !important;
          }
          
          .right-content .text-content p:first-child {
            margin-bottom: 30px !important;
          }
        }


      `}</style>
      <section className="w-full py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="about-wrapper">
              <div className="about-container">
                <div className="glow-wrapper" style={{ position: 'absolute', inset: 0, borderRadius: '16px', pointerEvents: 'none' }}>
                  {/* Top Right Circle */}
                  <div className="top-right-circle" style={{
                    position: 'absolute',
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
                      fontSize: '44px',
                      fontWeight: 600,
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.2) 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      marginLeft: '50px',
                      marginBottom: '20px',
                      textAlign: 'center'
                    }}
                  >
                    About GGT
                  </h2>
                </div>



                {/* Right Content - Text (Slides to Left Half) */}
                <div className="right-content">
                  <div className="text-content w-full">
                    <p 
                      className="about-text"
                      style={{
                        fontWeight: 400,
                        marginTop: '30px',
                        marginBottom: '20px',
                        lineHeight: '1.6',
                        color: '#ffffff',
                        opacity: 0.9,
                        textAlign: 'left',
                        fontSize: '16px'
                      }}
                    >
                      This world moves at lightning speed. Blink, and you lose a customer. We got tired of seeing good businesses bleed leads just because they were closed or busy. GGT was built for one reason: to give you the weapons to win.
                    </p>
                    
                    <p 
                      className="about-text"
                      style={{
                        fontWeight: 400,
                        lineHeight: '1.6',
                        color: '#ffffff',
                        opacity: 0.9,
                        textAlign: 'left',
                        fontSize: '16px'
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