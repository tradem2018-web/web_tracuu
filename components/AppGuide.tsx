import React from 'react';
import { Share2, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ContentData } from '../types';

interface AppGuideProps {
  content: ContentData['guide'];
}

const AppGuide: React.FC<AppGuideProps> = ({ content }) => {
  const handleShare = async () => {
    const shareData = {
      title: 'Tra cứu Địa chỉ sau Sáp nhập',
      text: content.shareText,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Đã sao chép liên kết vào bộ nhớ tạm!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <section className="py-24 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-3xl mb-6 shadow-sm">
                <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{content.title}</h2>
        </div>

        <div className="space-y-6">
            {content.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all p-8 border border-gray-100 flex gap-6">
                    <div className="shrink-0">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-white text-xl font-bold shadow-md">
                            {index + 1}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line leading-relaxed text-base">
                            {step.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 bg-sky-50 rounded-3xl p-8 border border-sky-100 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
            <p className="text-sky-900 font-semibold text-lg leading-relaxed">{content.tips}</p>
        </div>

        <div className="mt-16 text-center">
            <button 
                onClick={handleShare}
                className="inline-flex items-center px-10 py-4 border border-gray-200 shadow-sm text-lg font-bold rounded-full text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
                <Share2 className="w-6 h-6 mr-3 text-primary" />
                {content.shareText.split(':')[0]}
            </button>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{content.team}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppGuide;