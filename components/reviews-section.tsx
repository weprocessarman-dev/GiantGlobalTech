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
    text: "Our support staff was completely swamped with the same three questions all day: 'Where's my order?', 'What's your return policy?', etc. The GGT agent now handles about 80% of those inquiries instantly. It freed up my team to focus on the complex issues that actually need a human touch.",
    name: "David L.",
    position: "E-commerce Store Founder",
    avatar: "/avatar.png"
  },
  {
    text: "I'll be honest, my biggest concern was data privacy with an AI. But the GGT platform has been 100% secure and reliable. I used to lose sleep over missed inquiries after we closed. Now I regularly wake up to 2-3 qualified leads in my inbox from overnight visitors. The agent paid for itself in the first week. A total game-changer for our business.",
    name: "Flamingo K.",
    position: "Owner of a Local Service Business", 
    avatar: "/avatar.png"
  },
  {
    text: "Our old website was a mess. The GGT team didn't just give us a facelift; they rebuilt the entire thing with a focus on a user journey that actually makes sense. They obsessed over the design and the copy. Our contact form submissions have more than doubled since we launched last month. They just get it.",
    name: "Mark Chen.",
    position: "Marketing Director",
    avatar: "/avatar.png"
  }
];

export default function ReviewsSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth] = useState(600);
  const [cardGap] = useState(24);
  const [animationDuration] = useState(30);
  
  // Calculate total width for one card including gap
  const cardTotalWidth = cardWidth + cardGap;
  
  // Calculate container width for all cards (original + duplicates)
  const containerWidth = cardTotalWidth * (reviewsData.length * 2);
  
  // Calculate animation distance (exactly 3 cards worth)
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
    marginBottom: '40px'
  };

  const ReviewCard = ({ review, keyPrefix = '' }: { review: Review; keyPrefix?: string }) => (
    <div
      className="flex-shrink-0 transition-all duration-300 ease-in-out hover:transform hover:scale-105"
      style={{...cardStyle, transformOrigin: 'bottom center'}}
    >
      {/* Content - Centered with padding */}
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

      {/* Avatar and Info - Horizontal Left Aligned Layout */}
      <div className="flex items-center justify-center">
        {/* Avatar Container */}
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
              console.log('Avatar failed to load: /avatar.png');
              (e.target as HTMLDivElement).style.backgroundImage = 'none';
              (e.target as HTMLDivElement).innerHTML = review.name.charAt(0);
            }}
          >
            {/* Fallback initial if image doesn't load */}
          </div>
        </div>
        
        {/* Name and Position - Left Aligned */}
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
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Heading */}
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
            What Our Customers Say About Us!
          </h2>
        </div>

        {/* Reviews Container */}
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
            {/* Original cards */}
            {reviewsData.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
            
            {/* Duplicate cards for seamless loop */}
            {reviewsData.map((review, index) => (
              <ReviewCard key={`duplicate-${index}`} review={review} keyPrefix="duplicate" />
            ))}
          </div>
        </div>
      </div>

      {/* Optimized CSS animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${animationDistance}px);
          }
        }
      `}</style>
    </section>
  );
}
