'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent, cardId: number) => {
    // Keep for potential future use
  };

  const cards = [
    { id: 1, title: 'Design', logo: '/Designlayerlogo.png', description: 'Design should be clear, not cluttered. We create clean, intentional visuals that make your brand stand out and your message resonate' },
    { id: 2, title: 'Website', logo: '/developlayerlogo.png', description: 'Generic copy leaks customers. We write words that look your visitor in the eye, turning their curiosity into conviction.' },
    { id: 3, title: 'Marketing', logo: '/markketinglayerlogo.png', description: 'We blend creativity with a lot of common sense to get your messageSEEN. This is how you build a reputation, and attract clients.' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes animate {
          0%, 100% {
            transform: translateY(10px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .card-container {
          position: relative;
          width: 373.36px;
          height: 290.08px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 30px;
          transition: 0.5s;
          cursor: pointer;
        }
        
        .card-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 20px;
          transform: skewX(15deg);
          transition: 0.5s;
        }
        
        .card-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          background: #fff;
          border-radius: 20px;
          transform: skewX(15deg);
          transition: 0.5s;
          filter: blur(30px);
        }
        
        .card-container:hover::before,
        .card-container:hover::after {
          transform: skewX(0deg);
          left: 20px;
          width: calc(100% - 40px);
        }
        
        .card-1::before,
        .card-1::after {
          background: linear-gradient(315deg, #3B82F6, #06B6D4);
        }
        
        .card-2::before,
        .card-2::after {
          background: linear-gradient(315deg, #3B82F6, #06B6D4);
        }
        
        .card-3::before,
        .card-3::after {
          background: linear-gradient(315deg, #3B82F6, #06B6D4);
        }
        
        .card-span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
        }
        
        .card-span::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: 0.1s;
          animation: animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          display: none;
        }
        
        .card-container:hover .card-span::before {
          display: none;
        }
        
        .card-span::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: 0.5s;
          animation: animate 2s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          animation-delay: -1s;
        }
        
        .card-container:hover .card-span::after {
          bottom: -50px;
          right: 50px;
          width: 100px;
          height: 100px;
          opacity: 1;
        }
        
        .card-content {
          position: relative;
          left: 0;
          padding: 20px 40px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          z-index: 1;
          transition: 0.5s;
          color: #fff;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .card-container:hover .card-content {
          left: -25px;
          padding: 40px 30px;
        }
        
        .small-card-logo {
          position: absolute;
          bottom: -25px;
          right: 75px;
          width: 50px;
          height: 50px;
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.5s ease;
          z-index: 10;
          object-fit: contain;
        }
        
        .card-container:hover .small-card-logo {
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 1440px) {
          .card-container {
            width: 284px !important;
            height: 220px !important;
            margin: 0 22px !important;
          }
          
          .card-content {
            padding: 15px 30px !important;
          }
          
          .card-container:hover .card-content {
            padding: 30px 22px !important;
          }
          
          .card-content h3 {
            font-size: 38px !important;
            margin-bottom: 12px !important;
          }
          
          .card-content p {
            font-size: 12px !important;
            padding: 9px 12px !important;
          }
          
          .small-card-logo {
            width: 38px !important;
            height: 38px !important;
            bottom: -19px !important;
            right: 57px !important;
          }
          
          .feature-cards-wrapper {
            margin-bottom: 152px !important;
            padding-bottom: 76px !important;
          }
          
          .cards-flex {
            gap: 45px !important;
          }
        }
      `}</style>
      <div className="w-full max-w-[1440px] mx-auto px-4 feature-cards-wrapper" style={{marginBottom: '200px', paddingBottom: '100px' }}>
      <div className="flex justify-center items-center flex-wrap cards-flex" style={{ gap: '60px' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card-container card-${card.id}`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span className="card-span"></span>
            <img 
              src={card.logo} 
              alt={`${card.title} logo`}
              className="small-card-logo"
            />
            
            <div className="card-content">
              <h3 
                className={inter.className}
                style={{
                  fontSize: '50px',
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.2) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}
              >
                {card.title}
              </h3>
              <p 
                style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  textAlign: 'center',
                  lineHeight: '1.5',
                  padding: '12px 16px'
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}