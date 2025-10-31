'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import AboutBanner from '@/components/about-banner';

const MissionVisionSection = dynamic(() => import('@/components/mission-vision-section'), { ssr: false });
const StartNowSection = dynamic(() => import('@/components/start-now-section'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/faq-section'), { ssr: false });
const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false });
const GradientSection = dynamic(() => import('@/components/gradient-section'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/newslettersection'), { ssr: false });

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen" style={{ background: '#000013' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <AboutBanner />
        </motion.div>
        <MissionVisionSection />
        <StartNowSection />
        <FAQSection />
        <ReviewsSection />
        <GradientSection />
        <NewsletterSection />
    </div>
  );
}