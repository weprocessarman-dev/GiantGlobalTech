'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ImgIcon({ src, alt }: { src: string, alt: string }) {
  return <img src={src} alt={alt} style={imageIcon} loading="lazy" />;
}

export default function WebDevServicesLineMobile() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });

  const pathLength1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const pathLength3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const pathLength4 = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  const services1 = [
    { id: 1, title: "Front-End", boldTitle: "Development", desc: "Modern React applications with hooks and state management.", icon: "/web1.png", side: "left" },
    { id: 2, title: "Back-End", boldTitle: "Development", desc: "Progressive Vue.js applications with component-based architecture.", icon: "/web2.png", side: "right" },
    { id: 3, title: "Full-Stack", boldTitle: "Development", desc: "Enterprise Angular applications with TypeScript.", icon: "/web3.png", side: "left" },
    { id: 4, title: "E-Commerce", boldTitle: "Development", desc: "Server-side rendered React applications with Next.js.", icon: "/web4.png", side: "right" },
    { id: 5, title: "CMS", boldTitle: "Development", desc: "Semantic HTML5 and modern CSS3 with animations.", icon: "/web5.png", side: "left" },
    { id: 6, title: "AI & API", boldTitle: "Integration", desc: "Vanilla JavaScript and ES6+ features implementation.", icon: "/web6.png", side: "right" },
    { id: 7, title: "No-Code", boldTitle: "Development", desc: "Type-safe JavaScript development with TypeScript.", icon: "/web7.png", side: "left" },
  ];

  const services2 = [
    { id: 8, title: "iOS App", boldTitle: "Development", desc: "Scalable server-side applications with Node.js runtime.", icon: "/web8.png", side: "left" },
    { id: 9, title: "Android App", boldTitle: "Development", desc: "Backend development with Django and Flask frameworks.", icon: "/web9.png", side: "right" },
    { id: 10, title: "Web App", boldTitle: "Development", desc: "Dynamic web applications with PHP and Laravel.", icon: "/web10.png", side: "left" },
    { id: 11, title: "AI-Powered App", boldTitle: "Development", desc: "SQL and NoSQL database architecture and optimization.", icon: "/web11.png", side: "right" },
    { id: 12, title: "E-Commerce App", boldTitle: "Development", desc: "RESTful and GraphQL API design and implementation.", icon: "/web12.png", side: "left" },
    { id: 13, title: "Travel App", boldTitle: "Development", desc: "AWS, Azure, and Google Cloud platform integration.", icon: "/web13.png", side: "right" },
    { id: 14, title: "Messaging App", boldTitle: "Development", desc: "CI/CD pipelines and automated deployment workflows.", icon: "/web14.png", side: "left" },
  ];

  const services3 = [
    { id: 15, title: "SaaS", boldTitle: "Development", desc: "Secure payment processing with Stripe and PayPal.", icon: "/web15.png", side: "left" },
    { id: 16, title: "CRM & ERP", boldTitle: "Development", desc: "Advanced cart functionality with real-time updates.", icon: "/web16.png", side: "right" },
  ];

  const services4 = [
    { id: 17, title: "API Management", boldTitle: "& Integration", desc: "Custom WordPress themes and plugin development.", icon: "/web17.png", side: "left" },
    { id: 18, title: "Performance", boldTitle: "Optimization", desc: "Modern headless CMS integration with Contentful and Strapi.", icon: "/web18.png", side: "right" },
  ];

  return (
    <section ref={ref} style={sectionContainer}>
      <div style={container}>
        {/* Card 1 */}
        <div style={cardWrapper}>
          <div className="card-container card-1">
            <span className="card-span"></span>
            <div className="card-content">
              <h3 style={cardHeading}>WEBSITE DEVELOPMENT</h3>
              <p style={cardText}>Building responsive and interactive user interfaces with modern frameworks.</p>
            </div>
          </div>
        </div>

        {/* Line 1 */}
        <svg style={{ ...lineContainer, top: '80px', height: '1800px' }} viewBox="0 0 400 1415" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow-mobile">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 200 0 L 200 1415" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2" />
          <motion.path d="M 200 0 L 200 1415" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" filter="url(#glow)" pathLength={pathLength1} />
        </svg>

        {/* Services 1 */}
        <div style={servicesContainer}>
          {services1.map((service) => (
            <div key={service.id} style={{ ...serviceRow, flexDirection: service.side === 'left' ? 'row' : 'row-reverse' }}>
              <div style={iconWrapper} className={`service-logo-${service.id}`}>
                <ImgIcon src={service.icon} alt={service.title} />
              </div>
              <div style={dotMarker}></div>
              <div style={{ ...serviceContent, textAlign: service.side === 'left' ? 'left' : 'right', alignItems: service.side === 'left' ? 'flex-start' : 'flex-end' }}>
                <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.boldTitle}</span></h3>
                <p style={serviceParagraph}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card 2 */}
        <div style={{ ...cardWrapper, marginTop: '80px' }}>
          <div className="card-container card-2">
            <span className="card-span"></span>
            <div className="card-content">
              <h3 style={cardHeading}>APP DEVELOPMENT</h3>
              <p style={cardText}>Creating robust server-side applications and APIs for seamless functionality.</p>
            </div>
          </div>
        </div>

        {/* Line 2 */}
        <svg style={{ ...lineContainer, top: '1750px', height: '1800px' }} viewBox="0 0 400 1400" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow-mobile-2">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 200 0 L 200 1400" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2" />
          <motion.path d="M 200 0 L 200 1400" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" filter="url(#glow-mobile-2)" pathLength={pathLength2} />
        </svg>

        {/* Services 2 */}
        <div style={servicesContainer}>
          {services2.map((service) => (
            <div key={service.id} style={{ ...serviceRow, flexDirection: service.side === 'left' ? 'row' : 'row-reverse' }}>
              <div style={iconWrapper} className={`service-logo-${service.id}`}>
                <ImgIcon src={service.icon} alt={service.title} />
              </div>
              <div style={dotMarker}></div>
              <div style={{ ...serviceContent, textAlign: service.side === 'left' ? 'left' : 'right', alignItems: service.side === 'left' ? 'flex-start' : 'flex-end' }}>
                <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.boldTitle}</span></h3>
                <p style={serviceParagraph}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card 3 */}
        <div style={{ ...cardWrapper, marginTop: '80px' }}>
          <div className="card-container card-3">
            <span className="card-span"></span>
            <div className="card-content">
              <h3 style={cardHeading}>SOFTWARE DEVELOPMENT</h3>
              <p style={cardText}>Complete online store development with secure payment integration.</p>
            </div>
          </div>
        </div>

        {/* Line 3 */}
        <svg style={{ ...lineContainer, top: '3350px', height: '600px' }} viewBox="0 0 400 480" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow-mobile-3">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 200 0 L 200 480" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2" />
          <motion.path d="M 200 0 L 200 480" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" filter="url(#glow-mobile-3)" pathLength={pathLength3} />
        </svg>

        {/* Services 3 */}
        <div style={servicesContainer}>
          {services3.map((service) => (
            <div key={service.id} style={{ ...serviceRow, flexDirection: service.side === 'left' ? 'row' : 'row-reverse' }}>
              <div style={iconWrapper} className={`service-logo-${service.id}`}>
                <ImgIcon src={service.icon} alt={service.title} />
              </div>
              <div style={dotMarker}></div>
              <div style={{ ...serviceContent, textAlign: service.side === 'left' ? 'left' : 'right', alignItems: service.side === 'left' ? 'flex-start' : 'flex-end' }}>
                <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.boldTitle}</span></h3>
                <p style={serviceParagraph}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card 4 */}
        <div style={{ ...cardWrapper, marginTop: '80px' }}>
          <div className="card-container card-4">
            <span className="card-span"></span>
            <div className="card-content">
              <h3 style={cardHeading}>INFRASTRUCTURE SERVICES</h3>
              <p style={cardText}>Seamless content management system setup and customization.</p>
            </div>
          </div>
        </div>

        {/* Line 4 */}
        <svg style={{ ...lineContainer, top: '4040px', height: '600px' }} viewBox="0 0 400 475" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow-mobile-4">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 200 0 L 200 475" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2" />
          <motion.path d="M 200 0 L 200 475" stroke="#00A8FF" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter" filter="url(#glow-mobile-4)" pathLength={pathLength4} />
        </svg>

        {/* Services 4 */}
        <div style={servicesContainer}>
          {services4.map((service) => (
            <div key={service.id} style={{ ...serviceRow, flexDirection: service.side === 'left' ? 'row' : 'row-reverse' }}>
              <div style={iconWrapper} className={`service-logo-${service.id}`}>
                <ImgIcon src={service.icon} alt={service.title} />
              </div>
              <div style={dotMarker}></div>
              <div style={{ ...serviceContent, textAlign: service.side === 'left' ? 'left' : 'right', alignItems: service.side === 'left' ? 'flex-start' : 'flex-end' }}>
                <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.boldTitle}</span></h3>
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
        
        .service-logo-1, .service-logo-8, .service-logo-15 { animation: float1 2.8s ease-in-out infinite; }
        .service-logo-2, .service-logo-9, .service-logo-16 { animation: float2 3.2s ease-in-out infinite; }
        .service-logo-3, .service-logo-10, .service-logo-17 { animation: float3 2.5s ease-in-out infinite; }
        .service-logo-4, .service-logo-11, .service-logo-18 { animation: float1 2.8s ease-in-out infinite; }
        .service-logo-5, .service-logo-12 { animation: float2 3.2s ease-in-out infinite; }
        .service-logo-6, .service-logo-13 { animation: float3 2.5s ease-in-out infinite; }
        .service-logo-7, .service-logo-14 { animation: float1 2.8s ease-in-out infinite; }
        
        .card-container {
          position: relative;
          width: 288px;
          height: 224px;
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
          padding: 20px 30px;
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
          padding: 30px 20px;
        }
      `}</style>
    </section>
  );
}

const sectionContainer: React.CSSProperties = {
  background: "transparent",
  minHeight: "4600px",
  padding: "60px 20px",
  marginTop: "80px",
  fontFamily: "'Inter', 'Poppins', sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "390px",
  margin: "0 auto",
  position: "relative",
  minHeight: "4500px",
};

const cardWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
  position: "relative",
  zIndex: 2,
};

const cardHeading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50%, rgba(255,255,255,0.2) 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  marginBottom: '12px',
  textAlign: 'center',
};

const cardText: React.CSSProperties = {
  color: '#FFFFFF',
  fontSize: '12px',
  textAlign: 'center',
  lineHeight: '1.5',
  maxWidth: '250px',
};

const lineContainer: React.CSSProperties = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "400px",
  pointerEvents: "none",
  zIndex: 1,
};

const servicesContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  marginTop: "50px",
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
  width: "132px",
  height: "132px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  flexShrink: 0,
  marginRight: "20px",
};

const dotMarker: React.CSSProperties = {
  width: "10px",
  height: "10px",
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
  width: "180px",
  paddingLeft: "40px",
  marginLeft: "40px",
};

const serviceHeading: React.CSSProperties = {
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '28px',
  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 50.49%, rgba(255,255,255,0.2) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  margin: 0,
  marginRight: '60px',
  marginBottom: '6px',
  whiteSpace: 'normal',
};

const serviceHeadingBold: React.CSSProperties = {
  fontWeight: 700,
};

const serviceParagraph: React.CSSProperties = {
  fontFamily: 'Inter',
  width: '100%',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '18px',
  color: '#B7B7B7',
  marginRight: '60px',
};

const imageIcon: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};
