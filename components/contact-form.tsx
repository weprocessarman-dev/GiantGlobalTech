'use client';

import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('submit', form);
    alert('Form submitted — implement API integration');
  }

  return (
    <section className="contact-form-section">
      <div className="form-wrapper">
        <form onSubmit={onSubmit} className="contact-form">
          <div className="glow-effect" />

          <div className="form-grid">
            <div className="form-field">
              <label className={inter.className}>First Name</label>
              <input 
                name="firstName" 
                value={form.firstName} 
                onChange={onChange} 
                placeholder="John"
                className={inter.className}
              />
            </div>

            <div className="form-field">
              <label className={inter.className}>Last Name</label>
              <input 
                name="lastName" 
                value={form.lastName} 
                onChange={onChange} 
                placeholder="Smith"
                className={inter.className}
              />
            </div>

            <div className="form-field">
              <label className={inter.className}>Email</label>
              <input 
                name="email" 
                value={form.email} 
                onChange={onChange} 
                placeholder="johnsmith@gmail.com"
                className={inter.className}
              />
            </div>

            <div className="form-field">
              <label className={inter.className}>Phone</label>
              <input 
                name="phone" 
                value={form.phone} 
                onChange={onChange} 
                placeholder="+1234567890"
                className={inter.className}
              />
            </div>
          </div>

          <div className="form-field message-field">
            <label className={inter.className}>Message</label>
            <textarea 
              name="message" 
              value={form.message} 
              onChange={onChange} 
              placeholder="I want to ask..."
              className={inter.className}
            />
          </div>

          <button type="submit" className={`${inter.className} submit-button`}>
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-form-section {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000012;
          margin-top: 70px;
        }

        .form-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-form {
          position: relative;
          width: 60%;
          max-width: 820px;
          background: rgba(135, 135, 135, 0.2);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 40px;
          padding: 40px;
          box-sizing: border-box;
        }

        .glow-effect {
          position: absolute;
          width: 494.65px;
          height: 510.08px;
          right: -200px;
          top: 110px;
          background: rgba(13, 61, 238, 0.25);
          filter: blur(100px);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 30px;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-field label {
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
        }

        .form-field input,
        .form-field textarea {
          background: rgba(217, 217, 217, 0.1);
          border: none;
          border-radius: 10px;
          padding: 12px;
          color: white;
          font-size: 16px;
          box-sizing: border-box;
        }

        .form-field input {
          height: 45px;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .message-field {
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .message-field textarea {
          height: 195px;
          resize: none;
          padding: 16px;
        }

        .submit-button {
          width: 100%;
          height: 65px;
          background: linear-gradient(90deg, #7fb1ff, #4a63ff);
          border: none;
          border-radius: 50px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .contact-form {
            width: 70%;
            max-width: 810px;
          }
        }

        @media (max-width: 809px) {
          .contact-form-section {
            margin-top: 40px;
          }

          .contact-form {
            width: 90%;
            max-width: 390px;
            padding: 20px;
          }

          .glow-effect {
            display: none;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 30px;
          }

          .form-field label {
            font-size: 14px;
          }

          .form-field input,
          .form-field textarea {
            font-size: 14px;
          }

          .message-field {
            margin-bottom: 30px;
          }

          .message-field textarea {
            height: 150px;
          }

          .submit-button {
            height: 55px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
