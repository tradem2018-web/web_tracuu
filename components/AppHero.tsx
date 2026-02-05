import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentData } from '../types';

interface HeroProps {
  content: ContentData['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Changed font class to font-heading and font-black for better impact */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gray-900 tracking-tight mb-6 animate-fade-in-up">
            {content.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600 mb-8 leading-relaxed">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-sky-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Download className="w-5 h-5 mr-2" />
              {content.download}
            </button>
            <Link 
              to="/intro"
              className="flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-sm transition-all"
            >
              {content.learnMore}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          
          {/* Mockup Placeholder */}
          <div className="relative">
             <div className="absolute inset-0 flex items-center justify-center filter blur-3xl opacity-30">
                <div className="w-72 h-72 bg-primary rounded-full"></div>
                <div className="w-72 h-72 bg-accent rounded-full ml-[-4rem]"></div>
             </div>
             <div className="relative mx-auto rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-gray-800 max-w-sm h-[500px] flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500">
                 <div className="w-full h-full relative">
                    <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                        alt="Bàn tay đang cầm điện thoại tra cứu" 
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          // Fallback image if the first one fails
                          e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                        <p className="text-white font-medium text-sm text-center drop-shadow-md leading-relaxed">
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

export default Hero;