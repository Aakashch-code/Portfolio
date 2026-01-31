import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="group relative p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/70 transition-all">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-48 h-48 rounded-2xl bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700/50">
                            <img src="/pfp.jpg" alt="Aakash" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-white">Hi, I'm Aakash Chauhan</h2>
                            <div className="text-zinc-400 space-y-4 max-w-2xl">
                                <p>I have hands-on experience with the technologies I use. As a backend-focused developer, I'm most comfortable working with Spring Boot and also familiar with the Spring Framework.</p>
                                <p>I work with modern technologies and frameworks, constantly learning and adapting to new trends in the industry.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {['Backend Focused', 'Spring Boot', 'Problem Solver'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;