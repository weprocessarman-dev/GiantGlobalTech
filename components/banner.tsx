'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, px } from 'framer-motion';
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
        height: '800px',
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
          width="300" 
          height="10" 
          viewBox="0 0 200 10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            left: '-80px',
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
          height="372" 
          viewBox="0 0 116 211" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            left: '560px',
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
        <div className="label-food" style={{ position: 'absolute', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 500, pointerEvents: 'none' }}>Food</div>
        <div className="label-medical" style={{ position: 'absolute', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 500, pointerEvents: 'none' }}>Medical</div>
        <div className="label-realestate" style={{ position: 'absolute', transform: 'translateY(-50%)', border: '1px solid #FFFFFF', borderRadius: '100px', padding: '10px 24px', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 600, whiteSpace: 'nowrap', pointerEvents: 'none' }}>Real Estate</div>
        <div className="label-automotive" style={{ position: 'absolute', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 500, pointerEvents: 'none' }}>Automotive</div>
        <div className="label-tech" style={{ position: 'absolute', color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 500, pointerEvents: 'none' }}>Tech</div>
        <div className="voice-support-label" style={{
          position: 'absolute',
          border: '1px solid #FFFFFF',
          borderRadius: '100px',
          padding: '10px 24px',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          pointerEvents: 'none'
        }}>
          Voice Support
        </div>
      </div>

      <div 
        className="absolute spline-container"
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
            width: '45%',
            height: '70%',
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
              scene="https://prod.spline.design/fy59dTaNnre5w-Wf/scene.splinecode"
              style={{
                width: '120%',
                height: '120%',
                position: 'absolute',
                left: '50%',
                top: '40%',
                transform: 'translate(-50%, -50%)',
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

      {/* Flare Image at Bottom Border */}
      <img
        src="/Flare.png?v=2"
        alt="Flare"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%) translateY(50%)',
          width: '150%',
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
          top: '150px',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '40px',
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
      <style jsx global>{`
        .label-food { left: 805px; top: 27%; }
        .label-medical { left: 775px; top: 41.5%; }
        .label-realestate { left: 745px; top: 59.5%; }
        .label-automotive { left: 775px; top: 74.2%; }
        .label-tech { left: 805px; top: 89%; }
        .voice-support-label {
          left: -100px;
          top: 59.5%;
          transform: translateY(-50%);
        }
        
        @media (max-width: 1440px) {
          .banner-section .spline-wrapper svg:first-of-type {
            left: -80px !important;
          }
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .banner-section {
            height: 1080px !important;
            overflow: visible !important;
          }
          .cardnav {
            width: 610px !important;
            height: 51px !important;
          }
          .banner-section .heading-text {
            top: 95px !important;
            font-size: 36px !important;
          }
          .banner-section .spline-wrapper {
            transform: translate(-50%, -50%) rotate(90deg) !important;
            width: 600px !important;
            height: 800px !important;
          }
          .banner-section .spline-container {
            transform: translate(-50%, -50%) scale(1.2) !important;
            width: 600px !important;
            height: 900px !important;
            overflow: visible !important;
          }
          .banner-section .spline-container > div {
            overflow: visible !important;
          }
          /* Hide Spline default logo */
          .banner-section .spline-container canvas + div,
          .banner-section .spline-container a[href*="spline"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          /* Left SVG line */
          .banner-section .spline-wrapper svg:first-of-type {
            width: 100px !important;
            top: 50% !important;
            left: 15% !important;
            transform: translate(-50%, -50%) !important;
          }
          /* Right SVG lines */
          .banner-section .spline-wrapper svg:nth-of-type(2) {
            width: 600px !important;
            height: 550px !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          /* Labels - rotate back to horizontal */
          .banner-section .spline-wrapper > div:nth-of-type(1) {
            left: 120% !important;
            top: 15% !important;
            transform: translateY(-50%) rotate(-90deg) !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(2) {
            top: 31.5% !important;
            left: 110% !important;
            transform: translateY(-50%) rotate(-90deg) !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(3) {
            top: 50% !important;
            left: 98% !important;
            transform: translateY(-50%) rotate(-90deg) !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(4) {
            top: 68.5% !important;
            left: 107% !important;
            transform: translateY(-50%) rotate(-90deg) !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(5) {
            top: 85% !important;
            left: 120% !important;
            transform: translateY(-50%) rotate(-90deg) !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(6) {
            left: -15% !important;
            top: 50% !important;
            transform: translateY(-50%) rotate(-90deg) !important;
          }
          /* Speak button */
          .speak-button-wrapper {
            top: 90% !important;
          }
          /* Hide connection lines */
          .connection-lines-section {
            display: none !important;
          }
        }
        
        @media (max-width: 809px) {
          .banner-section {
            height: 690px !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
          .banner-section .heading-text,
          .banner-section h1 {
            font-size: 20px !important;
            top: 90px !important;
            width: 100% !important;
            line-height: 1.2 !important;
          }
          .banner-section .spline-wrapper {
            width: 390px !important;
            height: 690px !important;
            transform: translate(-50%, -50%) rotate(90deg) !important;
          }
          .banner-section .spline-container {
            width: 550px !important;
            height: 690px !important;
            transform: translate(-50%, -50%) !important;
          }
          /* Left SVG */
          .banner-section .spline-wrapper svg:first-of-type {
            width: 80px !important;
            height: 10px !important;
            left: 20% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          /* Right SVG */
          .banner-section .spline-wrapper svg:nth-of-type(2) {
            width: 250px !important;
            height: 600px !important;
            left: 90% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) scale(0.6) !important;
          }
          /* All labels font size 8px */
          .banner-section .spline-wrapper > div {
            font-size: 8px !important;
            padding: 4px 8px !important;
          }
          /* Food */
          .banner-section .label-food {
            top: 68.2% !important;
            left: 112% !important;
            transform: translateX(-50%) rotate(-90deg) !important;
          }
          /* Medical */
          .banner-section .label-medical {
            top: 59% !important;
            left: 108% !important;
            transform: translateX(-50%) rotate(-90deg) !important;
          }
          /* Real Estate */
          .banner-section .label-realestate {
            top: 50% !important;
            left: 102.5% !important;
            transform: translate(-50%, -50%) rotate(-90deg) !important;
          }
          /* Automotive */
          .banner-section .label-automotive {
            top: 37.5% !important;
            left: 108% !important;
            transform: translateX(-50%) rotate(-90deg) !important;
          }
          /* Tech */
          .banner-section .label-tech {
            top: 29% !important;
            left: 112% !important;
            transform: translateX(-50%) rotate(-90deg) !important;
          }
          /* Voice Support */
          .banner-section .voice-support-label {
            top: 50% !important;
            left: 5% !important;
            transform: translate(-50%, -50%) rotate(-90deg) !important;
          }
          /* Speak button */
          .speak-button-wrapper {
            top: 90% !important;
            left: 50% !important;
          }
        }
        
        @media (min-width: 1200px) {
          .banner-section {
            height: 800px !important;
          }
          .banner-section .spline-wrapper {
            width: 800px !important;
            height: 600px !important;
          }
          .banner-section .spline-wrapper svg:first-of-type {
            width: 120px !important;
            left: 90px !important;
          }
          .banner-section .spline-wrapper svg:nth-of-type(2) {
            width: 238px !important;
            height: 372px !important;
            left: 560px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(1) {
            left: 805px !important;
            top: 27% !important;
            font-size: 16px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(2) {
            left: 775px !important;
            top: 41.5% !important;
            font-size: 16px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(3) {
            left: 745px !important;
            top: 59.5% !important;
            font-size: 16px !important;
            padding: 10px 24px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(4) {
            left: 775px !important;
            top: 74.2% !important;
            font-size: 16px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(5) {
            left: 805px !important;
            top: 89% !important;
            font-size: 16px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(6) {
            left: -190px !important;
            top: 59.5% !important;
            font-size: 16px !important;
            padding: 10px 24px !important;
          }
          .banner-section .spline-wrapper > div:nth-of-type(6) {
            left: -90px !important;
            top: 59.5% !important;
          }
          .banner-section .spline-container {
            width: 800px !important;
            height: 600px !important;
          }
          .banner-section .heading-text {
            top: 150px !important;
            font-size: 40px !important;
          }
          .speak-button-wrapper {
            top: 665px !important;
          }
        }
        
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