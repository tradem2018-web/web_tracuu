import React, { useState } from 'react';
import { Menu, X, MapPin, Globe } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { Language, ContentData } from '../types';

interface AppNavbarProps {
  lang: Language;
  toggleLang: () => void;
  content: ContentData['nav'];
}

const AppNavbar: React.FC<AppNavbarProps> = ({ lang, toggleLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: content.home },
    { path: '/intro', label: content.features },
    { path: '/guide', label: content.guide },
    { path: '/privacy', label: content.privacy },
    { path: '/contact', label: content.contact },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setIsOpen(false)}>
            <MapPin className="h-8 w-8 text-primary" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-gray-800 tracking-tight">
              Tracuudiachi_<span className="text-primary">SSN</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-primary bg-primary/5' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3 mr-2">
              <a 
                href="https://play.google.com/store/apps/details?id=com.hoangld.contactbook&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-sky-700 transition-colors shadow-sm"
              >
                Google Play
              </a>
              <a 
                href="https://apps.apple.com/vn/app/tra-cứu-địa-chỉ-sau-sáp-nhập/id6759974791?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-black transition-colors shadow-sm"
              >
                App Store
              </a>
            </div>
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
              title="Switch Language"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-bold text-gray-700 tracking-wider">{lang}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                     isActive 
                      ? 'text-primary bg-primary/5 font-bold' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3 px-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.hoangld.contactbook&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 bg-primary text-white text-base font-bold rounded-lg hover:bg-sky-700 transition-colors shadow-sm"
              >
                Google Play
              </a>
              <a 
                href="https://apps.apple.com/vn/app/tra-cứu-địa-chỉ-sau-sáp-nhập/id6759974791?l=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 bg-gray-900 text-white text-base font-bold rounded-lg hover:bg-black transition-colors shadow-sm"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;