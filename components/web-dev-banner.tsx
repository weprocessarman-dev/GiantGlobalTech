'use client';

import dynamic from 'next/dynamic';

const Hyperspeed = dynamic(() => import('./Hyperspeed'), { ssr: false });

export default function WebDevBanner() {
  return (
    <div style={{ width: '100%', position: 'relative', background: 'transparent', overflow: 'visible', maxWidth: '100%' }}>
      <section
        className="banner-section"
        style={{
          width: '100%',
          height: 'min(890px, 100vh)',
          overflow: 'visible',
          position: 'relative',
          zIndex: 0,
          background: 'transparent',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
          <Hyperspeed
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              colors: {
                roadColor: 0x000000,
                islandColor: 0x000000,
                background: 0x000000,
                shoulderLines: 0x3b82f6,
                brokenLines: 0x60a5fa,
                leftCars: [0x1e40af, 0x3b82f6, 0x60a5fa, 0x93c5fd],
                rightCars: [0x2563eb, 0x3b82f6, 0x60a5fa, 0x93c5fd],
                sticks: 0x3b82f6
              }
            }}
          />
        </div>

        <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
          <h1
            className="banner-title"
            style={{
              position: 'absolute',
              width: '90%',
              maxWidth: '1200px',
              left: '50%',
              top: '45%',
              transform: 'translateX(-50%)',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(60px, 16.8vw, 150px)',
              lineHeight: '1',
              textAlign: 'center',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50.49%, rgba(255,255,255,0.2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              padding: 0,
              userSelect: 'none',
            }}
          >
            DEVELOPMENT
          </h1>
          <p
            className="banner-text"
            style={{
              position: 'absolute',
              width: '85%',
              maxWidth: '652.46px',
              left: '50%',
              top: '62%',
              transform: 'translateX(-50%)',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: '1.4',
              textAlign: 'center',
              color: '#FFFFFF',
              margin: 0,
              padding: 0,
              userSelect: 'none',
            }}
          >
            Custom web development solutions that drive growth and deliver exceptional user experiences
          </p>
        </div>
      </section>
      
      <img
        src="/Flare.png"
        alt="Flare"
        className="flare-image"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%) translateY(50%)',
          width: '150%',
          height: 'auto',
          zIndex: 10,
          pointerEvents: 'none',
          mixBlendMode: 'lighten',
        }}
      />
    </div>
  );
}
