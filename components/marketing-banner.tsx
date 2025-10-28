'use client';

import Ballpit from './Ballpit';

export default function MarketingBanner() {
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
        {/* Ballpit Background */}
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={[0x3B82F6, 0x60A5FA, 0x93C5FD, 0x2563EB, 0x1E40AF]}
          ambientColor={0x3B82F6}
          lightIntensity={300}
        />

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
            MARKETING
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
            Lorem ipsum dolor sit amet, consectetur elit, sed tempor dolor sit amet, consectetur elit, ipsum
          </p>
        </div>
      </section>
      
      {/* Flare Image on Bottom Border */}
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