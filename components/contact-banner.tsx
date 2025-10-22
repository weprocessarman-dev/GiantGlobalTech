'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function ContactBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-32 bg-[#000012] overflow-hidden">
      {/* Heading */}
      <h1
        className={`${inter.className} font-bold text-center mb-6`}
        style={{
          marginTop: isMobile ? '100px' : '330px',
          fontSize: isMobile ? '48px' : '72px',
          fontWeight: 800,
          background: 'linear-gradient(90deg, #A3A3A3 0%, #FFFFFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Get In Touch
      </h1>
      
      {/* Description */}
      <p
        className={`${inter.className} text-center mb-12 px-4`}
        style={{
          fontSize: isMobile ? '20px' : '28px',
          color: '#FFFFFF',
          fontWeight: 400,
          lineHeight: '1.3',
          maxWidth: '700px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur{!isMobile && <br />}adipiscing elit, sed do eiusmod dolor
      </p>

      {/* Contact Info */}
      <div className="w-full flex items-center justify-center mb-12" style={{ marginTop: 20 }}>
        <div className={`flex items-center justify-center ${isMobile ? 'flex-col gap-8' : 'gap-16'}`}>
          {/* Phone */}
          <div className="flex items-center" style={{ gap: '5px' }}>
            <span
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{
                width: '35px',
                height: '35px',
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '8px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/phone.png" alt="Phone" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </span>
            <span 
              className={`${inter.className} ${isMobile ? 'text-base' : 'text-lg'}`} 
              style={{ color: '#fff', fontWeight: 400 }}
            >
              +1234567890
            </span>
          </div>

          {/* Spacer - Only show on desktop */}
          {!isMobile && <span aria-hidden style={{ display: 'inline-block', width: '150px' }} />}

          {/* Email */}
          <div className="flex items-center" style={{ gap: '5px' }}>
            <span
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{
                width: '35px',
                height: '35px',
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '8px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/email.png" alt="Email" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </span>
            <span 
              className={`${inter.className} ${isMobile ? 'text-base' : 'text-lg'}`} 
              style={{ color: '#fff', fontWeight: 400 }}
            >
              info@ggt.com
            </span>
          </div>

          {/* Spacer - Only show on desktop */}
          {!isMobile && <span aria-hidden style={{ display: 'inline-block', width: '150px' }} />}

          {/* Location */}
          <div className="flex items-center" style={{ gap: '5px' }}>
            <span
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{
                width: '35px',
                height: '35px',
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '8px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/location.png" alt="Location" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </span>
            <span 
              className={`${inter.className} ${isMobile ? 'text-base' : 'text-lg'}`} 
              style={{ color: '#fff', fontWeight: 400 }}
            >
              Building #01, LA, USA
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr 
        className={`mx-auto ${isMobile ? 'w-[90%]' : 'w-[60%]'}`} 
        style={{ 
          borderTop: '1px solid #23234A', 
          marginTop: '20px'
        }} 
      />
    </section>
  );
}