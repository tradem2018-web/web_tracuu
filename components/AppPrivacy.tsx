import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { ContentData } from '../types';

interface AppPrivacyProps {
  content: ContentData['privacy'];
}

const AppPrivacy: React.FC<AppPrivacyProps> = ({ content }) => {
  return (
    <section className="py-24 bg-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-3xl mb-6 shadow-sm">
                <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{content.title}</h2>
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">
              {content.lastUpdated}
            </div>
        </div>

        <div className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-inner">
            <div className="flex items-center gap-3 mb-8 text-green-800 font-bold text-xl">
               <Lock className="w-6 h-6" />
               <p>{content.intro}</p>
            </div>
            
            <div className="space-y-12">
              {content.sections.map((section, index) => (
                  <div key={index}>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        {section.title}
                      </h4>
                      <p className="whitespace-pre-line text-lg leading-relaxed text-gray-600 text-justify font-sans">
                          {section.content}
                      </p>
                  </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppPrivacy;