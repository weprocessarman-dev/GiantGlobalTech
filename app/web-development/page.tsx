'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import WebDevBanner from '@/components/web-dev-banner';
import WebDevServicesLine from '@/components/web-dev-services-line';

const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false });
const GradientSection = dynamic(() => import('@/components/gradient-section'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/newslettersection'), { ssr: false });


export default function WebDevelopmentPage() {
  return (
    <div className="relative w-full min-h-screen">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <WebDevBanner />
      </motion.div>
      <WebDevServicesLine />
      <ReviewsSection />
      <GradientSection />
      <NewsletterSection />
    </div>
  );
}
