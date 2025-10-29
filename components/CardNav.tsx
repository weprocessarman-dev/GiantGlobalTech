'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 50;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 50, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    setIsLoaded(true);

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <>
      <style jsx>{`
        .card-nav-container {
          position: absolute;
          top: 2em;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          z-index: 9999;
          box-sizing: border-box;
          opacity: 0;
          visibility: hidden;
          animation: fadeInDown 0.8s ease-out 0.2s forwards;
        }
        
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            visibility: hidden;
            transform: translateX(-50%) translateY(-20px);
          }
          1% {
            visibility: visible;
          }
          100% {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }
        }

        .card-nav {
          display: block;
          height: 50px;
          padding: 0;
          background-color: rgba(255, 255, 255, 0.15);
          border: 0.5px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(50px) saturate(180%);
          -webkit-backdrop-filter: blur(50px) saturate(180%);
          position: relative;
          overflow: hidden;
          will-change: height;
          isolation: isolate;
        }

        .card-nav-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.45rem 0.55rem 1.1rem;
          z-index: 2;
        }

        .hamburger-menu {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          gap: 6px;
        }

        .hamburger-menu:hover .hamburger-line {
          opacity: 0.75;
        }

        .hamburger-line {
          width: 30px;
          height: 2px;
          background-color: currentColor;
          transition: transform 0.25s ease, opacity 0.2s ease, margin 0.3s ease;
          transform-origin: 50% 50%;
        }

        .hamburger-menu.open .hamburger-line:first-child {
          transform: translateY(4px) rotate(45deg);
        }

        .hamburger-menu.open .hamburger-line:last-child {
          transform: translateY(-4px) rotate(-45deg);
        }

        .logo-container {
          display: flex;
          align-items: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .logo {
          height: 28px;
        }

        .card-nav-top a {
          text-decoration: none;
          height: 100%;
        }

        .card-nav-cta-button {
          background: linear-gradient(180deg, #2C71F3 0%, #0D3DEE 100%);
          border: none;
          border-radius: calc(0.75rem - 0.35rem);
          padding: 0 1rem;
          height: 100%;
          font-family: 'poppins', sans-serif;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .card-nav-cta-button span {
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-nav-cta-button:hover {
          background-color: #333;
        }

        .card-nav-content {
          position: absolute;
          left: 0;
          right: 0;
          top: 50px;
          bottom: 0;
          padding: 0.5rem;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          visibility: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .card-nav.open .card-nav-content {
          visibility: visible;
          pointer-events: auto;
        }

        .nav-card {
          height: 100%;
          flex: 1 1 0;
          min-width: 0;
          border-radius: calc(0.75rem - 0.2rem);
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 12px 16px;
          gap: 8px;
          user-select: none;
        }

        .nav-card-label {
          font-weight: 400;
          font-size: 22px;
          letter-spacing: -0.5px;
        }

        .nav-card-links {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-card-link {
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .nav-card-link:hover {
          opacity: 0.75;
        }

        @media (min-width: 1200px) {
          .card-nav-container {
            top: 50;
            transform: none;
            width: 700px;
            max-width: none;
          }
        }

        @media (max-width: 768px) {
          .card-nav-container {
            width: 90%;
            top: 1.2em;
          }

          .card-nav-top {
            padding: 0.5rem 1rem;
            justify-content: space-between;
          }

          .hamburger-menu {
            order: 2;
          }

          .logo-container {
            position: static;
            transform: none;
            order: 1;
          }

          .card-nav-cta-button {
            display: none;
          }

          .card-nav-content {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
            padding: 0.5rem;
            bottom: 0;
            justify-content: flex-start;
          }

          .nav-card {
            height: auto;
            min-height: 60px;
            flex: 1 1 auto;
            max-height: none;
          }

          .nav-card-label {
            font-size: 18px;
          }

          .nav-card-link {
            font-size: 15px;
          }
        }
      `}</style>
      <div className={`card-nav-container ${className}`} style={{ opacity: isLoaded ? undefined : 0 }}>
        <nav
          ref={navRef}
          className={`card-nav ${isExpanded ? 'open' : ''}`}
          // style={{ backdropFilter: 'blur(50px) saturate(180%)', WebkitBackdropFilter: 'blur(50px) saturate(180%)' }}
        >
          <div className="card-nav-top">
            <div
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              tabIndex={0}
              style={{ color: menuColor || '#fff' }}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </div>

            <div className="logo-container">
              <a href="/">
                <img src={logo} alt={logoAlt} className="logo" />
              </a>
            </div>

            <a href="/contact">
              <button 
                type="button" 
                className="card-nav-cta-button"
              >
                <span>Get Started</span>
              </button>
            </a>
          </div>

          <div className="card-nav-content" aria-hidden={!isExpanded}>
            {(items || []).slice(0, 3).map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="nav-card"
                ref={setCardRef(idx)}
                style={{ 
                  backgroundColor: idx === 1 ? 'transparent' : 'rgba(135, 135, 135, 0.5)',
                  backgroundImage: idx === 1 ? 'url(/Rectangle.png)' : 'none',
                  color: item.textColor 
                }}
              >
                <div className="nav-card-label">{item.label}</div>
                <div className="nav-card-links">
                  {item.links?.map((lnk, i) => (
                    <a
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link"
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                    >
                      <GoArrowUpRight aria-hidden="true" />
                      {lnk.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default CardNav;