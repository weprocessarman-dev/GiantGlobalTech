'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function StartNowSection() {
  const [satisfaction, setSatisfaction] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate 99%
          let count1 = 0;
          const interval1 = setInterval(() => {
            count1 += 1;
            setSatisfaction(count1);
            if (count1 >= 99) clearInterval(interval1);
          }, 20);
          
          // Animate 5k+
          let count2 = 0;
          const interval2 = setInterval(() => {
            count2 += 50;
            setProjects(count2);
            if (count2 >= 5000) {
              setProjects(5000);
              clearInterval(interval2);
            }
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="w-full start-now-section"
    >
      <div className="container mx-auto px-4 section-container">
        <div className="content-wrapper">
        {/* Left Side - Stats Content */}
        <div className="stats-container">
          {/* 99% Client Satisfaction */}
          <div className="stat-item">
            <h3 className={`${inter.className} stat-number`}>
              {satisfaction}%
            </h3>
            <p className={`${inter.className} stat-label`}>
              Client Satisfaction
            </p>
          </div>

          {/* 5k+ Project Completed */}
          <div className="stat-item">
            <h3 className={`${inter.className} stat-number`}>
              {projects >= 5000 ? '5k+' : projects}
            </h3>
            <p className={`${inter.className} stat-label`}>
              Project Completed
            </p>
          </div>

          {/* 24/7 Full Support */}
          <div className="stat-item">
            <h3 className={`${inter.className} stat-number`}>
              24/7
            </h3>
            <p className={`${inter.className} stat-label`}>
              Full Support
            </p>
          </div>
        </div>

        {/* Right Side - Gear Image */}
        <div className="gear-container">
          <img 
            src="/Featuregare.png" 
            alt="Feature Gear"
            className="gear-float"
          />
        </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .start-now-section {
          margin-top: 80px;
        }

        .section-container {
          max-width: 1440px;
        }

        .content-wrapper {
          position: relative;
          width: 100%;
          max-width: 1000px;
          height: 169px;
          margin: 0 auto;
          border-radius: 15px;
          overflow: visible;
          background-image: url(/startnowrectangle.png);
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
        }

        .stats-container {
          display: flex;
          align-items: center;
          gap: 80px;
          z-index: 2;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 44px;
          font-weight: 700;
          color: white;
          margin: 0;
          line-height: 1;
        }

        .stat-label {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          margin: 8px 0 0 0;
          line-height: 1.2;
        }

        .gear-container {
          position: absolute;
          right: 50px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
        }

        .gear-float {
          width: 335px;
          height: 335px;
          object-fit: contain;
        }

        @keyframes floatGear {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-15px) rotate(3deg) scale(1.02);
          }
          50% {
            transform: translateY(-25px) rotate(-2deg) scale(1.03);
          }
          75% {
            transform: translateY(-10px) rotate(1deg) scale(1.01);
          }
        }
        
        .gear-float {
          animation: floatGear 7s ease-in-out infinite;
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .content-wrapper {
            max-width: 610px;
            height: 84px;
            padding: 0 30px;
          }

          .stat-number {
            font-size: 24px;
          }

          .stat-label {
            font-size: 12px;
          }

          .stats-container {
            gap: 40px;
          }

          .gear-float {
            width: 286px !important;
            height: 286px !important;
          }

          .gear-container {
            right: 30px;
          }
        }

        @media (max-width: 809px) {
          .content-wrapper {
            max-width: 180px;
            height: 783px;
            flex-direction: column;
            padding: 40px 20px;
            justify-content: center;
          }

          .stats-container {
            flex-direction: column;
            gap: 40px;
          }

          .stat-number {
            font-size: 40px;
          }

          .stat-label {
            font-size: 16px;
          }

          .gear-container {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
          }

          .gear-container {
            width: 379px !important;
            height: 379px !important;
          }

          .gear-float {
            width: 379px !important;
            height: 379px !important;
          }

          .gear-container img {
            width: 379px !important;
            height: 379px !important;
          }
        }
      `}</style>
    </section>
  );
}