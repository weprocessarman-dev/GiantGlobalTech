'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function StartMovingFast() {
  return (
    <>
      <style jsx>{`
        * {
          font-family: 'Inter', sans-serif;
        }

        .pricing-container {
          position: relative;
          overflow: visible;
          margin: 0;
        }

        .pricing-card {
          margin-top: 20px;
          width: 305px;
          height: 460px;
          border-radius: 24px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .pricing-card.standard {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pricing-card.featured {
          background: linear-gradient(145deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
        }

        .pricing-card.featured:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .plan-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-family: 'Inter', sans-serif;
        }

        .price {
          font-size: 36px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
          font-family: 'Inter', sans-serif;
        }

        .price-period {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
        }

        .plan-description {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.3;
          margin-bottom: 16px;
          font-family: 'Inter', sans-serif;
        }

        .start-button {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 10px;
        }

        .start-button.standard {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .start-button.featured {
          background: white;
          color: #4f46e5;
        }

        .start-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Inter', sans-serif;
        }

        .checkmark {
          width: 30px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .checkmark::after {
          content: '✓';
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
        }

        .feature-title {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 10px;
          font-family: 'Inter', sans-serif;
        }

        /* Small Card Hover Effect */
        .small-card {
          position: absolute;
          top: 20%;
          right: -50px;
          width: 100px;
          height: 100px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 30;
          pointer-events: none;
          transform: translateY(-50%) scale(0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pricing-container:hover .small-card {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .card-logo {
          width: 70px;
          height: 70px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .sub-text {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          margin-bottom: 8px;
          font-weight: 400;
          font-family: 'Inter', sans-serif;
        }
        
        @media (max-width: 768px) {
          .pricing-container {
            margin: 0 20px;
          }
          
          .pricing-card {
            width: 100%;
            max-width: 350px;
          }
          
          .small-card {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .pricing-card {
            padding: 30px 24px;
          }
          
          .plan-title {
            font-size: 20px;
          }
          
          .price {
            font-size: 40px;
          }
          
          .plan-description {
            font-size: 14px;
          }
        }
      `}</style>
      
      <section className="w-full py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-center">
            <div style={{ width: '1000px', height: '656px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0' }}>
            <h2 
              className={`${inter.className} font-bold text-center`}
              style={{
                fontSize: '44px',
                fontWeight: 600,
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 50.4916%, rgba(255, 255, 255, 0.2) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Plans Made For Businesses
            </h2>

            <p className={`${inter.className} text-white text-center max-w-2xl`} style={{ color: '#FFFFFF', fontSize: '16px', lineHeight: '1.5', marginBottom: '45px' }}>
              Transform your business with cutting-edge AI solutions that deliver results. Experience the<br />
               power of intelligent automation and data-driven insights.
            </p>

            {/* Pricing Cards */}
            <div className="flex justify-between" style={{ width: '100%' }}>
              {/* Left Card - Standard with Star */}
              <div className="pricing-container">
                <div className="pricing-card standard">
                  <div className="plan-title">Basic</div>
                  <div className="price">$19</div>
                  <div className="price-period">/month</div>
                  <div className="plan-description">
                    It is a long established fact that a reader
                  </div>
                  <button className="start-button standard">Start Now</button>
                  <div className="sub-text">long established</div>
                  <div className="feature-title">long established</div>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                  </ul>
                </div>
                
                {/* Small Card with Star Logo */}
                <div className="small-card">
                  <Image
                    src="/starvector.png"
                    alt="Star icon"
                    width={50}
                    height={50}
                    className="card-logo"
                  />
                </div>
              </div>

              {/* Middle Card - Featured with Diamond */}
              <div className="pricing-container">
                <div className="pricing-card featured">
                  <div className="plan-title">Basic</div>
                  <div className="price">$19</div>
                  <div className="price-period">/month</div>
                  <div className="plan-description">
                    It is a long established fact that a reader
                  </div>
                  <button className="start-button featured">Start Now</button>
                  <div className="sub-text">long established</div>
                  <div className="feature-title">It is a long established fact</div>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                  </ul>
                </div>
                
                {/* Small Card with Diamond Logo */}
                <div className="small-card">
                  <Image
                    src="/diamondvector.png"
                    alt="Diamond icon"
                    width={50}
                    height={50}
                    className="card-logo"
                  />
                </div>
              </div>

              {/* Right Card - Standard with Crown */}
              <div className="pricing-container">
                <div className="pricing-card standard">
                  <div className="plan-title">Basic</div>
                  <div className="price">$19</div>
                  <div className="price-period">/month</div>
                  <div className="plan-description">
                    It is a long established fact that a reader
                  </div>
                  <button className="start-button standard">Start Now</button>
                  <div className="sub-text">long established</div>
                  <div className="feature-title">long established</div>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                    <li className="feature-item">
                      <div className="checkmark"></div>
                      long established
                    </li>
                  </ul>
                </div>
                
                {/* Small Card with Crown Logo */}
                <div className="small-card">
                  <Image
                    src="/crownvector.png"
                    alt="Crown icon"
                    width={50}
                    height={50}
                    className="card-logo"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}