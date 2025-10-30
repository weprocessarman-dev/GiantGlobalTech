'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ConnectionLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });
  
  const mainLineOffset = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const branchLineOffset = useTransform(scrollYProgress, [0, 1], [1000, 0]);

  return (
    <section className="w-{1200px} connection-lines-section" style={{ height: '300px', position: 'relative', marginBottom: '50px' }}>
      <div className="max-w-[1200px] mx-auto px-4" style={{ height: '100%' }}>
        <div 
          ref={containerRef}
          style={{
            width: '100%',
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <svg 
            width="80%" 
            height="300"
            className="connection-lines-svg" 
            viewBox="0 0 1200 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid meet"
            style={{ display: 'block', margin: '0 auto' }}
          >
        {/* Main vertical line - fixed */}
        <path 
          d="M600 0V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <motion.path 
          d="M600 0V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="2"
          strokeDasharray="500"
          style={{
            strokeDashoffset: mainLineOffset
          }}
        />
        
        {/* Right branch - fixed */}
        <path 
          d="M650 0V180Q650 200 670 200H1080Q1100 200 1100 220V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <motion.path 
          d="M650 0V180Q650 200 670 200H1080Q1100 200 1100 220V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="2"
          strokeDasharray="1000"
          style={{
            strokeDashoffset: branchLineOffset
          }}
        />
        
        {/* Left branch - fixed */}
        <path 
          d="M550 0V180Q550 200 530 200H120Q100 200 100 220V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <motion.path 
          d="M550 0V180Q550 200 530 200H120Q100 200 100 220V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="2"
          strokeDasharray="1000"
          style={{
            strokeDashoffset: branchLineOffset
          }}
        />
        

        

        
        <defs>
          <linearGradient 
            id="paint0_linear_107_218" 
            x1="600" 
            y1="200" 
            x2="600" 
            y2="0" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A3B7FF"/>
            <stop offset="1" stopColor="#0D3DEE"/>
          </linearGradient>
        </defs>
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 1200px) {
          .connection-lines-section {
            width: 80% !important;
            height: 300px !important;
          }
        }
        
        @media (max-height: 780px) {
          .connection-lines-section {
            height: 208px !important;
          }
          .connection-lines-svg {
            width: 65% !important;
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 768px) {
          .connection-lines-section {
            height: 200px !important;
          }
        }
        
        @media (max-width: 480px) {
          .connection-lines-section {
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  );
}