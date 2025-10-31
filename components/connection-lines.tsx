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
    <section className="w-full connection-lines-section h-[280px] md:h-[250px] lg:h-[300px] relative mb-12">
      <style jsx>{`
        @media (max-width: 809px) {
          .connection-lines-section {
            display: none;
          }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div 
          ref={containerRef}
          style={{
            width: '100%',
            height: '100%',
            margin: '0 auto',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <svg 
            className="w-full h-full max-w-[800px] mx-auto" 
            viewBox="0 0 1200 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid meet"
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
      

    </section>
  );
}