
import React from 'react';
import { IMAGES } from '../constants';

const AboutView: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* About Hero */}
      <section className="relative overflow-hidden rounded-xl h-[500px] flex flex-col justify-center items-center text-center p-8 lg:p-12 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 75, 86, 0.8)), url("https://images.unsplash.com/photo-1523050853064-85a17f0094e7?q=80&w=2070&auto=format&fit=crop")`
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Our Legacy of <span className="text-accent-gold">Excellence</span>
          </h1>
          <p className="text-xl opacity-90 leading-relaxed font-light">
            Founded in 1924, Grace's School has been at the forefront of transformative education for a century, nurturing leaders of character and intellect.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6 py-10">
        <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Mission</span>
        <h2 className="text-4xl font-bold dark:text-white">Empowering the next generation to lead with wisdom and heart.</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          At Grace's, we believe that education extends beyond the classroom. Our holistic approach integrates academic rigor with emotional intelligence, ensuring every student discovers their unique potential.
        </p>
      </section>

      {/* Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Academic Rigor',
            desc: 'A curriculum designed to challenge the mind and spark intellectual curiosity through inquiry-based learning.',
            icon: 'menu_book'
          },
          {
            title: 'Creative Expression',
            desc: 'Fostering an environment where arts, music, and performance are celebrated as essential paths to understanding.',
            icon: 'palette'
          },
          {
            title: 'Social Responsibility',
            desc: 'Developing global citizens who are committed to service, ethics, and meaningful community impact.',
            icon: 'public'
          }
        ].map((pillar, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">{pillar.icon}</span>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">{pillar.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </section>

      {/* History Timeline Peek */}
      <section className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-12 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold dark:text-white">A Century of Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            What started as a small local academy has grown into a world-class institution. From our first graduating class of twelve to our current vibrant community, the spirit of Grace's School remains unchanged.
          </p>
          <div className="flex gap-8 border-t border-primary/10 pt-8">
            <div>
              <p className="text-3xl font-black text-primary">100+</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Years of History</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">15k+</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Global Alumni</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">1:8</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Teacher Ratio</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
            alt="Grace's School Historical Building" 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutView;
