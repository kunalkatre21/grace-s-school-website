
import React from 'react';
import { NAV_LINKS, IMAGES } from '../constants';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e6f2f4] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('Home')}
        >
          <div className="size-8 text-primary transition-transform group-hover:scale-110">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight dark:text-white">Grace's School</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.label);
              }}
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                currentView === link.label
                  ? 'text-primary'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary'
              }`}
            >
              {link.label}
              {currentView === link.label && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('Admissions')}
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
          >
            Apply Now
          </button>
          <div
            className="w-10 h-10 rounded-full border-2 border-primary/20 bg-cover bg-center cursor-pointer hover:ring-2 hover:ring-primary/40 transition-all"
            style={{ backgroundImage: `url("${IMAGES.USER_AVATAR}")` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
