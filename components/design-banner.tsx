
'use client';

import Waves from './Waves';

export default function DesignBanner() {
  return (
    <div style={{ width: '100%', position: 'relative', background: 'transparent', overflow: 'visible', maxWidth: '100%' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .banner-section {
            height: 600px !important;
          }
          .banner-title {
            font-size: 60px !important;
            line-height: 60px !important;
            width: 90% !important;
            height: auto !important;
            top: 300px !important;
          }
          .banner-text {
            font-size: 14px !important;
            line-height: 18px !important;
            width: 85% !important;
            height: auto !important;
            top: 380px !important;
          }
          .flare-image {
            width: 80% !important;
            height: auto !important;
          }
        }
      `}</style>
      <section
        className="banner-section"
        style={{
          width: '100%',
          height: '890px',
          overflow: 'visible',
          position: 'relative',
          zIndex: 0,
          background: 'transparent',
        }}
      >
        {/* Waves with Background Image Colors */}
        <Waves
          lineColor="rgba(255, 255, 255, 0.8)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={30}
          waveAmpY={15}
          friction={0.92}
          tension={0.008}
          maxCursorMove={80}
          xGap={15}
          yGap={40}
          backgroundImage="/designbg.jpg"
          style={{ zIndex: 1, width: '100%', height: '100%' }}
        />


        <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
          <h1
            className="banner-title"
            style={{
              position: 'absolute',
              width: 758.71,
              height: 148.74,
              left: '50%',
              top: 400.12,
              transform: 'translateX(-50%)',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 150,
              lineHeight: '150px',
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
            DESIGN
          </h1>
          <p
            className="banner-text"
            style={{
              position: 'absolute',
              width: 652.46,
              height: 50.47,
              left: '50%',
              top: 550.3,
              transform: 'translateX(-50%)',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: '22px',
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
        
        {/* Flare Image at Bottom Border */}
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
          width: 'auto',
          height: 'auto',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
