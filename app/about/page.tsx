'use client';

import AboutBanner from '@/components/about-banner';
import AboutFAQSection from '@/components/about-faq-section';
import AboutUsReviews from '@/components/about-us-reviews';
import MissionVisionSection from '@/components/mission-vision-section';
import StartNowSection from '@/components/start-now-section';
import GradientActionSection from '@/components/gradient-action-section';
import NewsletterActionSection from '@/components/newsletter-action-section';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen">
        <AboutBanner />
        <MissionVisionSection />
        <StartNowSection />
        <AboutFAQSection />
        <AboutUsReviews />
        <GradientActionSection />
        <NewsletterActionSection />
    </div>
  );
}