'use client';

import Banner from '@/components/banner';
import Heading from '@/components/heading';
import ConnectionLines from '@/components/connection-lines';
import FeatureCards from '@/components/feature-cards';
import WavesSection from '@/components/waves-section';
import AboutGGT from '@/components/aboutggt';
import WaveDiagram from '@/components/wave-diagram';
import FAQSection from '@/components/faq-section';
import ReviewsSection from '@/components/reviews-section';
import GradientSection from '@/components/gradient-section';
import StartMovingFast from '@/components/start-moving-fast';
import NewsletterSection from '@/components/newslettersection';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="relative w-full h-screen">
        <Banner />
        <Heading />
      </div>
      <ConnectionLines />
      <FeatureCards />
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