'use client';

import GradientSectionAlt from '@/components/gradient-action-section';
import ContactBanner from '../../components/contact-banner';
import ContactForm from '../../components/contact-form';
import NewsletterActionSection from '@/components/newsletter-action-section';

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#000012]">
        <ContactBanner />
        <ContactForm />
        <GradientSectionAlt />
        <NewsletterActionSection />
        
      {/* Add more contact page content here */}
    </div>
  );
}