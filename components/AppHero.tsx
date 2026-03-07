import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentData } from '../types';

interface AppHeroProps {
  content: ContentData['hero'];
}

const AppHero: React.FC<AppHeroProps> = ({ content }) => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            {content.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16 flex-wrap">
            <a 
              href="https://play.google.com/store/apps/details?id=com.hoangld.contactbook&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary hover:bg-sky-700 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <Download className="w-5 h-5 mr-3" />
              Google Play
            </a>
            <a 
              href="https://apps.apple.com/vn/app/tra-cứu-địa-chỉ-sau-sáp-nhập/id6759974791?l=vi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-gray-900 hover:bg-black shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <Download className="w-5 h-5 mr-3" />
              App Store
            </a>
            <Link 
              to="/intro"
              className="flex items-center justify-center px-8 py-4 border border-gray-200 text-lg font-bold rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all hover:border-gray-300 active:scale-95"
            >
              {content.learnMore}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="relative max-w-lg mx-auto">
             <div className="absolute inset-0 flex items-center justify-center filter blur-[100px] opacity-20 pointer-events-none">
                <div className="w-80 h-80 bg-primary rounded-full"></div>
                <div className="w-80 h-80 bg-accent rounded-full -ml-20"></div>
             </div>
             <div className="relative mx-auto rounded-[2.5rem] shadow-2xl overflow-hidden border-[12px] border-white bg-gray-900 aspect-[9/18.5] max-w-[320px] transition-all duration-700 hover:rotate-2 hover:scale-105">
                 <div className="w-full h-full relative">
                    <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                        alt="App interface" 
                        className="object-cover w-full h-full opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex flex-col justify-end p-6">
                        <p className="text-white text-sm font-medium leading-relaxed text-center mb-4">
                            Hỗ trợ đắc lực Shipper tránh lạc đường, Môi giới Bất động sản tư vấn pháp lý chính xác, Người kinh doanh cập nhật chứng từ và Người dân vùng sáp nhập làm thủ tục hành chính dễ dàng
                        </p>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;