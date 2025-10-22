'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function NewsletterActionSection() {
  return (
    <section className="w-full newsletter-action-section" style={{ marginTop: '80px', marginBottom: '80px' }}>
      <div className="container mx-auto px-4">
        {/* Action Newsletter Container */}
        <div 
          className="w-full relative"
          style={{
            position: 'relative',
            width: '100%',
            height: '274.37px',
            maxWidth: '100%',
            margin: '0 auto',
            background: '#1A2B4F', // Different background color
            overflow: 'hidden',
          }}
        >
          {/* GGT Logo - Left Positioned (copied from newslettersection.tsx) */}
          <div 
            className="absolute flex items-baseline"
            style={{
              position: 'absolute',
              left: '80px',
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
                  backgroundColor: '#1A2B4F',
                  zIndex: 0,
                }}
              />
            </div>
          </div>

          {/* Newsletter Section - Centered, different class */}
          <div 
            className="absolute flex flex-col"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(10%, -50%)',
              width: '616.78px',
              maxWidth: '90%',
            }}
          >
            {/* Subscribe Heading */}
            <h2 
              className={`${inter.className}`}
              style={{
                position: 'relative',
                width: '411.88px',
                height: '22.22px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '29px',
                color: '#FFFFFF',
                marginBottom: '21.38px',
              }}
            >
              Join Our Action Newsletter
            </h2>

            {/* Input and Button Container */}
            <div 
              className="relative"
              style={{
                position: 'relative',
                width: '616.78px',
                height: '51.03px',
                maxWidth: '100%',
              }}
            >
              {/* Input Field */}
              <input 
                type="email"
                placeholder="Enter your email"
                className={`${inter.className}`}
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
                  color: '#1A2B4F',
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
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          .newsletter-action-section > div > div {
            height: auto !important;
            padding: 40px 20px !important;
          }
          
          .newsletter-action-section > div > div > div:first-child {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            margin-bottom: 30px !important;
            text-align: center !important;
            display: flex !important;
            justify-content: center !important;
          }
          
          .newsletter-action-section > div > div > div:last-child {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .newsletter-action-section > div > div > div:first-child span {
            font-size: 48px !important;
          }
          
          .newsletter-action-section h2 {
            width: 100% !important;
            height: auto !important;
            font-size: 20px !important;
            text-align: center !important;
            margin-bottom: 20px !important;
          }
          
          .newsletter-action-section input {
            padding-right: 100px !important;
            font-size: 14px !important;
          }
          
          .newsletter-action-section button {
            padding: 10px 20px !important;
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .newsletter-action-section > div > div {
            padding: 30px 15px !important;
          }
          
          .newsletter-action-section > div > div > div:first-child span {
            font-size: 36px !important;
          }
          
          .newsletter-action-section h2 {
            font-size: 18px !important;
          }
          
          .newsletter-action-section input {
            font-size: 12px !important;
            padding-left: 15px !important;
          }
          
          .newsletter-action-section button {
            padding: 8px 16px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
