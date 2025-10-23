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
    <section className="w-full" style={{ padding: 'auto 0', position: 'relative', minHeight: '300px', marginTop: 'auto 0', marginBottom: '0' }}>
      <div className="max-w-[1440px] mx-auto px-4">
      <style jsx>{`
        @keyframes flowGlow {
          0% { stroke-dashoffset: 200; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        
        @keyframes flowGlowBranch {
          0% { stroke-dashoffset: 520; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }  
        }

        @media (max-width: 768px) {
          section {
            padding: 30px 0 !important;
            min-height: 250px !important;
            margin-top: 50px !important;
          }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div 
          ref={containerRef} 
          style={{
            width: '100%',
            height: '250px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <svg 
            width="100%" 
            height="300" 
            viewBox="0 0 1200 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid meet"
            style={{ display: 'block' }}
          >
        {/* Main vertical line */}
        <motion.path 
          d="M600 0V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="2"
          strokeDasharray="500"
          style={{
            strokeDashoffset: mainLineOffset
          }}
        />
        

        
        {/* Right branch */}
        <motion.path 
          d="M650 0V180Q650 200 670 200H1080Q1100 200 1100 220V250" 
          stroke="url(#paint0_linear_107_218)"
          strokeWidth="2"
          strokeDasharray="1000"
          style={{
            strokeDashoffset: branchLineOffset
          }}
        />
        

        
        {/* Left branch */}
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
      </div>
    </section>
  );
}