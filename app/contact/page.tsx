'use client';

import dynamic from 'next/dynamic';
import ContactBanner from '../../components/contact-banner';
import ContactForm from '../../components/contact-form';
const GradientSection = dynamic(() => import('@/components/gradient-section'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/newslettersection'), { ssr: false });

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#000012]">
        <ContactBanner />
        <ContactForm />
        <GradientSection />
        <NewsletterSection />
        
      {/* Add more contact page content here */}
    </div>
  );
}