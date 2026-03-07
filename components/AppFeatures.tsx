import React from 'react';
import { Repeat, MapPin, Map, BookUser, WifiOff, LucideIcon } from 'lucide-react';
import { ContentData } from '../types';

interface AppFeaturesProps {
  content: ContentData['intro'];
}

const IconMap: Record<string, LucideIcon> = {
  Repeat,
  MapPin,
  Map,
  BookUser,
  WifiOff
};

const AppFeatures: React.FC<AppFeaturesProps> = ({ content }) => {
  return (
    <section className="py-24 bg-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <div className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-500 space-y-4 font-sans leading-relaxed">
            {content.description.split('\n').map((line, index) => (
              line.trim() && <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.features.map((feature, index) => {
            const Icon = IconMap[feature.iconName] || MapPin;
            return (
              <div key={index} className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-3 bg-amber-50 text-amber-900 text-sm font-semibold px-8 py-4 rounded-2xl border border-amber-100 shadow-sm max-w-4xl">
                <span className="shrink-0 bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">!</span>
                <p className="text-left leading-relaxed">{content.note}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;