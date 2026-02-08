import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { ContentData } from '../types';

interface ContactProps {
    content: ContentData['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission or just mailto
        window.location.href = `mailto:support@tracuudiachi.online?subject=Contact from ${formState.name}&body=${formState.message}`;
    };

    return (
        <section className="py-12 bg-slate-900 text-white min-h-[calc(100vh-4rem)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-6">{content.title}</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            {content.infoText}
                        </p>
                        <div className="flex items-center space-x-4 mb-4 bg-slate-800/50 p-4 rounded-xl">
                            <div className="bg-primary p-3 rounded-full">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Email Support</p>
                                <a href="mailto:support@tracuudiachi.online" className="font-medium text-lg hover:text-primary transition-colors">
                                    support@tracuudiachi.online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                    placeholder={content.namePlaceholder}
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                    placeholder={content.emailPlaceholder}
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                                    placeholder={content.messagePlaceholder}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                            >
                                {content.sendButton}
                                <Send className="ml-2 w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;