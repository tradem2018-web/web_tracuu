import React from 'react';
import { ContentData } from '../types';

interface AppFooterProps {
  content: ContentData['footer'];
}

const AppFooter: React.FC<AppFooterProps> = ({ content }) => {
  return (
    <footer className="bg-secondary border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            {content.copyright}
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.hoangld.contactbook&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm font-bold"
            >
              Google Play
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://apps.apple.com/vn/app/tra-cứu-địa-chỉ-sau-sáp-nhập/id6759974791?l=vi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm font-bold"
            >
              App Store
            </a>
          </div>
          <div className="flex items-center space-x-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <span>Powered by Tracuudiachi_SSN Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;