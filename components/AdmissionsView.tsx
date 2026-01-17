
import React from 'react';
import Hero from './Hero';
import ProcessCard from './ProcessCard';
import { ADMISSION_STEPS } from '../constants';

const AdmissionsView: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Hero />

      {/* Process Steps Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white">Our Admissions Process</h2>
          <button className="text-primary font-bold flex items-center gap-1 group hover:gap-2 transition-all">
            4 Easy Steps 
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADMISSION_STEPS.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary rounded-xl p-10 text-center text-white shadow-xl shadow-primary/10 border border-white/10">
        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
        <p className="max-w-xl mx-auto opacity-90 mb-8 leading-relaxed">
          Join a community dedicated to excellence, character, and individual growth. Your future starts here.
        </p>
        <button className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-background-light transition-all shadow-xl hover:-translate-y-0.5 active:scale-95">
          Start Your Application Portal
        </button>
      </section>
    </div>
  );
};

export default AdmissionsView;
