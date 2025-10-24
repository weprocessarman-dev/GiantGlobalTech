'use client';

import dynamic from 'next/dynamic';
import Banner from '@/components/banner';
import ConnectionLines from '@/components/connection-lines';
import FeatureCards from '@/components/feature-cards';

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
      <div className="relative w-full">
        <Banner />
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