'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ImgIcon({ src, alt }: { src: string, alt: string }) {
  return <img src={src} alt={alt} style={imageIcon} loading="lazy" />;
}

export default function ServiceSectionTablet() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });

  const pathLength1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const graphicServices = [
    { id: 1, title: "Identity", boldTitle: "Design", desc: "Comprehensive brand identity systems including logos, color palettes, and visual guidelines.", icon: "/ringslogo.png", side: "left" },
    { id: 2, title: "Print", boldTitle: "Design", desc: "Professional print materials including brochures, business cards, and marketing collateral.", icon: "/Print.png", side: "right" },
    { id: 3, title: "Stationary", boldTitle: "Design", desc: "Complete stationary suites including letterheads, envelopes, and business documentation.", icon: "/Stationary.png", side: "left" },
  ];

  const uiuxServices = [
    { id: 4, title: "Web", boldTitle: "Design", desc: "Responsive website designs that provide optimal user experience across all devices.", icon: "/Web.png", side: "left" },
    { id: 5, title: "App", boldTitle: "Design", desc: "Mobile and desktop application interfaces with intuitive navigation and modern aesthetics.", icon: "/Phonelogo.png", side: "right" },
    { id: 6, title: "CRM", boldTitle: "Design", desc: "Custom CRM interface designs that streamline workflows and enhance productivity.", icon: "/CRM.png", side: "left" },
  ];

  return (
    <section ref={ref} style={sectionContainer}>
      <div style={container}>
        {/* First Card - Graphic Design */}
        <div style={cardWrapper}>
          <div className="card-container card-1">
            <span className="card-span"></span>
            <div className="card-content">
              <h3 style={cardHeading}>GRAPHIC DESIGN</h3>
              <p style={cardText}>Creating stunning visual identities that capture your brand's essence</p>
            </div>
          </div>
        </div>

        {/* Vertical Line 1 - From Card 1 to 3rd dot */}
        <svg style={lineContainer} viewBox="0 0 400 1200" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow-tablet">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path d="M 200 0 L 200 1180" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2" />
          <motion.path 
            d="M 200 0 L 200 1180" 
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            filter="url(#glow)"
            pathLength={pathLength1}
          />
        </svg>

        {/* Graphic Design Services */}
        <div style={servicesContainer}>
          {graphicServices.map((service) => (
            <div key={service.id} style={{ ...serviceRow, flexDirection: service.side === 'left' ? 'row' : 'row-reverse' }}>
              <div style={iconWrapper} className={`service-logo-${service.id}`}>
                <ImgIcon src={service.icon} alt={service.title} />
              </div>
              <div style={dotMarker}></div>
              <div style={{ ...serviceContent, textAlign: service.side === 'left' ? 'left' : 'right', alignItems: service.side === 'left' ? 'flex-start' : 'flex-end' }}>
                <h3 style={serviceHeading}>{service.title} <span style={serviceHeadingBold}>{service.boldTitle}</span></h3>
                <p style={serviceParagraph}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Card - UI/UX Design */}
        <div style={{ ...cardWrapper, marginTop: '100px' }}>
          <div className="card-container card-2">
            <span className="card-span"></span>
            <div className="card-content">
              <h3 style={cardHeading}>UI/UX DESIGN</h3>
              <p style={cardText}>Designing intuitive digital experiences that engage users</p>
            </div>
          </div>
        </div>

        {/* Vertical Line 2 - From Card 2 to its 3rd dot */}
        <svg style={{ ...lineContainer, top: '1450px', height: '1200px' }} viewBox="0 0 400 1200" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow-tablet-2">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path d="M 200 0 L 200 1190" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2" />
          <motion.path 
            d="M 200 0 L 200 1190" 
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            filter="url(#glow)"
            pathLength={pathLength2}
          />
        </svg>

        {/* UI/UX Services */}
        <div style={servicesContainer}>
          {uiuxServices.map((service) => (
            <div key={service.id} style={{ ...serviceRow, flexDirection: service.side === 'left' ? 'row' : 'row-reverse' }}>
              <div style={iconWrapper} className={`service-logo-${service.id}`}>
                <ImgIcon src={service.icon} alt={service.title} />
              </div>
              <div style={dotMarker}></div>
              <div style={{ ...serviceContent, textAlign: service.side === 'left' ? 'left' : 'right', alignItems: service.side === 'left' ? 'flex-start' : 'flex-end' }}>
                <h3 style={serviceHeading}>{service.title} <span style={serviceHeadingBold}>{service.boldTitle}</span></h3>
                <p style={serviceParagraph}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
        
        @keyframes animate {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translateY(-10px); }
        }
        
        .service-logo-1 { animation: float1 2.8s ease-in-out infinite; }
        .service-logo-2 { animation: float2 3.2s ease-in-out infinite; }
        .service-logo-3 { animation: float3 2.5s ease-in-out infinite; }
        .service-logo-4 { animation: float1 2.8s ease-in-out infinite; }
        .service-logo-5 { animation: float2 3.2s ease-in-out infinite; }
        .service-logo-6 { animation: float3 2.5s ease-in-out infinite; }
        
        .card-container {
          position: relative;
          width: 410px;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
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
          background: linear-gradient(315deg, #3B82F6, #06B6D4);
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
          background: linear-gradient(315deg, #3B82F6, #06B6D4);
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
    </section>
  );
}

const sectionContainer: React.CSSProperties = {
  background: "transparent",
  minHeight: "2800px",
  padding: "80px 20px",
  marginTop: "100px",
  fontFamily: "'Inter', 'Poppins', sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "810px",
  margin: "0 auto",
  position: "relative",
  minHeight: "2600px",
};

const cardWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "60px",
  position: "relative",
  zIndex: 2,
};

const cardHeading: React.CSSProperties = {
  fontSize: '30px',
  fontWeight: 600,
  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50%, rgba(255,255,255,0.2) 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  marginBottom: '16px',
  textAlign: 'center',
};

const cardText: React.CSSProperties = {
  color: '#FFFFFF',
  fontSize: '16px',
  textAlign: 'center',
  lineHeight: '1.5',
};

const lineContainer: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  width: "400px",
  height: "1200px",
  pointerEvents: "none",
  zIndex: 1,
};

const servicesContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  marginTop: "60px",
  position: "relative",
  zIndex: 2,
};

const serviceRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0",
  position: "relative",
};

const iconWrapper: React.CSSProperties = {
  width: "255px",
  height: "255px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  flexShrink: 0,
  marginRight: "30px",
};

const dotMarker: React.CSSProperties = {
  width: "12px",
  height: "12px",
  background: "#3879E7",
  borderRadius: "50%",
  boxShadow: "0 0 20px #3879E7",
  flexShrink: 0,
  zIndex: 3,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
};

const serviceContent: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "275px",
  paddingLeft: "60px",
  marginLeft: "60px",
};

const serviceHeading: React.CSSProperties = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '50px',
  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50.49%, rgba(255,255,255,0.2) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  margin: 0,
  marginRight: '100px',
  marginBottom: '8px',
  whiteSpace: 'nowrap',
};

const serviceHeadingBold: React.CSSProperties = {
  fontWeight: 700,
};

const serviceParagraph: React.CSSProperties = {
  fontFamily: 'Inter',
  width: '100%',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '22px',
  color: '#B7B7B7',
  marginRight: '100px',
};

const imageIcon: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};
