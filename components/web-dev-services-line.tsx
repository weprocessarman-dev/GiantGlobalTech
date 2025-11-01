'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import WebDevServicesLineTablet from './web-dev-services-line-tablet';
import WebDevServicesLineMobile from './web-dev-services-line-mobile';

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

function WebDevServicesLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const headerCards1 = [
    {
      id: 1,
      title: "WEBSITE DEVELOPMENT",
      description: "Building responsive and interactive user interfaces with modern frameworks."
    },
    {
      id: 2,
      title: "APP DEVELOPMENT",
      description: "Creating robust server-side applications and APIs for seamless functionality."
    }
  ];

  const headerCards2 = [
    {
      id: 3,
      title: "SOFTWARE DEVELOPMENT",
      description: "Complete online store development with secure payment integration."
    },
    {
      id: 4,
      title: "INFRASTRUCTURE SERVICES",
      description: "Seamless content management system setup and customization."
    }
  ];

  const services1Left = [
    { title: "Front-End", subtitle: "Development", icon: "/web1.png", desc: "Modern React applications with hooks and state management." },
    { title: "Back-End", subtitle: "Development", icon: "/web2.png", desc: "Progressive Vue.js applications with component-based architecture." },
    { title: "Full-Stack", subtitle: "Development", icon: "/web3.png", desc: "Enterprise Angular applications with TypeScript." },
    { title: "E-Commerce", subtitle: "Development", icon: "/web4.png", desc: "Server-side rendered React applications with Next.js." },
    { title: "CMS", subtitle: "Development", icon: "/web5.png", desc: "Semantic HTML5 and modern CSS3 with animations." },
    { title: "AI & API", subtitle: "Integration", icon: "/web6.png", desc: "Vanilla JavaScript and ES6+ features implementation." },
    { title: "No-Code", subtitle: "Development", icon: "/web7.png", desc: "Type-safe JavaScript development with TypeScript." }
  ];

  const services1Right = [
    { title: "iOS App", subtitle: "Development", icon: "/web8.png", desc: "Scalable server-side applications with Node.js runtime." },
    { title: "Android App", subtitle: "Development", icon: "/web9.png", desc: "Backend development with Django and Flask frameworks." },
    { title: "Web App", subtitle: "Development", icon: "/web10.png", desc: "Dynamic web applications with PHP and Laravel." },
    { title: "AI-Powered App  ", subtitle: "Development", icon: "/web11.png", desc: "SQL and NoSQL database architecture and optimization." },
    { title: "E-Commerce App", subtitle: "Development", icon: "/web12.png", desc: "RESTful and GraphQL API design and implementation." },
    { title: "Travel App", subtitle: "Development", icon: "/web13.png", desc: "AWS, Azure, and Google Cloud platform integration." },
    { title: "Messaging App", subtitle: "Development", icon: "/web14.png", desc: "CI/CD pipelines and automated deployment workflows." }
  ];

  const services2Left = [
    { title: "SaaS", subtitle: "Development", icon: "/web15.png", desc: "Secure payment processing with Stripe and PayPal." },
    { title: "CRM & ERP", subtitle: "Development", icon: "/web16.png", desc: "Advanced cart functionality with real-time updates." }
  ];

  const services2Right = [
    { title: "API Management", subtitle: "& Integration", icon: "/web17.png", desc: "Custom WordPress themes and plugin development." },
    { title: "Performance", subtitle: "Optimization", icon: "/web18.png", desc: "Modern headless CMS integration with Contentful and Strapi." }
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
    return <WebDevServicesLineMobile />;
  }

  if (isTablet) {
    return <WebDevServicesLineTablet />;
  }

  return (
    <section ref={ref} style={sectionContainer}>
      <div style={{ ...container, position: 'relative' }}>
        
        <svg className="animated-lines-desktop" style={linesSvgContainer} viewBox="0 0 1400 4800" preserveAspectRatio="xMidYMin meet">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path
            d="M 690 0 L 690 60 L 241 60 L 241 4742"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            opacity="0.2"
          />
          <path
            d="M 710 0 L 720 60 L 1161 60 L 1161 4742"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            opacity="0.2"
          />
          
          <motion.path
            d="M 690 0 L 690 60 L 241 60 L 241 4742"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            filter="url(#glow)"
            pathLength={pathLength}
          />
          <motion.path
            d="M 710 0 L 710 60 L 1161 60 L 1161 4742"
            stroke="#00A8FF"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            filter="url(#glow)"
            pathLength={pathLength}
          />
        </svg>

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
          
          .service-logo { animation: float1 2.8s ease-in-out infinite; }
          
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
          .card-1::before, .card-1::after,
          .card-2::before, .card-2::after,
          .card-3::before, .card-3::after,
          .card-4::before, .card-4::after {
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

        {/* First Header Cards */}
        <div className="flex justify-center items-center" style={{ gap: '120px', marginBottom: '100px', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
          {headerCards1.map(card => (
            <div
              key={card.id}
              className={`card-container card-${card.id}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span className="card-span"></span>
              <div className="card-content">
                <h3 style={{
                  fontSize: '36px',
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

        {/* First Services Grid - 14 services */}
        <div className="service-section-main" style={{ ...mainContainer, position: 'relative', zIndex: 2 }}>
          <div style={{ ...leftColumn, alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{ ...serviceItems, alignItems: 'flex-end' }}>
              {services1Left.map((service, idx) => (
                <div key={idx} style={{ ...serviceRow, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-end' }}>
                  <div style={iconWrapper} className="service-logo"><ImgIcon src={service.icon} alt={service.title} /></div>
                  <div style={{ marginLeft: '30px' }}>
                    <div style={dotMarker}></div>
                  </div>
                  <div style={{ ...serviceContent, ...serviceContentAlignLeft }}>
                    <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.subtitle}</span></h3>
                    <p style={serviceParagraph}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...rightColumn, alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={{ ...serviceItems, alignItems: 'flex-start' }}>
              {services1Right.map((service, idx) => (
                <div key={idx} style={{ ...serviceRowRight, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-start' }}>
                  <div style={{ ...serviceContent, ...serviceContentAlignRight }}>
                    <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.subtitle}</span></h3>
                    <p style={serviceParagraph}>{service.desc}</p>
                  </div>
                  <div style={dotMarker}></div>
                  <div style={iconWrapper} className="service-logo"><ImgIcon src={service.icon} alt={service.title} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Header Cards */}
        <div className="flex justify-center items-center" style={{ gap: '120px', margin: '150px 0 100px', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
          {headerCards2.map(card => (
            <div
              key={card.id}
              className={`card-container card-${card.id}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span className="card-span"></span>
              <div className="card-content">
                <h3 style={{
                  fontSize: '36px',
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

        {/* Second Services Grid - 4 services */}
        <div className="service-section-main" style={{ ...mainContainer, position: 'relative', zIndex: 2 }}>
          <div style={{ ...leftColumn, alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{ ...serviceItems, alignItems: 'flex-end' }}>
              {services2Left.map((service, idx) => (
                <div key={idx} style={{ ...serviceRow, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-end' }}>
                  <div style={iconWrapper} className="service-logo"><ImgIcon src={service.icon} alt={service.title} /></div>
                  <div style={{ marginLeft: '30px' }}>
                    <div style={dotMarker}></div>
                  </div>
                  <div style={{ ...serviceContent, ...serviceContentAlignLeft }}>
                    <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.subtitle}</span></h3>
                    <p style={serviceParagraph}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...rightColumn, alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={{ ...serviceItems, alignItems: 'flex-start' }}>
              {services2Right.map((service, idx) => (
                <div key={idx} style={{ ...serviceRowRight, alignItems: 'center', width: '100%', maxWidth: '500px', justifyContent: 'flex-start' }}>
                  <div style={{ ...serviceContent, ...serviceContentAlignRight }}>
                    <h3 style={serviceHeading}>{service.title}<br/><span style={serviceHeadingBold}>{service.subtitle}</span></h3>
                    <p style={serviceParagraph}>{service.desc}</p>
                  </div>
                  <div style={dotMarker}></div>
                  <div style={iconWrapper} className="service-logo"><ImgIcon src={service.icon} alt={service.title} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDevServicesLine;

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
  zIndex: 2,
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
  flexShrink: 0,
  zIndex: 3,
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
