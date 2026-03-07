import React from 'react';
import { Shield } from 'lucide-react';
import { ContentData } from '../types';

interface PrivacyProps {
  content: ContentData['privacy'];
}

const Privacy: React.FC<PrivacyProps> = ({ content }) => {
  return (
    <section className="py-12 bg-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">{content.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{content.lastUpdated}</p>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <p className="font-medium mb-6 text-lg">{content.intro}</p>
            
            {content.sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h4>
                    <p className="whitespace-pre-line text-base leading-relaxed text-justify">
                        {section.content}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;