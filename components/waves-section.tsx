'use client';

import Image from 'next/image';

export default function WavesSection() {
  return (
    <>
      <style jsx>{`
        @media (min-width: 390px) and (max-width: 809px) {
          .waves-container {
            width: 100% !important;
            height: 150px !important;
          }
        }
      `}</style>
      <section 
        className="w-full"
        style={{
          backgroundColor: '#000012',
          backgroundBlendMode: 'lighten'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 waves-container" style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/Waves.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'lighten'
        }}>
          <div className="flex justify-center items-center min-h-[400px]">
            {/* Content can be added here if needed */}
          </div>
        </div>
      </section>
    </>
  );
}