import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center mb-16">
        <section className="relative w-11/12 md:w-9/12 h-[500px] overflow-hidden">
        {/* Background video */}
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/heroVideo.mov"
            autoPlay
            loop
            muted
            playsInline
        />
        {/* Overlay (if needed) */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        </section>
    </section>
  );
};

export default HeroSection;