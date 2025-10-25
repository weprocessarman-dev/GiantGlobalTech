'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import AboutBanner from '@/components/about-banner';

const MissionVisionSection = dynamic(() => import('@/components/mission-vision-section'), { ssr: false });
const StartNowSection = dynamic(() => import('@/components/start-now-section'), { ssr: false });
const AboutFAQSection = dynamic(() => import('@/components/about-faq-section'), { ssr: false });
const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false });
const GradientActionSection = dynamic(() => import('@/components/gradient-action-section'), { ssr: false });
const NewsletterActionSection = dynamic(() => import('@/components/newsletter-action-section'), { ssr: false });

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <AboutBanner />
        </motion.div>
        <MissionVisionSection />
        <StartNowSection />
        <AboutFAQSection />
        <ReviewsSection />
        <GradientActionSection />
        <NewsletterActionSection />
    </div>
  );
}