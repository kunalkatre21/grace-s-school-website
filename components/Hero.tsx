
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-xl h-[400px] flex flex-col justify-end p-8 lg:p-12 text-white group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 75, 85, 0.9), transparent), url("${IMAGES.HERO}")`
        }}
      />
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-3 py-1 bg-accent-gold text-background-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          Admissions 2024
        </span>
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 drop-shadow-sm">
          The Journey to Grace
        </h1>
        <p className="text-lg opacity-90 leading-relaxed font-normal">
          Experience a sophisticated approach to education. Our streamlined admissions process is designed to welcome your family into our thriving academic community.
        </p>
      </div>
    </section>
  );
};

export default Hero;
