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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {content.title}
            </h2>
            <div className="max-w-3xl text-lg md:text-xl text-gray-500 space-y-6 font-sans leading-relaxed">
              {content.description.split('\n').map((line, index) => (
                line.trim() && <p key={index}>{line}</p>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center filter blur-[100px] opacity-10 pointer-events-none">
                <div className="w-80 h-80 bg-primary rounded-full"></div>
            </div>
            <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden border-[12px] border-white bg-gray-900 aspect-[9/18.5] w-full max-w-[280px] transform rotate-2">
                <div className="w-full h-full relative">
                    <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                        alt="App interface" 
                        className="object-cover w-full h-full opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-10 px-4 text-center">
                        <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20 transform -rotate-1">
                            <p className="text-primary font-bold text-xs leading-snug">
                                Hỗ trợ đắc lực Shipper, Môi giới Bất động sản, Người kinh doanh...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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