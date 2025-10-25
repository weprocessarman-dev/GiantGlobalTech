'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import SpeakButton from './speak-button';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Banner() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [volume, setVolume] = useState(0);
  const [waves, setWaves] = useState<number[]>([]);



  useEffect(() => {
    if (isVoiceActive && volume > 0.1) {
      const interval = setInterval(() => {
        setWaves([
          0.8 + volume * 0.4,
          0.6 + volume * 0.6,
          0.4 + volume * 0.8
        ]);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setWaves([]);
    }
  }, [isVoiceActive, volume]);

  return (
    <section 
      className="w-full banner-section"
      style={{
        position: 'relative',
        height: '1025.08px',
        background: '#050b24',
        backgroundImage: 'url(/background.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center calc(100% + 2px)',
        backgroundRepeat: 'no-repeat',
        overflow: 'visible'
      }}
    >
      <div 
        className="absolute spline-wrapper"
        style={{
          width: '800px',
          height: '600px',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          pointerEvents: 'none'
        }}
      >
        {/* Left Line - Single horizontal line */}
        <svg 
          width="400" 
          height="10" 
          viewBox="0 0 200 10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            left: '-125px',
            top: '60%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        >
          <path d="M200 5H0" stroke="#A3B7FF" strokeWidth="0.5" opacity="1"/>
          <motion.path 
            d="M200 5H0" 
            stroke="#0D3DEE"
            strokeWidth="1.2"
            filter="url(#glow_left)"
            strokeDasharray="30 170"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: -200 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <filter id="glow_left">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="paint_left" x1="104" y1="5" x2="0" y2="5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A3B7FF"/>
              <stop offset="1" stopColor="#0D3DEE"/>
            </linearGradient>
          </defs>
      </svg>

        {/* Right Lines - From SVG file */}
        <svg 
          width="238" 
          height="422" 
          viewBox="0 0 116 211" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            left: '600px',
            top: '60%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          {/* Bottom branches */}
          <path d="M0.933594 105.547H81.9654M0.933594 105.547C70.7259 124.248 72.0847 160.813 98.0799 160.813M0.933594 105.547C92.5691 158.453 85.5562 210.349 115.404 210.349" stroke="url(#paint0_linear_107_218)" strokeWidth="0.25" opacity="0.3"/>
          <motion.path d="M0.933594 105.547H81.9654M0.933594 105.547C70.7259 124.248 72.0847 160.813 98.0799 160.813M0.933594 105.547C92.5691 158.453 85.5562 210.349 115.404 210.349" stroke="url(#paint0_linear_107_218)" strokeWidth="1.2" filter="url(#glow)" strokeDasharray="80 420" initial={{ strokeDashoffset: 500 }} animate={{ strokeDashoffset: -500 }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}/>
          
          {/* Top branches */}
          <path d="M0.933594 105.052H81.9654M0.933594 105.052C70.7259 86.3509 72.0847 49.7859 98.0799 49.7859M0.933594 105.052C92.5691 52.1459 85.5562 0.25 115.404 0.25" stroke="url(#paint0_linear_107_218)" strokeWidth="0.25" opacity="0.3"/>
          <motion.path d="M0.933594 105.052H81.9654M0.933594 105.052C70.7259 86.3509 72.0847 49.7859 98.0799 49.7859M0.933594 105.052C92.5691 52.1459 85.5562 0.25 115.404 0.25" stroke="url(#paint0_linear_107_218)" strokeWidth="1.2" filter="url(#glow)" strokeDasharray="80 420" initial={{ strokeDashoffset: 500 }} animate={{ strokeDashoffset: -500 }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}/>
          
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="paint0_linear_107_218" x1="0" y1="105" x2="115" y2="105" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A3B7FF"/>
              <stop offset="1" stopColor="#0D3DEE"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Text labels for right lines */}
        <div style={{ position: 'absolute', left: '840px', top: '22.5%', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 500, pointerEvents: 'none' }}>Food</div>
        <div style={{ position: 'absolute', left: '815px', top: '38.5%', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 500, pointerEvents: 'none' }}>Medical</div>
        <div style={{ position: 'absolute', left: '790px', top: '59.5%', transform: 'translateY(-50%)', border: '1px solid #FFFFFF', borderRadius: '100px', padding: '10px 24px', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600, whiteSpace: 'nowrap', pointerEvents: 'none' }}>Real Estate</div>
        <div style={{ position: 'absolute', left: '815px', top: '75.8%', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 500, pointerEvents: 'none' }}>Automotive</div>
        <div style={{ position: 'absolute', left: '840px', top: '92%', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 500, pointerEvents: 'none' }}>Tech</div>
      </div>

      <div 
        className="absolute"
        style={{
          width: '800px',
          height: '600px',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${1 + volume * 0.3})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: '20px',
            pointerEvents: 'auto',
            cursor: 'pointer'
          }}

        >

          <Suspense fallback={
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(13,61,238,0.2) 0%, transparent 70%)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '3px solid rgba(13,61,238,0.3)',
                borderTop: '3px solid rgba(13,61,238,0.9)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/uMchW1Yhk3YPEhQh/scene.splinecode"
              style={{
                width: '120%',
                height: '120%',
                position: 'absolute',
                left: '-10%',
                top: '-1%',
                zIndex: 2,
                pointerEvents: 'auto'
              }}
              onLoad={(spline) => {
                const canvas = spline.canvas;
                if (canvas) {
                  canvas.addEventListener('wheel', (e) => {
                    window.scrollBy(0, e.deltaY);
                  }, { passive: true });
                }
              }}
            />
          </Suspense>
        </div>
      </div>

      {/* Voice Support Badge */}
      <div style={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: 'auto',
        height: '41.91px',
        left: 'calc(50% - 635px)',
        top: '55.5%',
        transform: 'translateY(-50%)',
        border: '1px solid #FFFFFF',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        whiteSpace: 'nowrap',
        zIndex: 10
      }}>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#FFFFFF'
        }}>
          Voice Support
        </span>
      </div>

      {/* Flare Image at Bottom Border */}
      <img
        src="/Flare.png"
        alt="Flare"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%) translateY(50%)',
          width: 'auto',
          height: 'auto',
          zIndex: 5,
          pointerEvents: 'none',
          mixBlendMode: 'lighten'
        }}
      />
      
      {/* Heading */}
      <h1
        className="absolute left-1/2 -translate-x-1/2 text-center font-bold heading-text"
        style={{
          width: '85%',
          maxWidth: '876.11px',
          top: '210px',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '55px',
          lineHeight: '1.05',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.49%, rgba(255, 255, 255, 0) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Choose Voice Agent Support
        <br />
        For Your Business
      </h1>

      <SpeakButton 
        onVoiceStart={(active, vol) => {
          setIsVoiceActive(active);
          setVolume(vol);
        }} 
      />

      {/* CSS Animation for Horizontal Glow Effect */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes horizontalGlow {
          0% {
            box-shadow: 
              0 0 25px rgba(13, 61, 238, 0.8),
              0 0 50px rgba(13, 61, 238, 0.6),
              0 0 75px rgba(13, 61, 238, 0.4),
              0 0 100px rgba(13, 61, 238, 0.3),
              0 -15px 30px rgba(13, 61, 238, 0.25),
              0 15px 30px rgba(13, 61, 238, 0.25),
              0 -30px 45px rgba(13, 61, 238, 0.15),
              0 30px 45px rgba(13, 61, 238, 0.15);
            filter: brightness(1.2);
          }
          100% {
            box-shadow: 
              0 0 40px rgba(13, 61, 238, 1),
              0 0 80px rgba(13, 61, 238, 0.9),
              0 0 120px rgba(13, 61, 238, 0.7),
              0 0 160px rgba(13, 61, 238, 0.5),
              0 -25px 50px rgba(13, 61, 238, 0.4),
              0 25px 50px rgba(13, 61, 238, 0.4),
              0 -50px 75px rgba(13, 61, 238, 0.3),
              0 50px 75px rgba(13, 61, 238, 0.3);
            filter: brightness(1.8);
          }
        }

      `}</style>
    </section>
  );
}