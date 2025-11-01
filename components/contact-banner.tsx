'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ContactBanner() {
  return (
    <section className="w-full contact-banner">
      <div className="banner-container">
        {/* Heading */}
        <h1 className={`${inter.className} banner-heading`}>
          Get In Touch
        </h1>
      
        {/* Description */}
        <p className={`${inter.className} banner-text`}>
          Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod dolor
        </p>

        {/* Contact Info */}
        <div className="contact-info-wrapper">
          <div className="contact-info-container">
            {/* Phone */}
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/phone.png" alt="Phone" className="icon-img" />
              </span>
              <span className={`${inter.className} contact-text`}>
                +1234567890
              </span>
            </div>

            <span className="spacer" />

            {/* Email */}
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/email.png" alt="Email" className="icon-img" />
              </span>
              <span className={`${inter.className} contact-text`}>
                info@ggt.com
              </span>
            </div>

            <span className="spacer" />

            {/* Location */}
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/location.png" alt="Location" className="icon-img" />
              </span>
              <span className={`${inter.className} contact-text`}>
                Building #01, LA, USA
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="divider-line" />
      </div>

      <style jsx>{`
        .contact-banner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 128px 0;
          background: #000012;
          overflow: hidden;
        }

        .banner-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .banner-heading {
          margin-top: 210px;
          font-size: 50px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 24px;
          background: linear-gradient(90deg, #A3A3A3 0%, #FFFFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .banner-text {
          font-size: 18px;
          color: #FFFFFF;
          font-weight: 400;
          line-height: 1.3;
          text-align: center;
          margin-bottom: 48px;
          padding: 0 16px;
        }

        .contact-info-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          margin-top: 20px;
        }

        .contact-info-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .contact-icon {
          width: 27px;
          height: 27px;
          border: 1px solid #fff;
          border-radius: 50%;
          padding: 6px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-img {
          width: 15px;
          height: 15px;
          object-fit: contain;
        }

        .contact-text {
          color: #fff;
          font-weight: 400;
          font-size: 16px;
        }

        .spacer {
          display: inline-block;
          width: 150px;
        }

        .divider-line {
          width: 100%;
          margin: 0 auto;
          border-top: 1px solid #23234A;
          margin-top: 20px;
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .banner-container {
            max-width: 810px;
          }

          .banner-heading {
            font-size: 36px;
          }

          .banner-text {
            font-size: 14px;
          }

          .contact-text {
            font-size: 14px;
          }

          .divider-line {
            width: 90%;
          }
        }

        @media (max-width: 809px) {
          .banner-container {
            max-width: 390px;
          }

          .banner-heading {
            margin-top: 100px;
            font-size: 24px;
          }

          .banner-text {
            font-size: 12px;
          }

          .contact-info-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            justify-items: center;
          }

          .contact-item:nth-child(5) {
            grid-column: 1 / -1;
          }

          .contact-text {
            font-size: 12px;
          }

          .spacer {
            display: none;
          }

          .divider-line {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
}