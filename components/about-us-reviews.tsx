'use client';

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Review {
  text: string;
  name: string;
  position: string;
  avatar: string;
}

const reviewsData: Review[] = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard",
    name: "Hina Jane",
    position: "CEO at TechFront",
    avatar: "/avatar.png"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard",
    name: "Hina Jane",
    position: "CEO at TechFront", 
    avatar: "/avatar.png"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard",
    name: "Hina Jane",
    position: "CEO at TechFront",
    avatar: "/avatar.png"
  }
];

export default function AboutUsReviews() {
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth] = useState(600);
  const [cardGap] = useState(24);
  const [animationDuration] = useState(30);
  const cardTotalWidth = cardWidth + cardGap;
  const containerWidth = cardTotalWidth * (reviewsData.length * 2);
  const animationDistance = cardTotalWidth * reviewsData.length;

  const cardStyle = {
    boxSizing: 'border-box' as const,
    background: 'rgba(135, 135, 135, 0.2)',
    borderRadius: '20px',
    padding: '30px',
    width: `${cardWidth}px`,
    height: '280px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    justifyContent: 'space-between' as const,
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
    borderRight: '1px solid rgba(255, 255, 255, 0.3)',
    marginRight: `${cardGap}px`,
    marginTop: '20px',
  };

  const ReviewCard = ({ review, keyPrefix = '' }: { review: Review; keyPrefix?: string }) => (
    <div
      className="flex-shrink-0 transition-all duration-300 ease-in-out hover:transform hover:scale-105"
      style={cardStyle}
    >
      <div className="mb-6 text-center px-8">
        <p 
          className={`${inter.className} leading-relaxed text-base md:text-lg`}
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 400,
            lineHeight: '1.6'
          }}
        >
          {review.text}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div 
          className="flex-shrink-0 mr-4"
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden"
            style={{
              backgroundImage: `url(/avatar.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            onError={(e) => {
              (e.target as HTMLDivElement).style.backgroundImage = 'none';
              (e.target as HTMLDivElement).innerHTML = review.name.charAt(0);
            }}
          >
            {/* Fallback initial if image doesn't load */}
          </div>
        </div>
        <div className="text-left">
          <h4 
            className={`${inter.className} font-semibold text-lg`}
            style={{
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '12px',
              marginBottom: '4px'
            }}
          >
            {review.name}
          </h4>
          <p 
            className={`${inter.className} text-sm`}
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 400,
              fontSize: '12px',
            }}
          >
            {review.position}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full" style={{ marginTop: '80px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`${inter.className} font-bold text-center mb-6`}
            style={{
              fontSize: '50px',
              fontWeight: 800,
              marginTop: '80px',
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            What Say Our Valuable Customers
          </h2>
        </div>
        <div className="w-full overflow-hidden">
          <div 
            className="flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              animation: `scroll ${animationDuration}s linear infinite`,
              animationPlayState: isHovered ? 'paused' : 'running',
              width: `${containerWidth}px`,
            }}
          >
            {reviewsData.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
            {reviewsData.map((review, index) => (
              <ReviewCard key={`duplicate-${index}`} review={review} keyPrefix="duplicate" />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${animationDistance}px);
          }
        }
        
        @media (max-width: 768px) {
          section h2 {
            font-size: 32px !important;
            margin-top: 40px !important;
          }
          
          section .flex-shrink-0 {
            width: 90% !important;
            min-width: 300px !important;
            height: auto !important;
            padding: 20px !important;
            margin: 10px auto !important;
          }
          
          section .mb-6 {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          section .mb-6 p {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          section h2 {
            font-size: 24px !important;
            line-height: 1.3 !important;
          }
          
          section .flex-shrink-0 {
            width: 95% !important;
            min-width: 280px !important;
            padding: 15px !important;
          }
          
          section .mb-6 p {
            font-size: 12px !important;
          }
          
          section .flex-shrink-0 > div:last-child > div:first-child {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
