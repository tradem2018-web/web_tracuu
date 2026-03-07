import React from 'react';
import { Share2, HelpCircle } from 'lucide-react';
import { ContentData } from '../types';

interface GuideProps {
  content: ContentData['guide'];
}

const Guide: React.FC<GuideProps> = ({ content }) => {
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
    <section className="py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">{content.title}</h2>
        </div>

        <div className="space-y-8">
            {content.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border-l-4 border-primary">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-primary text-sm font-bold mr-3 border border-slate-200">
                            {index + 1}
                        </span>
                        {step.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line ml-11 leading-relaxed">
                        {step.content}
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-blue-800 font-medium text-center">{content.tips}</p>
        </div>

        <div className="mt-12 text-center pb-8">
            <button 
                onClick={handleShare}
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:shadow-md"
            >
                <Share2 className="w-5 h-5 mr-2 -ml-1 text-gray-500" />
                {content.shareText.split(':')[0]}
            </button>
            <p className="mt-4 text-sm text-gray-400 font-medium">{content.team}</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;