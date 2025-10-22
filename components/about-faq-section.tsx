'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const faqData: FAQItem[] = [
  {
    question: "How long does it take to onboard?",
    answer: "Lorem ipsum dolor sit amet, consectetur elit, sed tempor dolor sit amet, consectetur elit, ipsum"
  },
  {
    question: "How long does it take to onboard?",
    answer: "Lorem ipsum dolor sit amet, consectetur elit, sed tempor dolor sit amet, consectetur elit, ipsum"
  },
  {
    question: "How long does it take to onboard?",
    answer: "Lorem ipsum dolor sit amet, consectetur elit, sed tempor dolor sit amet, consectetur elit, ipsum"
  },
  {
    question: "How long does it take to onboard?",
    answer: "Lorem ipsum dolor sit amet, consectetur elit, sed tempor dolor sit amet, consectetur elit, ipsum"
  },
  {
    question: "How long does it take to onboard?",
    answer: "Lorem ipsum dolor sit amet, consectetur elit, sed tempor dolor sit amet, consectetur elit, ipsum"
  }
];

export default function AboutFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full faq-section" style={{ marginTop: '80px' }}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`${inter.className} font-bold text-center mb-6`}
            style={{
              fontSize: '50px',
              fontWeight: 800,
              marginTop: '80px',
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Everything You Need To Know<br />Before Getting Started
          </h2>
          <p className={`${inter.className} text-white text-center max-w-2xl mb-16`} style={{ color: '#FFFFFF', fontSize: '18px', lineHeight: '1.6' }}>
            Find answers to common questions about our AI solutions and services.<br />Get the information you need to make informed decisions.
          </p>
        </div>
        {/* FAQ Items Container */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="w-full mx-auto space-y-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  boxSizing: 'border-box',
                  position: 'relative',
                  width: '820px',
                  minHeight: '95.81px',
                  background: 'rgba(135, 135, 135, 0.2)',
                  borderRadius: '20px',
                  margin: '0 auto',
                  marginTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left transition-all duration-200"
                  style={{
                    backgroundColor: 'transparent',
                    minHeight: '95.81px'
                  }}
                >
                  <span 
                    className={`${inter.className} font-medium text-lg pr-4 flex-1`}
                    style={{
                      color: '#FFFFFF',
                      fontWeight: 500,
                      lineHeight: '1.4',
                      marginLeft: '50px',
                    }}
                  >
                    {faq.question}
                  </span>
                  {/* Plus/Minus Icon */}
                  <div
                    className="w-6 h-6 flex items-center justify-center transition-transform duration-300 ease-in-out flex-shrink-0"
                    style={{
                      marginRight: '30px'
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300 ease-in-out"
                    >
                      <path
                        d="M1 8H15"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="transition-all duration-300 ease-in-out"
                      />
                      <path
                        d="M8 1V15"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="transition-all duration-300 ease-in-out"
                        style={{
                          opacity: openIndex === index ? 0 : 1,
                          transform: openIndex === index ? 'scale(0)' : 'scale(1)',
                          transformOrigin: 'center'
                        }}
                      />
                    </svg>
                  </div>
                </button>
                {/* Answer Content */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '200px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                    transform: openIndex === index ? 'translateY(0)' : 'translateY(-10px)',
                    paddingTop: openIndex === index ? '10px' : '0px'
                  }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p 
                      className={`${inter.className} leading-relaxed text-base`}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        marginLeft: '50px',
                        paddingBottom: '10px',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          .faq-section h2 {
            font-size: 40px !important;
          }
          
          .faq-section p {
            font-size: 16px !important;
          }
          
          .faq-section > div > div:last-child > div > div {
            width: 95% !important;
          }
        }
        
        @media (max-width: 768px) {
          .faq-section {
            margin-top: 200px !important;
          }
          
          .faq-section h2 {
            font-size: 32px !important;
            margin-top: 80px !important;
          }
          
          .faq-section p {
            font-size: 14px !important;
          }
          
          .faq-section > div > div:last-child > div > div {
            width: 100% !important;
            padding: 20px !important;
            min-height: auto !important;
          }
          
          .faq-section button {
            padding: 20px 15px !important;
            min-height: auto !important;
          }
          
          .faq-section button span {
            margin-left: 0 !important;
            font-size: 16px !important;
          }
          
          .faq-section button > div {
            margin-right: 10px !important;
          }
          
          .faq-section .px-6 {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          .faq-section .px-6 p {
            margin-left: 0 !important;
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .faq-section h2 {
            font-size: 24px !important;
            line-height: 1.3 !important;
          }
          
          .faq-section p {
            font-size: 12px !important;
          }
          
          .faq-section button {
            padding: 15px 10px !important;
          }
          
          .faq-section button span {
            font-size: 14px !important;
          }
          
          .faq-section .px-6 p {
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
