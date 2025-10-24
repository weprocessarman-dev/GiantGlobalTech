'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Banner from '@/components/banner';

const ConnectionLines = dynamic(() => import('@/components/connection-lines'));
const FeatureCards = dynamic(() => import('@/components/feature-cards'));
const WavesSection = dynamic(() => import('@/components/waves-section'), { ssr: false });
const AboutGGT = dynamic(() => import('@/components/aboutggt'), { ssr: false });
const WaveDiagram = dynamic(() => import('@/components/wave-diagram'), { ssr: false });
const StartMovingFast = dynamic(() => import('@/components/start-moving-fast'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/faq-section'), { ssr: false });
const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false });
const GradientSection = dynamic(() => import('@/components/gradient-section'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/newslettersection'), { ssr: false });

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <motion.div 
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Banner />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ConnectionLines />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <FeatureCards />
      </motion.div>
      <WavesSection />
      <AboutGGT />
      <WaveDiagram />
      <StartMovingFast />
      <FAQSection />
      <ReviewsSection />
      <GradientSection />
      <NewsletterSection />
    </div>
  );
}