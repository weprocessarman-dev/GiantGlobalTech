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
    question: "What makes GGT different from other digital agencies?",
    answer: "We master two things: the inhuman speed of AI and the brutally effective strategy of human experts. This combination is what creates your unfair advantage."
  },
  {
    question: "Why the major focus on an AI Agent? Is the human touch still important?",
    answer: "The human touch is too important to waste on repetitive tasks. Our AI handles the 24/7 grind, freeing up human experts to focus on the high-level strategy that wins."
  },
  {
    question: "You talk about being \"brutally effective.\" What does that mean for me as a client?",
    answer: "It means we are relentlessly focused on your results. The process with us is collaborative and transparent. The effect on your competition is brutal."
  },
  {
    question: "What kind of businesses do you get the best results for?",
    answer: "Our best partners are ambitious leaders who see speed as a weapon and are determined to dominate their market. If that's you, we're the right fit."
  },
  {
    question: "Is the AI Agent difficult to manage once it's set up?",
    answer: "We track the numbers you can take to the bank: more qualified leads, higher conversion rates, and a direct impact on your bottom line. Everything else is just noise."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 810px) and (max-width: 1199px) {
          .faq-container {
            width: 610px !important;
            height: auto !important;
          }
          
          .faq-heading {
            font-size: 36px !important;
          }
          
          .faq-text {
            font-size: 16px !important;
          }
          
          .faq-item {
            min-height: 72px !important;
          }
          
          .faq-question {
            font-size: 20px !important;
            min-height: 72px !important;
          }
          
          .faq-answer {
            font-size: 14px !important;
          }
        }
        
        @media (min-width: 390px) and (max-width: 809px) {
          .faq-container {
            width: 100% !important;
            height: auto !important;
          }
          
          .faq-heading {
            font-size: 24px !important;
          }
          
          .faq-text {
            font-size: 14px !important;
          }
          
          .faq-item {
            width: 350px !important;
            min-height: 50px !important;
          }
          
          .faq-question {
            font-size: 14px !important;
            min-height: 50px !important;
          }
          
          .faq-answer {
            font-size: 10px !important;
          }
        }
      `}</style>
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="faq-container" style={{ width: '800px', height: '860px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
            <h2 
              className={`${inter.className} font-bold text-center faq-heading`}
              style={{
                fontSize: '44px',
                fontWeight: 800,
                marginBottom: '5px',
                lineHeight: '1.1',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Everything You Need To Know
              <br style={{ marginBottom: '5px' }} />
              Before Getting Started
            </h2>
            <p className={`${inter.className} text-white text-center faq-text`} style={{ color: '#FFFFFF', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
              The answers you need to make the right decision, with total confidence.
            </p>
            <div className="space-y-4" style={{ width: '100%', flex: 1, overflow: 'auto' }}>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out faq-item"
                style={{
                  boxSizing: 'border-box',
                  position: 'relative',
                  width: '100%',
                  minHeight: '94px',
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
                  className="w-full px-6 py-6 flex items-center justify-between text-left transition-all duration-200 faq-question"
                  style={{
                    backgroundColor: 'transparent',
                    minHeight: '94px'
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
                      className={`${inter.className} leading-relaxed text-base faq-answer`}
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
      </div>
    </section>
    </>
  );
}