'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import WebDevBanner from '@/components/web-dev-banner';
import WebDevServicesLine from '@/components/web-dev-services-line';

const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false });
const GradientActionSection = dynamic(() => import('@/components/gradient-action-section'), { ssr: false });
const NewsletterActionSection = dynamic(() => import('@/components/newsletter-action-section'), { ssr: false });

export default function WebDevelopmentPage() {
  return (
    <div className="relative w-full min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <WebDevBanner />
      </motion.div>
      <WebDevServicesLine />
      <ReviewsSection />
      <GradientActionSection />
      <NewsletterActionSection />
    </div>
  );
}
