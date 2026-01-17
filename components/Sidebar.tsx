
import React from 'react';
import { IMAGES } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[350px] space-y-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm sticky top-28">
        <div className="flex items-center gap-4 mb-8">
          <div
            className="size-14 rounded-full bg-cover bg-center border-2 border-primary/10"
            style={{ backgroundImage: `url("${IMAGES.SARAH}")` }}
          />
          <div>
            <h4 className="font-bold text-lg dark:text-white">Sarah Jenkins</h4>
            <p className="text-primary text-sm font-medium">Head of Admissions</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Resources</h5>
            <button className="w-full flex items-center justify-between p-4 bg-primary text-white rounded-xl font-bold transition-transform hover:-translate-y-1 active:scale-95">
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined">download</span>
                2024 Prospectus
              </span>
              <span className="text-[10px] opacity-70">PDF 4.2MB</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary/20 transition-colors active:scale-95">
              <span className="material-symbols-outlined">calendar_today</span>
              Book an Interview
            </button>
          </div>

          <div className="pt-6 border-t border-gray-100 dark:border-gray-700 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Support Office</h5>
            
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="size-10 rounded-lg bg-background-light dark:bg-gray-700 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">phone</span>
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">+1 (555) 012-3456</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mon-Fri, 8am-4pm</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="size-10 rounded-lg bg-background-light dark:bg-gray-700 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">admissions@grace.edu</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Average reply: 2 hours</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="rounded-xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shadow-sm border border-gray-100 dark:border-gray-700">
              <img
                alt="Map to Grace's School campus location"
                className="w-full h-auto"
                src={IMAGES.MAP}
              />
            </div>
            <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400 font-medium">
              123 Academic Way, Education District
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
