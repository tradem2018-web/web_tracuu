import React, { useState } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { ContentData } from '../types';

interface AppContactProps {
  content: ContentData['contact'];
}

const AppContact: React.FC<AppContactProps> = ({ content }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:support@tracuudiachissn.online?subject=Contact from ${formState.name}&body=${formState.message}`;
  };

  return (
    <section className="py-24 bg-secondary text-white min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary font-bold text-sm mb-6 border border-white/10">
                  <MessageCircle className="w-4 h-4" />
                  <span>Support Channel</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{content.title}</h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-md">
                    {content.infoText}
                </p>
                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-[2rem] border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group">
                    <div className="bg-primary p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Support</p>
                        <a href="mailto:support@tracuudiachissn.online" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
                            support@tracuudiachissn.online
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 text-gray-900 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Name</label>
                          <input
                              type="text"
                              id="name"
                              required
                              className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                              placeholder={content.namePlaceholder}
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                          />
                      </div>
                      <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Email</label>
                          <input
                              type="email"
                              id="email"
                              required
                              className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                              placeholder={content.emailPlaceholder}
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                          />
                      </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            className="block w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                            placeholder={content.messagePlaceholder}
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center items-center py-5 px-8 border border-transparent rounded-2xl shadow-xl text-lg font-bold text-white bg-primary hover:bg-sky-700 transition-all transform hover:-translate-y-1 active:scale-95"
                    >
                        {content.sendButton}
                        <Send className="ml-3 w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppContact;