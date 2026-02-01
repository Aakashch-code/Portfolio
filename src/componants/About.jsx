import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="group relative p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/70 transition-all">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-48 h-48 rounded-2xl bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700/50">
                            <img
                                src="/pfp.png"
                                alt="Aakash Chauhan"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-white">
                                Hi, I'm Aakash Chauhan
                            </h2>

                            <div className="text-zinc-400 space-y-4 max-w-2xl">
                                <p>
                                    I'm a backend-focused developer working primarily with
                                    Java 21 and Spring Boot 3, with hands-on experience building
                                    complex backend systems and REST APIs.
                                </p>
                                <p>
                                    I’m comfortable across the full stack when needed — using
                                    React for basic frontend flows — but my main focus is
                                    designing clean, secure, and scalable backend architectures.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {[
                                    'Backend Focused',
                                    'Spring Boot',
                                    'REST APIs',
                                    'React (Basics)',
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-300"
                                    >
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
