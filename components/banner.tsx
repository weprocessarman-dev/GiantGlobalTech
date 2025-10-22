'use client';

import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import SpeakButton from './speak-button';

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
      className="w-full"
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
          transform: `translate(-50%, -50%) scale(${1 + volume * 0.6})`,
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
          {/* Voice Waves - Inside container */}
          {waves.map((wave, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${70 + i * 10}%`,
                height: `${70 + i * 10}%`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${wave})`,
                border: `2px solid rgba(0, 88, 255, ${0.6 - i * 0.2})`,
                borderRadius: '50%',
                transition: 'all 0.1s ease-out',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
          ))}
          <Spline
            scene="https://prod.spline.design/uMchW1Yhk3YPEhQh/scene.splinecode"
            style={{
              width: '120%',
              height: '120%',
              position: 'absolute',
              left: '-10%',
              top: '-1%',
              zIndex: 2
            }}
          />
        </div>
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
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      
      <SpeakButton 
        onVoiceStart={(active, vol) => {
          setIsVoiceActive(active);
          setVolume(vol);
        }} 
      />

      {/* CSS Animation for Horizontal Glow Effect */}
      <style jsx>{`
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
