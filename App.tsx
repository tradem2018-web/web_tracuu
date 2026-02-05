import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import AppHero from './components/AppHero';
import AppFeatures from './components/AppFeatures';
import AppGuide from './components/AppGuide';
import AppPrivacy from './components/AppPrivacy';
import AppContact from './components/AppContact';
import AppFooter from './components/AppFooter';
import { Language } from './types';
import { CONTENT } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.VI);

  const toggleLang = () => {
    setLang(prev => prev === Language.VI ? Language.EN : Language.VI);
  };

  const currentContent = CONTENT[lang];

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <AppNavbar
          lang={lang}
          toggleLang={toggleLang}
          content={currentContent.nav}
        />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<AppHero content={currentContent.hero} />} />
            <Route path="/intro" element={<AppFeatures content={currentContent.intro} />} />
            <Route path="/guide" element={<AppGuide content={currentContent.guide} />} />
            <Route path="/privacy" element={<AppPrivacy content={currentContent.privacy} />} />
            <Route path="/contact" element={<AppContact content={currentContent.contact} />} />
          </Routes>
        </main>
        <AppFooter content={currentContent.footer} />
      </div>
    </HashRouter>
  );
};

export default App;