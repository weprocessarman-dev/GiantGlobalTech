
'use client';

import Waves from './Waves';

export default function DesignBanner() {
  return (
    <div style={{ width: '100%', position: 'relative', background: 'transparent', overflow: 'visible', maxWidth: '100%' }}>
      <section className="banner-section">
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


        <div className="banner-content">
          <h1 className="banner-title">
            DESIGN
          </h1>
          <p className="banner-text">
            Lorem ipsum dolor sit amet, consectetur elit, <br />sed tempor dolor sit amet, consectetur elit, ipsum
          </p>
        </div>
        
      </section>
      
      <img src="/Flare.png" alt="Flare" className="flare-image" />

      <style jsx>{`
        .banner-section {
          width: 100%;
          height: min(890px, 100vh);
          overflow: visible;
          position: relative;
          z-index: 0;
          background: transparent;
        }

        .banner-content {
          position: absolute;
          inset: 0;
          z-index: 10;
        }

        .banner-title {
          position: absolute;
          width: 800px;
          left: 50%;
          top: 45%;
          transform: translateX(-50%);
          font-family: Inter;
          font-style: normal;
          font-weight: 700;
          font-size: 100px;
          line-height: 1;
          text-align: center;
          background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50.49%, rgba(255,255,255,0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          margin: 0;
          padding: 0;
          user-select: none;
        }

        .banner-text {
          position: absolute;
          width: 800px;
          left: 50%;
          top: 62%;
          transform: translateX(-50%);
          font-family: Inter;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 1.4;
          text-align: center;
          color: #FFFFFF;
          margin: 0;
          padding: 0;
          user-select: none;
        }

        .flare-image {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
          width: 150%;
          height: auto;
          z-index: 10;
          pointer-events: none;
          mix-blend-mode: lighten;
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .banner-section {
            height: 590px;
          }

          .banner-title {
            font-size: 80px;
          }

          .banner-text {
            font-size: 16px;
          }
        }

        @media (max-width: 809px) {
          .banner-section {
            height: 486px;
          }

          .banner-title {
            width: 390px;
            font-size: 40px;
          }

          .banner-text {
            width: 390px;
            font-size: 12px;
          }

          .flare-image {
            width: 200%;
          }
        }
      `}</style>
    </div>
  );
}
