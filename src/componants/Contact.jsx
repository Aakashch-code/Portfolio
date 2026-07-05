import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [elapsedTime, setElapsedTime] = useState(0);

    // Timer to show users that the system is actively waiting on the cold start
    useEffect(() => {
        let interval;
        if (isSubmitting) {
            interval = setInterval(() => {
                setElapsedTime((prev) => prev + 1);
            }, 1000);
        } else {
            setElapsedTime(0);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isSubmitting]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('https://portfolio-backend-v009.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitMessage('Oops! Something went wrong. Check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-6 relative z-10">
            <div className="max-w-3xl mx-auto relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-400 text-lg">Let's work together on your next project</p>
                </div>

                <div className="group relative p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-500 shadow-2xl shadow-purple-500/5">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>

                        {/* Render Cold Start Notice */}
                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                            <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                <strong className="text-blue-400 font-medium">Infrastructure Note:</strong> This form routes through a secure Spring Boot backend hosted on Render's free tier. If the server is asleep, it may take <strong className="text-zinc-100">30–50 seconds</strong> to spin up. I appreciate your patience!
                            </p>
                        </div>

                        {/* Name Input */}
                        <div className="group/input">
                            <label className="block text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                                Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    className="w-full px-5 py-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 focus:border-purple-500/50 focus:outline-none transition-all duration-300 focus:bg-zinc-800/80 focus:shadow-lg focus:shadow-purple-500/10 placeholder:text-zinc-500"
                                    placeholder="Your name"
                                    required
                                    disabled={isSubmitting}
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-focus-within/input:w-full"></div>
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="group/input">
                            <label className="block text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="w-full px-5 py-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 focus:border-purple-500/50 focus:outline-none transition-all duration-300 focus:bg-zinc-800/80 focus:shadow-lg focus:shadow-purple-500/10 placeholder:text-zinc-500"
                                    placeholder="name@example.com"
                                    required
                                    disabled={isSubmitting}
                                />
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-focus-within/input:w-full"></div>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="group/input">
                            <label className="block text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                                Message
                            </label>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    className="w-full px-5 py-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 focus:border-purple-500/50 focus:outline-none transition-all duration-300 focus:bg-zinc-800/80 focus:shadow-lg focus:shadow-purple-500/10 resize-none placeholder:text-zinc-500"
                                    placeholder="Tell me about your project..."
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-focus-within/input:w-full"></div>
                            </div>
                        </div>

                        {/* Submit/Cancel Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group/btn flex-1 relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 disabled:opacity-80 disabled:cursor-wait disabled:translate-y-0"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Waking Server ({elapsedTime}s)...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>

                            <button
                                type="button"
                                className="group/cancel px-8 py-4 rounded-xl bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-zinc-600/50 transition-all duration-300 font-medium text-zinc-300 hover:text-white"
                                onClick={() => {
                                    setFormData({ name: '', email: '', message: '' });
                                    setSubmitMessage('');
                                }}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                        </div>

                        {/* Feedback Message */}
                        {submitMessage && (
                            <div className={`pt-4 text-center font-medium ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                                {submitMessage}
                            </div>
                        )}

                        {/* Assurance Badges */}
                        <div className="flex items-center justify-center gap-6 pt-6 text-sm text-zinc-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>RESTful Integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Secure & Private</span>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
            </div>
        </section>
    );
};

export default ContactSection;