'use client';

import dynamic from 'next/dynamic';
import DesignBanner from '@/components/design-banner';

const AnimatedLineWithCards = dynamic(() => import('@/components/animateline'), { ssr: false });
const ReviewsSection = dynamic(() => import('@/components/reviews-section'), { ssr: false }); 
const GradientSection = dynamic(() => import('@/components/gradient-section'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/newslettersection'), { ssr: false });

export default function DesignPage() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center">
        <DesignBanner />
        <AnimatedLineWithCards />
        <ReviewsSection />
        <GradientSection />
        <NewsletterSection />

      </div>
    </section>
  );
}
