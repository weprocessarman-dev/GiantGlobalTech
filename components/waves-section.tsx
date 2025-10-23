'use client';

import Image from 'next/image';

export default function WavesSection() {
  return (
    <section 
      className="w-full"
      style={{
        marginTop: '-300px',
        backgroundColor: '#000012',
        backgroundBlendMode: 'lighten'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4" style={{
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
  );
}