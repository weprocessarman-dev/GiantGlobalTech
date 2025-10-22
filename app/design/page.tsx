'use client';

import { Inter } from 'next/font/google';
import DesignBanner from '@/components/design-banner';
import AnimatedLineWithCards from '@/components/animateline';
import AboutUsReviews from '@/components/about-us-reviews';
import GradientActionSection from '@/components/gradient-action-section';
import NewsletterActionSection from '@/components/newsletter-action-section';
const inter = Inter({ subsets: ['latin'] });

export default function DesignPage() {
  return (
    <section className="w-full min-h-screen">
      {/* Add your design content below */}
      <div className="w-full flex flex-col items-center">
        {/* ...design content goes here... */}
        <DesignBanner />
        <AnimatedLineWithCards />
        <AboutUsReviews />
        <GradientActionSection />
        <NewsletterActionSection />
      </div>
    </section>
  );
}
