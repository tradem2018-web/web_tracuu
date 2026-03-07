import React from 'react';
import { Repeat, MapPin, Map, BookUser, WifiOff, LucideIcon } from 'lucide-react';
import { ContentData } from '../types';

interface FeaturesProps {
  content: ContentData['intro'];
}

// Map string icon names to components
const IconMap: Record<string, LucideIcon> = {
  Repeat,
  MapPin,
  Map,
  BookUser,
  WifiOff
};

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section className="py-12 bg-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {content.title}
          </h2>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 space-y-4">
            {content.description.split('\n').map((line, index) => (
              line.trim() && <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => {
            const Icon = IconMap[feature.iconName] || MapPin;
            return (
              <div key={index} className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 pr-8">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-6 py-3 rounded-full shadow-sm">
                {content.note}
            </span>
        </div>
      </div>
    </section>
  );
};

export default Features;