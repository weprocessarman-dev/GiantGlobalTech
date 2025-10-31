'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function BackgroundSection() {
  return (
    <>
      <style jsx>{`
        @media (min-width: 810px) and (max-width: 1199px) {
          .newsletter-bg {
            height: 190px !important;
          }
          
          .newsletter-logo {
            display: none !important;
          }
          
          .newsletter-content {
            position: static !important;
            transform: none !important;
            width: 610px !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: center !important;
            height: 100% !important;
          }
          
          .newsletter-heading {
            width: 412px !important;
            text-align: left !important;
          }
          
          .newsletter-input-container {
            width: 610px !important;
            height: 51px !important;
          }
          
          .newsletter-input {
            height: 51px !important;
          }
        }
        
        @media (min-width: 390px) and (max-width: 809px) {
          .newsletter-bg {
            height: auto !important;
            padding: 30px 0 !important;
          }
          
          .newsletter-content {
            align-items: center !important;
            width: 100% !important;
            padding: 0 20px !important;
            gap: 15px !important;
          }
          
          .newsletter-heading {
            font-size: 16px !important;
            text-align: center !important;
            width: 100% !important;
            margin-bottom: 0 !important;
            font-family: 'Inter', sans-serif !important;
          }
          
          .newsletter-input-container {
            width: 350px !important;
            height: 42px !important;
            position: static !important;
            margin-bottom: 0 !important;
          }
          
          .newsletter-input {
            width: 350px !important;
            height: 42px !important;
            padding-right: 20px !important;
            position: static !important;
          }
          
          .newsletter-input-container button {
            display: none !important;
          }
          
          .newsletter-content::after {
            content: 'Subscribe';
            width: 100px !important;
            height: 41px !important;
            font-size: 12px !important;
            background: #FFFFFF;
            color: #142249;
            border: none;
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            cursor: pointer;
          }
        }
      `}</style>
    <section className="w-full py-16 md:py-20">
      {/* Background Container - Full Width */}
      <div 
        className="w-full relative newsletter-bg"
        style={{
          position: 'relative',
          width: '100%',
          height: '274.37px',
          background: '#142249',
          overflow: 'hidden',
          marginTop: '60px',
          marginBottom: '60px'
        }}
      >
        {/* Content Container - 1200px max-width */}
        <div className="max-w-[1200px] mx-auto relative h-full" style={{ padding: '0 100px' }}>
          {/* GGT Logo - Left Positioned */}
          <div 
            className="absolute flex items-baseline newsletter-logo"
            style={{
              position: 'absolute',
              left: '100px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          >
            <span 
              className={`${inter.className} font-bold`}
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#FFFFFF',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              gg
            </span>
            
            {/* Modified 't' with SVG and dot overlay */}
            <div 
              className="relative"
              style={{
                position: 'relative',
                display: 'inline-block',
                marginLeft: '4px',
              }}
            >
              {/* SVG 't' */}
              <svg 
                width="34" 
                height="73" 
                viewBox="0 0 34 73" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: 'relative',
                  top: '18px',
                }}
              >
                <path d="M33.3732 61.3758V72.0194H26.6472C21.854 72.0194 18.1174 70.9183 15.4373 68.7162C12.7572 66.4651 11.4172 62.8194 11.4172 57.779V21.128H0.453125V10.7046H11.4172V0.72168H24.6371V10.7046V21.128V57.9258C24.6371 59.1492 24.9464 60.0301 25.5649 60.5684C26.1833 61.1066 27.2141 61.3758 28.6573 61.3758H33.3732Z" fill="white"/>
              </svg>
              
              {/* White dot overlay on the right side of the t's crossbar */}
              <div
                style={{
                  position: 'absolute',
                  right: '-8px',
                  top: '28px',
                  width: '14px',
                  height: '14px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                  zIndex: 1,
                }}
              />
              
              {/* Mask to hide part of the t's right crossbar */}
              <div
                style={{
                  position: 'absolute',
                  right: '-2px',
                  top: '22px',
                  width: '12px',
                  height: '6px',
                  backgroundColor: '#142249',
                  zIndex: 0,
                }}
              />
            </div>
          </div>

          {/* Newsletter Section - Right Positioned */}
          <div 
            className="absolute flex flex-col newsletter-content"
            style={{
              position: 'absolute',
              right: '100px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '500px',
              maxWidth: '50%',
            }}
          >
            {/* Subscribe Heading */}
            <h2 
              className={`${inter.className} newsletter-heading`}
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Subscribe To The News Letter
            </h2>

            {/* Input and Button Container */}
            <div 
              className="relative newsletter-input-container"
              style={{
                position: 'relative',
                width: '100%',
                height: '51.03px',
              }}
            >
              {/* Input Field */}
              <input 
                type="email"
                placeholder="Enter you email"
                className={`${inter.className} newsletter-input`}
                style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: '100%',
                  height: '51.03px',
                  left: '0px',
                  top: '0px',
                  border: '1px solid #FFFFFF',
                  borderRadius: '48px',
                  background: 'transparent',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  paddingLeft: '20px',
                  paddingRight: '120px',
                  outline: 'none',
                }}
              />

              {/* Subscribe Button */}
              <button
                className={`${inter.className} transition-all duration-300 ease-in-out hover:transform hover:scale-105`}
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#FFFFFF',
                  color: '#142249',
                  border: 'none',
                  borderRadius: '40px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  height: '41px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}