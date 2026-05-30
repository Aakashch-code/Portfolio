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
                                    I’m a third-year student with solid, project-based experience in backend development using the Spring ecosystem. I genuinely enjoy handling the logic behind the screen—building clean APIs and structuring reliable service layers.
                                </p>
                                <p>
                                    Lately, I've been exploring Generative AI by integrating tools like Gemini and Ollama into my personal builds. While my primary focus is the backend, I can comfortably spin up lightweight frontends using React and Tailwind CSS to bring my APIs to life.
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
