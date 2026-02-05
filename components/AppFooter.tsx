import React from 'react';
import { ContentData } from '../types';

interface FooterProps {
  content: ContentData['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-secondary border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400 text-sm">
          {content.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;