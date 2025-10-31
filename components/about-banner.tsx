'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AboutBanner() {
  return (
    <div className="relative w-full banner-container">
      {/* Background GIF Container */}
      <div className="absolute inset-0 gif-container">
        <img 
          src="/blackhole.gif" 
          alt="Black Hole Animation"
          className="gif-image"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full content-container">
        {/* Rectangle Container */}
        <div className="relative rectangle-container">
          {/* Heading */}
          <h1 className={`${inter.className} font-bold mb-8 rectangle-heading`}>
            About GGT
          </h1>

          {/* First Paragraph */}
          <p className={`${inter.className} mb-6 rectangle-paragraph`}>
            We are a forward-thinking technology company dedicated to creating innovative solutions that transform how businesses operate. Our team of passionate engineers, designers, and strategists work tirelessly to push the boundaries of what's possible. With years of experience in cutting-edge development, we understand the challenges modern companies face. Our mission is to bridge the gap between complex technology and practical business applications. We believe that innovation should be accessible, intuitive, and transformative for every organization we serve.
          </p>

          {/* Second Paragraph */}
          <p className={`${inter.className} rectangle-paragraph`}>
            Founded on the principles of excellence and customer-centricity, GGT has evolved into a trusted partner for businesses worldwide. Our comprehensive approach combines technical expertise with deep industry knowledge to deliver solutions that drive real results. We pride ourselves on our ability to understand unique business needs and translate them into powerful technological solutions. Every project we undertake is an opportunity to create lasting value and meaningful impact.
          </p>
        </div>
      </div>

      <style jsx>{`
        .banner-container {
          position: relative !important;
          z-index: 1 !important;
          height: 1100px !important;
          background: #000013 !important;
          overflow: visible !important;
        }
        
        .gif-container {
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        .gif-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        
        .overlay {
          background: rgba(5, 11, 36, 0.3) !important;
          backdrop-filter: blur(1px) !important;
        }
        
        .content-container {
          padding: 0 20px !important;
        }
        
        .rectangle-container {
          position: absolute !important;
          top: 73.5% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 1000px !important;
          height: auto !important;
          max-width: 95% !important;
          background: rgba(135, 135, 135, 0.2) !important;
          border-radius: 20px !important;
          border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
          border-left: 1px solid rgba(255, 255, 255, 0.3) !important;
          border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
          backdrop-filter: blur(10px) !important;
          padding: 40px 60px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          text-align: center !important;
        }
        
        .rectangle-heading {
          font-size: 44px !important;
          font-weight: 800 !important;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0.2) 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          margin-bottom: 32px !important;
        }
        
        .rectangle-paragraph {
          font-size: 16px !important;
          font-weight: 400 !important;
          line-height: 1.6 !important;
          color: rgba(255, 255, 255, 0.9) !important;
          padding-left: 40px !important;
          padding-right: 40px !important;
          margin-bottom: 24px !important;
        }
        
        @media (min-width: 1200px) {
          .gif-image {
            object-fit: contain !important;
            width: 100% !important;
            height: 100% !important;
            mix-blend-mode: lighten !important;
          }
        }
        
        @media (min-width: 810px) and (max-width: 1199px) {
          .banner-container {
            height: 950px !important;
          }

          .gif-image {
            margin-top: -400px !important;
            width: 100% !important;
            height: 676px !important;
            object-fit: contain !important;
            mix-blend-mode: lighten !important;
          }

          .rectangle-container {
            top: 57% !important;
            width: 610px !important;
            height: 533px !important;
            padding: 30px 40px !important;
          }
          
          .rectangle-heading {
            font-size: 36px !important;
          }
          
          .rectangle-paragraph {
            font-size: 14px !important;
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
        }
        
        @media (min-width: 390px) and (max-width: 809px) {
          .banner-container {
            height: 650px !important;
          }

          .gif-image {
            margin-top: -300px !important;
            width: 390px !important;
            height: auto !important;
            object-fit: contain !important;
            mix-blend-mode: lighten !important;
          }
          
          .rectangle-container {
            width: 350px !important;
            height: auto !important;
            padding: 10px 25px !important;
            top: 59.5% !important;
          }
          
          .rectangle-heading {
            font-size: 24px !important;
            margin-bottom: 20px !important;
          }
          
          .rectangle-paragraph {
            font-size: 10px !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            margin-bottom: 16px !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </div>
  );
}