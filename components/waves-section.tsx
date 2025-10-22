'use client';

import Image from 'next/image';

export default function WavesSection() {
  return (
    <section 
      className="w-full"
      style={{
        marginTop: '-300px',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundImage: 'url("/Waves.gif")',
        backgroundBlendMode: 'lighten',
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
        backgroundColor: '#000012'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center min-h-[400px]">
          {/* Content can be added here if needed */}
        </div>
      </div>
    </section>
  );
}