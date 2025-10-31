'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function AboutBanner() {
  return (
    <div 
      className="relative w-full banner-container"
      style={{
        height: '150vh',
        minHeight: '600px',
        maxHeight: '1200px',
        background: '#050b24',
        overflow: 'hidden',
      }}
    >
      {/* Background GIF Container */}
      <div 
        className="absolute inset-0"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src="/blackhole.gif" 
          alt="Black Hole Animation"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'rgba(5, 11, 36, 0.3)',
            backdropFilter: 'blur(1px)',
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="relative z-10 flex items-center justify-center h-full"
        style={{
          padding: '0 20px',
        }}
      >
        {/* Rectangle Container */}
        <div 
          className="relative rectangle-container"
          style={{
            position: 'absolute',
            top: '74%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1040px',
            maxWidth: '95%',
            background: 'rgba(135, 135, 135, 0.2)',
            borderRadius: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
            borderRight: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Heading */}
          <h1 
            className={`${inter.className} font-bold mb-8 rectangle-heading`}
            style={{
              fontSize: '50px',
              fontWeight: 800,
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0.2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '32px',
            }}
          >
            About GGT
          </h1>

          {/* First Paragraph */}
          <p 
            className={`${inter.className} mb-6 rectangle-paragraph`}
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.9)',
              paddingLeft: '40px',
              paddingRight: '40px',
              marginBottom: '24px',
            }}
          >
            We are a forward-thinking technology company dedicated to creating innovative solutions that transform how businesses operate. Our team of passionate engineers, designers, and strategists work tirelessly to push the boundaries of what's possible. With years of experience in cutting-edge development, we understand the challenges modern companies face. Our mission is to bridge the gap between complex technology and practical business applications. We believe that innovation should be accessible, intuitive, and transformative for every organization we serve.
          </p>

          {/* Second Paragraph */}
          <p 
            className={`${inter.className} rectangle-paragraph`}
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.9)',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            Founded on the principles of excellence and customer-centricity, GGT has evolved into a trusted partner for businesses worldwide. Our comprehensive approach combines technical expertise with deep industry knowledge to deliver solutions that drive real results. We pride ourselves on our ability to understand unique business needs and translate them into powerful technological solutions. Every project we undertake is an opportunity to create lasting value and meaningful impact.
          </p>
        </div>
      </div>

      <style jsx>{`
        .banner-container {
          height: 150vh;
          min-height: 600px;
          max-height: 1200px;
          background: #050b24;
          overflow: hidden;
        }
        
        .rectangle-container {
          position: absolute;
          top: 74%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1040px;
          max-width: 95%;
          background: rgba(135, 135, 135, 0.2);
          border-radius: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          padding: 40px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        
        .rectangle-heading {
          font-size: 50px;
          font-weight: 800;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 32px;
        }
        
        .rectangle-paragraph {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          padding-left: 40px;
          padding-right: 40px;
          margin-bottom: 24px;
        }
        
        @media (min-width: 810px) and (max-width: 1199px) {
          .rectangle-container {
            width: 610px;
            padding: 30px 40px;
          }
          
          .rectangle-heading {
            font-size: 40px;
          }
          
          .rectangle-paragraph {
            font-size: 16px;
            padding-left: 30px;
            padding-right: 30px;
          }
        }
        
        @media (min-width: 390px) and (max-width: 809px) {
          .banner-container {
            height: 100vh;
            min-height: 500px;
          }
          
          .rectangle-container {
            width: 350px;
            padding: 20px 25px;
            top: 70%;
          }
          
          .rectangle-heading {
            font-size: 28px;
            margin-bottom: 20px;
          }
          
          .rectangle-paragraph {
            font-size: 14px;
            padding-left: 15px;
            padding-right: 15px;
            margin-bottom: 16px;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
}