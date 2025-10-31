'use client';

import { Inter } from 'next/font/google';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function WaveDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const pathLength = 2000;
  
  const wave1Progress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const wave2Progress = useTransform(scrollYProgress, [0.05, 0.65], [0, 1]);
  const wave3Progress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  
  const wave1Offset = useTransform(wave1Progress, [0, 1], [pathLength, 0]);
  const wave2Offset = useTransform(wave2Progress, [0, 1], [pathLength, 0]);
  const wave3Offset = useTransform(wave3Progress, [0, 1], [pathLength, 0]);
  
  const dot1Opacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const dot1X = useTransform(scrollYProgress, [0.2, 0.25], [-90, 0]);
  
  const dot2Opacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const dot2X = useTransform(scrollYProgress, [0.3, 0.35], [-100, 0]);
  
  const dot3Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const dot3X = useTransform(scrollYProgress, [0.4, 0.45], [-100, 0]);
  
  const num1Opacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const num1Scale = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const num1Y = useTransform(scrollYProgress, [0.25, 0.3], [34, 0]);
  
  const num2Opacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const num2Scale = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const num2Y = useTransform(scrollYProgress, [0.35, 0.4], [40, 0]);
  
  const num3Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const num3Scale = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const num3Y = useTransform(scrollYProgress, [0.45, 0.5], [25, 0]);
  
  return (
    <>
      <style jsx>{`
        @media (min-width: 390px) and (max-width: 809px) {
          .wave-diagram-container {
            width: 290px !important;
            height: 800px !important;
          }
          
          .wave-heading {
            font-size: 24px !important;
          }
          
          .wave-description {
            font-size: 14px !important;
            margin-bottom: 50px !important;
          }
          
          .wave-svg-container {
            top: 500px !important;
          }
          
          .wave-svg-container > div {
            transform: rotate(90deg) scale(2.5) !important;
          }
          
          .wave-svg-container svg text[font-size="126"] {
            font-size: 80px !important;
          }
          
          .wave-svg-container svg text[font-size="28"],
          .wave-svg-container svg text[font-size="26"] {
            font-size: 18px !important;
          }
          
          .wave-svg-container .wave-text-label {
            transform: rotate(-90deg) translate(-15px, -15px) !important;
            transform-box: fill-box !important;
            transform-origin: center !important;
          }
          
          .wave-svg-container .wave-text-line2 {
            transform: rotate(-90deg) translate(15px, 15px) !important;
          }
        }
      `}</style>
      <section className="w-full py-16" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div 
            className="wave-diagram-container relative rounded-2xl overflow-hidden"
            style={{
              width: '1070.86px',
              height: '800.59px',
            }}
          >
            {/* Heading and Paragraph */}
            <div className="absolute top-0 left-0 w-full" style={{ marginTop: '50px' }}>
              <div className="text-center px-8">
                <h2 
                  className="font-bold mb-4 wave-heading"
                  style={{
                    fontSize: '44px',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 20%, #FFFFFF 100%, rgba(255, 255, 255, 0.2) 20%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  How We'll Work Together
                </h2>
                <p 
                  className="text-white text-base leading-relaxed wave-description"
                  style={{
                    fontWeight: 400,
                    opacity: 0.9,
                    color: '#FFFFFF',
                  }}
                >
                  A true partnership. We listen, align with your goals, and deliver the results you need.
                </p>
              </div>
            </div>

            {/* Wave SVG Container */}
            <div 
              className="absolute w-full flex justify-center items-center wave-svg-container" 
              style={{ 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div>
              <svg width="1200" height="460" viewBox="-100 -150 1285 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingTop: '10px' }}>
                {/* Animated Wave Paths - Drawing from start to end */}
                <g filter="url(#filter0_f_125_159)" transform="translate(15, 0)">
                  <motion.path 
                    d="M22.8447 220.283C83.0855 246.15 222.982 272.716 300.64 172.048C397.713 46.2119 498.382 -65.2425 712.303 136.095C850.722 249.346 969.367 175.643 1062.84 136.095" 
                    stroke="url(#paint0_linear_125_159)" 
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={pathLength}
                    style={{ strokeDashoffset: wave1Offset }}
                  />
                </g>
                
                {/* Second Wave */}
                <g transform="translate(15, 15)">
                  <motion.path 
                    d="M0.844727 196.283C61.0855 222.15 200.982 248.716 278.64 148.048C375.713 22.2119 476.382 -89.2425 690.303 112.095C828.722 225.346 947.367 151.643 1040.84 112.095" 
                    stroke="url(#paint0_linear_125_160)" 
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={pathLength}
                    style={{ strokeDashoffset: wave2Offset }}
                  />
                </g>
                
                {/* Third Wave */}
                <g filter="url(#filter0_f_125_158)" transform="translate(0, -12)">
                  <motion.path 
                    d="M21.9868 220.283C82.2276 246.15 222.124 272.716 299.782 172.048C396.856 46.2119 497.524 -65.2425 711.445 136.095C849.864 249.346 968.509 175.643 1061.99 136.095" 
                    stroke="url(#paint0_linear_125_158)" 
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={pathLength}
                    style={{ strokeDashoffset: wave3Offset }}
                  />
                </g>
                
                {/* Blue Dots on wave - slide in from left and stop at exact positions */}
                <motion.circle 
                  cx="140" 
                  cy="234" 
                  r="8" 
                  fill="#2C71F3" 
                  stroke="#FFFFFF" 
                  strokeWidth="3"
                  style={{ opacity: dot1Opacity, x: dot1X }}
                />
                
                <motion.circle 
                  cx="500" 
                  cy="15" 
                  r="8" 
                  fill="#2C71F3"
                  stroke="#FFFFFF" 
                  strokeWidth="3"
                  style={{ opacity: dot2Opacity, x: dot2X }}
                />
                
                <motion.circle 
                  cx="870"
                  cy="185" 
                  r="8" 
                  fill="#2C71F3" 
                  stroke="#FFFFFF" 
                  strokeWidth="3"
                  style={{ opacity: dot3Opacity, x: dot3X }}
                />
                
                {/* Animated Step Numbers - emerge from blue dots with slide up effect */}
                <motion.text 
                  x="130" 
                  y="200" 
                  textAnchor="middle" 
                  fontSize="126" 
                  fontWeight="600"
                  fill="url(#paint_number_1)"
                  className={inter.className}
                  style={{ 
                    opacity: num1Opacity, 
                    scale: num1Scale,
                    y: num1Y,
                    transformOrigin: '140px 234px'
                  }}
                >
                  1
                </motion.text>
                
                <motion.text 
                  x="500" 
                  y="-25" 
                  textAnchor="middle" 
                  fontSize="126" 
                  fontWeight="600"
                  fill="url(#paint_number_2)"
                  className={inter.className}
                  style={{ 
                    opacity: num2Opacity,
                    scale: num2Scale,
                    y: num2Y,
                    transformOrigin: '500px 15px'
                  }}
                >
                  2
                </motion.text>
                
                <motion.text 
                  x="870" 
                  y="160" 
                  textAnchor="middle" 
                  fontSize="126" 
                  fontWeight="600"
                  fill="url(#paint_number_3)"
                  className={inter.className}
                  style={{ 
                    opacity: num3Opacity,
                    scale: num3Scale,
                    y: num3Y,
                    transformOrigin: '870px 185px'
                  }}
                >
                  3
                </motion.text>
                
                {/* Text lines opposite to numbers */}
                {/* First line - opposite to number 1 */}
                <text 
                  x="130" 
                  y="20" 
                  textAnchor="middle" 
                  fontSize="28" 
                  fontWeight="400"
                  fill="white"
                  className={`${inter.className} wave-text-label`}
                >
                  Share
                </text>
                <text 
                  x="130" 
                  y="50" 
                  textAnchor="middle" 
                  fontSize="28" 
                  fontWeight="400"
                  fill="white"
                  className={`${inter.className} wave-text-label wave-text-line2`}
                >
                  Your Vision
                </text>
                
                {/* Second line - opposite to number 2 */}
                <text 
                  x="510" 
                  y="90" 
                  textAnchor="middle" 
                  fontSize="28" 
                  fontWeight="400"
                  fill="white"
                  className={`${inter.className} wave-text-label`}
                >
                  We Build
                </text>
                <text 
                  x="510" 
                  y="120" 
                  textAnchor="middle" 
                  fontSize="28" 
                  fontWeight="400"
                  fill="white"
                  className={`${inter.className} wave-text-label wave-text-line2`}
                >
                  the Plan
                </text>
                
                {/* Third line - opposite to number 3 */}
                <text 
                  x="875" 
                  y="270" 
                  textAnchor="middle" 
                  fontSize="26" 
                  fontWeight="400"
                  fill="white"
                  className={`${inter.className} wave-text-label`}
                >
                  Achieve
                </text>
                <text 
                  x="875" 
                  y="300" 
                  textAnchor="middle" 
                  fontSize="26" 
                  fontWeight="400"
                  fill="white"
                  className={`${inter.className} wave-text-label wave-text-line2`}
                >
                  the Results
                </text>
                <defs>
                  <filter id="filter0_f_125_159" x="0.87207" y="0.518799" width="1083.92" height="268.456" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_125_159"/>
                  </filter>
                  
                  <filter id="filter0_f_125_158" x="0.0141602" y="0.518799" width="1083.92" height="268.456" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_125_158"/>
                  </filter>
                  
                  <linearGradient id="paint0_linear_125_159" x1="22.8447" y1="134.751" x2="1062.84" y2="134.751" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A3B7FF"/>
                    <stop offset="0.5" stopColor="#0D3DEE"/>
                    <stop offset="1" stopColor="#0D3DEE" stopOpacity="0.2"/>
                  </linearGradient>
                  
                  <linearGradient id="paint0_linear_125_160" x1="0.844727" y1="110.751" x2="1040.84" y2="110.751" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A3B7FF"/>
                    <stop offset="0.5" stopColor="#0D3DEE"/>
                    <stop offset="1" stopColor="#A3B7FF" stopOpacity="0.2"/>
                  </linearGradient>
                  
                  <linearGradient id="paint0_linear_125_158" x1="21.9868" y1="134.751" x2="1061.99" y2="134.751" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A3B7FF"/>
                    <stop offset="0.5" stopColor="#0D3DEE"/>
                    <stop offset="1" stopColor="#A3B7FF" stopOpacity="0.2"/>
                  </linearGradient>
                  
                  <linearGradient id="paint_number_1" x1="240" y1="140" x2="140" y2="240" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
                    <stop offset="83%" stopColor="#FFFFFF" stopOpacity="0"/>
                  </linearGradient>
                  
                  <linearGradient id="paint_number_2" x1="600" y1="-60" x2="500" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="0.831731" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint_number_3" x1="810" y1="100" x2="870" y2="220" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="0.831731" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
