'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive style helpers
  const absLabel = (left: number, top: number, width = 83, mobileLeft?: number, mobileTop?: number) => ({
    position: 'absolute' as const,
    width: `${width}px`,
    height: '19px',
    left: isMobile ? `${mobileLeft || 20}px` : `${left}px`,
    top: isMobile ? `${mobileTop || top}px` : `${top}px`,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '19px',
    color: '#FFFFFF'
  });

  const absInput = (left: number, top: number, width = 337.94, height = 45.52, mobileLeft?: number, mobileTop?: number, mobileWidth?: number) => ({
    boxSizing: 'border-box' as const,
    position: 'absolute' as const,
    width: isMobile ? `${mobileWidth || 300}px` : `${width}px`,
    height: `${height}px`,
    left: isMobile ? `${mobileLeft || 20}px` : `${left}px`,
    top: isMobile ? `${mobileTop || top}px` : `${top}px`,
    background: 'rgba(217,217,217,0.1)',
    borderRadius: 10,
    padding: '12px',
    color: 'white',
    fontSize: isMobile ? '14px' : '16px'
  });

  const absTextarea = (left: number, top: number, width = 719.54, height = 195.26, mobileLeft?: number, mobileTop?: number, mobileWidth?: number) => ({
    boxSizing: 'border-box' as const,
    position: 'absolute' as const,
    width: isMobile ? `${mobileWidth || 300}px` : `${width}px`,
    height: isMobile ? `${150}px` : `${height}px`,
    left: isMobile ? `${mobileLeft || 20}px` : `${left}px`,
    top: isMobile ? `${mobileTop || top}px` : `${top}px`,
    background: 'rgba(217,217,217,0.1)',
    borderRadius: 10,
    padding: '16px',
    color: 'white',
    fontSize: isMobile ? '14px' : '16px'
  });

  const absButton = (left: number, top: number, width = 719.54, height = 65.81, mobileLeft?: number, mobileTop?: number, mobileWidth?: number) => ({
    position: isMobile ? 'absolute' as const : 'fixed' as const,
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    width: isMobile ? `${mobileWidth || 300}px` : `${width}px`,
    height: isMobile ? `${55}px` : `${height}px`,
    left: isMobile ? `${mobileLeft || 20}px` : `${left}px`,
    top: isMobile ? `${mobileTop || top}px` : `${top}px`,
    background: 'linear-gradient(90deg,#7fb1ff,#4a63ff)',
    borderRadius: 50,
    boxSizing: 'border-box' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '14px' : '16px'
  });

  // Responsive dimensions
  const formPadding = isMobile ? 20 : 40;
  const formMinHeight = isMobile ? 800 : Math.ceil(551.12 + 65.81 + formPadding);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('submit', form);
    alert('Form submitted — implement API integration');
  }

  return (
    <section className="w-full flex items-center justify-center bg-[#000012]" style={{ marginTop: isMobile ? 40 : 70 }}>
      <div className="w-full flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className={`relative bg-[rgba(135,135,135,0.2)] rounded-[40px] ${
            isMobile ? 'w-[90%]' : 'w-[60%] max-w-[820px]'
          }`}
          style={{
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255,255,255,0.04)',
            boxSizing: 'border-box',
            padding: `${formPadding}px`,
            minHeight: `${formMinHeight}px`,
            overflow: 'hidden'
          }}
        >
          {/* Right-side glow (Ellipse 12) - Hidden on mobile */}
          {!isMobile && (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                width: 494.65,
                height: 510.08,
                left: 521.55,
                top: 110.34,
                background: 'rgba(13,61,238,0.25)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
          )}

          {/* Mobile: Stack all fields vertically */}
          {isMobile ? (
            <div className="space-y-8">
              {/* First Name */}
              <div style={{ position: 'relative', minHeight: 100 }}>
                <label style={absLabel(0, 0, 83, 20, 0)}>First Name</label>
                <input 
                  name="firstName" 
                  value={form.firstName} 
                  onChange={onChange} 
                  placeholder="John" 
                  style={absInput(0, 35, 337.94, 45.52, 20, 25, 300)} 
                />
              </div>

              {/* Last Name */}
              <div style={{ position: 'relative', minHeight: 100 }}>
                <label style={absLabel(0, 0, 83, 20, 0)}>Last Name</label>
                <input 
                  name="lastName" 
                  value={form.lastName} 
                  onChange={onChange} 
                  placeholder="Smith" 
                  style={absInput(0, 35, 337.94, 45.52, 20, 25, 300)} 
                />
              </div>

              {/* Email */}
              <div style={{ position: 'relative', minHeight: 100 }}>
                <label style={absLabel(0, 0, 41, 20, 0)}>Email</label>
                <input 
                  name="email" 
                  value={form.email} 
                  onChange={onChange} 
                  placeholder="johnsmith@gmail.com" 
                  style={absInput(0, 35, 337.94, 45.52, 20, 25, 300)} 
                />
              </div>

              {/* Phone */}
              <div style={{ position: 'relative', minHeight: 100 }}>
                <label style={absLabel(0, 0, 48, 20, 0)}>Phone</label>
                <input 
                  name="phone" 
                  value={form.phone} 
                  onChange={onChange} 
                  placeholder="+1234567890" 
                  style={absInput(0, 35, 337.94, 45.52, 20, 25, 300)} 
                />
              </div>

              {/* Message */}
              <div style={{ position: 'relative', minHeight: 180 }}>
                <label style={absLabel(0, 0, 69, 20, 0)}>Message</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={onChange} 
                  placeholder="I want to ask..." 
                  style={absTextarea(0, 35, 719.54, 150, 20, 25, 300)} 
                />
              </div>

              {/* Submit Button */}
              <div style={{ position: 'relative', minHeight: 80 }}>
                <button 
                  type="submit" 
                  className={`${inter.className} font-semibold`} 
                  style={absButton(0, 0, 719.54, 55, 20, 10, 300)}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            /* Desktop: Original layout */
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div style={{ minHeight: 140 }}>
                  <label style={absLabel(63.97, 46.62, 83)}>First Name</label>
                  <input name="firstName" value={form.firstName} onChange={onChange} placeholder="John" style={absInput(50.46, 81.62)} />
                </div>
                <div style={{ minHeight: 140 }}>
                  <label style={absLabel(445.57, 46.62, 83)}>Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={onChange} placeholder="Smith" style={absInput(432.06, 81.62)} />
                </div>

                <div style={{ minHeight: 220 }}>
                  <label style={absLabel(63.97, 163.77, 41)}>Email</label>
                  <input name="email" value={form.email} onChange={onChange} placeholder="johnsmith@gmail.com" style={absInput(50.46, 198.77)} />
                </div>

                <div>
                  <label style={absLabel(445.57, 163.77, 48)}>Phone</label>
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="+1234567890" style={absInput(432.06, 198.77)} />
                </div>
              </div>

              <div>
                <label style={absLabel(63.97, 280.86, 69)}>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} placeholder="I want to ask..." style={absTextarea(50.46, 315.86)} />
              </div>

              <div>
                <button type="submit" className={`${inter.className} font-semibold`} style={absButton(50.46, 551.12)}>
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}