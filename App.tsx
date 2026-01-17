
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AdmissionsView from './components/AdmissionsView';
import AboutView from './components/AboutView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('Admissions');

  const handleNavigate = (view: string) => {
    // Reset to Home/Admissions if logo or Home is clicked
    if (view === 'Home') {
      setCurrentView('Admissions');
    } else {
      setCurrentView(view);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'About':
        return <AboutView />;
      case 'Admissions':
      default:
        return <AdmissionsView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="flex-1">
            {renderContent()}
          </div>

          {/* Sidebar Area - Consistent across pages */}
          <Sidebar />

        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-[#e6f2f4] dark:border-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div 
            className="flex items-center justify-center gap-2 mb-6 opacity-40 dark:opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer group"
            onClick={() => handleNavigate('Home')}
          >
            <div className="size-6 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold dark:text-white">Grace's School</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Grace's School. All rights reserved. Shaping minds, building character.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
