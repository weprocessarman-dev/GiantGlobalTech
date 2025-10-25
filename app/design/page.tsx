'use client';

import dynamic from 'next/dynamic';
import DesignBanner from '@/components/design-banner';

const AnimatedLineWithCards = dynamic(() => import('@/components/animateline'), { ssr: false });
const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false }); 
const GradientActionSection = dynamic(() => import('@/components/gradient-action-section'), { ssr: false });
const NewsletterActionSection = dynamic(() => import('@/components/newsletter-action-section'), { ssr: false });

export default function DesignPage() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center">
        <DesignBanner />
        <AnimatedLineWithCards />
        <ReviewsSection />
        <GradientActionSection />
        <NewsletterActionSection />
      </div>
    </section>
  );
}
