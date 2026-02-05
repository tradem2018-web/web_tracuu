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
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setIsOpen(false)}>
            <MapPin className="h-8 w-8 text-primary" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-gray-800">Tracuudiachi_<span className="text-primary">SSN</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side: Lang Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-bold text-gray-700">{lang}</span>
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;