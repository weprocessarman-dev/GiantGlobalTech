'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ServiceSectionTablet from './animateline-tablet';
import ServiceSectionMobile from './animateline-mobile';

// Component to render service icon image
function ImgIcon({ src, alt }: { src: string, alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={imageIcon}
      loading="lazy"
    />
  );
}

function ServiceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Card data for header cards
  const headerCards = [
    {
      id: 1,
      title: "GRAPHIC DESIGN",
      description: "Creating stunning visual identities that capture your brand's essence."
    },
    {
      id: 2,
      title: "UI/UX DESIGN",
      description: "Designing intuitive digital experiences that engage users and drive conversions."
    }
  ];
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsTablet(window.innerWidth >= 810 && window.innerWidth <= 1199);
      setIsMobile(window.innerWidth >= 390 && window.innerWidth <= 809);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  if (isMobile) {
    return <ServiceSectionMobile />;
  }

  if (isTablet) {
    return <ServiceSectionTablet />;
  }

  return (
    <section ref={ref} style={sectionContainer}>
      <div style={{ ...container, position: 'relative' }}>
        
        {/* Animated Lines */}
        <svg className="animated-lines-desktop" style={linesSvgContainer} viewBox="0 0 1400 1600" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>                        
            </filter>
          </defs>
          
          {/* Static Structure Lines - Always Visible */}
          <path
            d="M 690 0 L 690 60 L 245 60 L 245 1660"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            opacity="0.2"
          />
          <path
            d="M 710 0 L 710 60 L 1156 60 L 1156 1660"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            opacity="0.2"
          />
          
          {/* Animated Glow Lines - Run on top of structure */}
          <motion.path
            d="M 690 0 L 690 60 L 245 60 L 245 1660"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            filter="url(#glow)"
            pathLength={pathLength}
          />
          <motion.path
            d="M 710 0 L 710 60 L 1156 60 L 1156 1660"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            filter="url(#glow)"
            pathLength={pathLength}
          />
        </svg>

        {/* Top Header Cards - FeatureCards style */}
        <style jsx>{`
          @media (max-width: 768px) {
            .card-container {
              width: 280px !important;
              height: 220px !important;
              margin: 30px 15px !important;
            }
            .card-content h3 {
              font-size: 32px !important;
            }
            .card-content p {
              font-size: 14px !important;
            }
          }
          
          @keyframes animate {
            0%, 100% { transform: translateY(10px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes float1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translateY(-5px) rotate(-1deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translateY(0px) rotate(1deg); }
            50% { transform: translateY(-18px) rotate(-2deg); }
          }
          
          @keyframes float4 {
            0%, 100% { transform: translateY(-3px) rotate(-2deg); }
            50% { transform: translateY(-15px) rotate(0deg); }
          }
          
          @keyframes float5 {
            0%, 100% { transform: translateY(0px) rotate(2deg); }
            50% { transform: translateY(-22px) rotate(-1deg); }
          }
          
          @keyframes float6 {
            0%, 100% { transform: translateY(-2px) rotate(-1deg); }
            50% { transform: translateY(-16px) rotate(3deg); }
          }
          
          .service-logo-1 { animation: float1 2.8s ease-in-out infinite; }
          .service-logo-2 { animation: float2 3.2s ease-in-out infinite; }
          .service-logo-3 { animation: float3 2.5s ease-in-out infinite; }
          .service-logo-4 { animation: float4 3.5s ease-in-out infinite; }
          .service-logo-5 { animation: float5 2.9s ease-in-out infinite; }
          .service-logo-6 { animation: float6 3.1s ease-in-out infinite; }
          .card-container {
            position: relative;
            width: 373.36px;
            height: 290.08px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px 30px;
            transition: 0.5s;
            cursor: pointer;
          }
          .card-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50px;
            width: 50%;
            height: 100%;
            background: #fff;
            border-radius: 20px;
            transform: skewX(15deg);
            transition: 0.5s;
          }
          .card-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50px;
            width: 50%;
            height: 100%;
            background: #fff;
            border-radius: 20px;
            transform: skewX(15deg);
            transition: 0.5s;
            filter: blur(30px);
          }
          .card-container:hover::before,
          .card-container:hover::after {
            transform: skewX(0deg);
            left: 20px;
            width: calc(100% - 40px);
          }
          .card-1::before,
          .card-1::after {
            background: linear-gradient(315deg, #3B82F6, #06B6D4);
          }
          .card-2::before,
          .card-2::after {
            background: linear-gradient(315deg, #3B82F6, #06B6D4);
          }
          .card-span {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 5;
            pointer-events: none;
          }
          .card-span::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            opacity: 0;
            transition: 0.1s;
            animation: animate 2s ease-in-out infinite;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            display: none;
          }
          .card-container:hover .card-span::before {
            display: none;
          }
          .card-span::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            opacity: 0;
            transition: 0.5s;
            animation: animate 2s ease-in-out infinite;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            animation-delay: -1s;
          }
          .card-container:hover .card-span::after {
            bottom: -50px;
            right: 50px;
            width: 100px;
            height: 100px;
            opacity: 1;
          }
          .card-content {
            position: relative;
            left: 0;
            padding: 20px 40px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            z-index: 1;
            transition: 0.5s;
            color: #fff;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .card-container:hover .card-content {
            left: -25px;
            padding: 40px 30px;
          }
        `}</style>
        <div className="flex justify-center items-center" style={{ gap: '120px', marginBottom: '100px', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
          {headerCards.map(card => (
            <div
              key={card.id}
              className={`card-container card-${card.id}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span className="card-span"></span>
              <div className="card-content">
                <h3 style={{
                  fontSize: '30px',
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50%, rgba(255,255,255,0.2) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>{card.title}</h3>
                <p style={{
                  color: '#FFFFFF',
                  fontSize: '16px',
                  textAlign: 'center',
                  lineHeight: '1.5',
                  padding: '12px 16px'
                }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid - align to lines */}
        <div className="service-section-main" style={{ ...mainContainer, position: 'relative', zIndex: 2 }}>
          {/* Left Column - Graphic Design */}
          <div style={{ ...leftColumn, alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{ ...serviceItems, alignItems: 'flex-end' }}>
              {/* Identity Design */}
              <div style={{ ...serviceRow, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-end' }}>
                <div style={iconWrapper} className="service-logo-1"><ImgIcon src="/ringslogo.png" alt="Identity Design" /></div>
                <div style={{ marginLeft: '30px' }}>
                  <div style={dotMarker}></div>
                </div>
                <div style={{ ...serviceContent, ...serviceContentAlignLeft }}>
                  <h3 style={serviceHeading}>Identity <span style={serviceHeadingBold}>Design</span></h3>
                  <p style={serviceParagraph}>Comprehensive brand identity systems including logos, color palettes, and visual guidelines.</p>
                </div>
              </div>
              {/* Print Design */}
              <div style={{ ...serviceRow, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'flex-end' }}>
                  <div style={iconWrapper} className="service-logo-2"><ImgIcon src="/Print.png" alt="Print Design" /></div>
                  <div style={dotMarker}></div>
                </div>
                <div style={{ ...serviceContent, ...serviceContentAlignLeft }}>
                  <h3 style={serviceHeading}>Print <span style={serviceHeadingBold}>Design</span></h3>
                  <p style={serviceParagraph}>Professional print materials including brochures, business cards, and marketing collateral.</p>
                </div>
              </div>
              {/* Stationary Design */}
              <div style={{ ...serviceRow, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'flex-end' }}>
                  <div style={iconWrapper} className="service-logo-3"><ImgIcon src="/Stationary.png" alt="Stationary Design" /></div>
                  <div style={dotMarker}></div>
                </div>
                <div style={{ ...serviceContent, ...serviceContentAlignLeft }}>
                  <h3 style={serviceHeading}>Stationary <span style={serviceHeadingBold}>Design</span></h3>
                  <p style={serviceParagraph}>Complete stationary suites including letterheads, envelopes, and business documentation.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - UI/UX Design */}
          <div style={{ ...rightColumn, alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={{ ...serviceItems, alignItems: 'flex-start' }}>
              {/* Web Design */}
              <div style={{ ...serviceRowRight, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-start' }}>
                <div style={{ ...serviceContent, ...serviceContentAlignRight }}>
                  <h3 style={serviceHeading}>Web <span style={serviceHeadingBold}>Design</span></h3>
                  <p style={serviceParagraph}>Responsive website designs that provide optimal user experience across all devices.</p>
                </div>
                <div style={dotMarker}></div>
                <div style={iconWrapper} className="service-logo-4"><ImgIcon src="/Web.png" alt="Web Design" /></div>
              </div>
              {/* App Design */}
              <div style={{ ...serviceRowRight, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-start' }}>
                <div style={{ ...serviceContent, ...serviceContentAlignRight }}>
                  <h3 style={serviceHeading}>App <span style={serviceHeadingBold}>Design</span></h3>
                  <p style={serviceParagraph}>Mobile and desktop application interfaces with intuitive navigation and modern aesthetics.</p>
                </div>
                <div style={dotMarker}></div>
                <div style={iconWrapper} className="service-logo-5"><ImgIcon src="/Phonelogo.png" alt="App Design" /></div>
              </div>
              {/* CRM Design */}
              <div style={{ ...serviceRowRight, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-start' }}>
                <div style={{ ...serviceContent, ...serviceContentAlignRight }}>
                  <h3 style={serviceHeading}>CRM <span style={serviceHeadingBold}>Design</span></h3>
                  <p style={serviceParagraph}>Custom CRM interface designs that streamline workflows and enhance productivity.</p>
                </div>
                <div style={dotMarker}></div>
                <div style={iconWrapper} className="service-logo-6"><ImgIcon src="/CRM.png" alt="CRM Design" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;

/**
 * ==============   Styles   ================
 */

const sectionContainer: React.CSSProperties = {
  background: "transparent",
  minHeight: "100vh",
  padding: "80px 20px",
  marginTop: "100px",
  fontFamily: "'Inter', 'Poppins', sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  position: "relative",
  padding: "0 20px",
};

const linesSvgContainer: React.CSSProperties = {
  position: "absolute",
  top: "-100px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "1400px",
  height: "100%",
  pointerEvents: "none",
  zIndex: 1,
  overflow: "visible",
};

const mainContainer: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "100px",
  position: "relative",
};

const leftColumn: React.CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const rightColumn: React.CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};

const serviceItems: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "100px",
  padding: "50px 0",
  position: "relative",
  zIndex: "2",
};

const serviceRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-end",
};

const serviceRowRight: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-start",
};

const serviceContent: React.CSSProperties = {
  padding: "25px",
  background: "transparent",
  textAlign: "left",
};

const serviceHeading: React.CSSProperties = {
  position: 'relative',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '50px',
  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50.49%, rgba(255,255,255,0.2) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  margin: 0,
  marginBottom: '8px',
  padding: 0,
  width: 'fit-content',
  whiteSpace: 'nowrap',
};

const serviceHeadingBold: React.CSSProperties = {
  fontWeight: 700,
  color: 'inherit',
  WebkitTextFillColor: 'inherit',
};

const serviceParagraph: React.CSSProperties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '22px',
  color: '#B7B7B7',
  margin: 0,
  width: '272.73px',
  maxWidth: '100%',
  textAlign: 'inherit',
};

const serviceContentAlignLeft: React.CSSProperties = {
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minWidth: '275px',
  marginLeft: '40px',
};

const serviceContentAlignRight: React.CSSProperties = {
  textAlign: 'right',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  minWidth: '275px',
  marginRight: '40px',
};

const imageIcon: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  boxShadow: "none",
  background: "none",
  objectFit: "contain",
};

const dotMarker: React.CSSProperties = {
  width: "12px",
  height: "12px",
  background: "#3879E7",
  borderRadius: "50%",
  boxShadow: "0 0 20px #3879E7",
  flexShrink: "0",
  zIndex: "3",
};

const iconWrapper: React.CSSProperties = {
  width: "205px",
  height: "205px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  background: "none",
  boxSizing: "border-box",
  overflow: "hidden",
};

// Add media query styles
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .animated-lines-desktop {
        display: none !important;
      }
      .service-section-main {
        grid-template-columns: 1fr !important;
        gap: 50px !important;
        padding: 0 10px !important;
      }
      .service-items {
        gap: 50px !important;
        align-items: center !important;
        width: 100% !important;
      }
      .service-items > div {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
        max-width: 100% !important;
        gap: 20px !important;
      }
      .service-items > div > div {
        width: 100% !important;
        max-width: 100% !important;
        justify-content: center !important;
        text-align: center !important;
      }
      .service-items > div > div > div {
        margin: 0 !important;
        text-align: center !important;
        align-items: center !important;
        width: 100% !important;
        max-width: 90% !important;
        padding: 15px !important;
      }
      .service-items h3,
      .service-items p {
        text-align: center !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      .service-items img {
        width: 120px !important;
        height: 120px !important;
      }
    }
  `;
  document.head.appendChild(style);
}