import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Code, Trophy, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
    const [openItems, setOpenItems] = useState(new Set());

    const experiences = [

        {
            id: 2,
            title: 'Internal Hackathon Winner - Smart India Hackathon (SIH-2025)',
            company: 'National',
            date: 'September 2025',
            description: 'Led a team of 6 to build an AI-driven Education platform using Full stack Android and Web Knowledge. Secured place among 140+ teams for innovation and user impact. Presented demo to judges and integrated real-time Storage.',
            technologies: ['React', 'Android Studio', 'Firebase', 'Tailwind CSS' , "Java" , "XML"],
            link: 'https://github.com/Aakashch-code/EduLens-AI',
            icon: Trophy,
            badgeColor: 'from-yellow-400 to-orange-500'
        },

    ];

    const toggleAccordion = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const isOpen = (id) => openItems.has(id);

    return (
        <section className="relative min-h-screen bg-zinc-950 py-20 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-bounce [animation-delay:1s]" />
            </div>

            <div className="relative container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 group">
                        Experience
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        From internships to hackathon victories and remote roles, here's a glimpse into my hands-on journey in tech. Click to dive deeper into achievements and tech stacks.
                    </p>
                </div>

                {/* Accordion Container */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {experiences.map((exp) => {
                        const IconComponent = exp.icon;
                        return (
                            <div
                                key={exp.id}
                                className="group bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-500/20 hover:shadow-xl"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(exp.id)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-all duration-300 hover:bg-zinc-800/50"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.badgeColor} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                                                {exp.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm mt-1">{exp.company} • {exp.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 transition-transform duration-300 group-hover:scale-110">
                                        {isOpen(exp.id) ? (
                                            <ChevronUp size={24} className="text-blue-400" />
                                        ) : (
                                            <ChevronDown size={24} className="text-zinc-500 group-hover:text-blue-400" />
                                        )}
                                    </div>
                                </button>

                                {/* Accordion Content - Slides in on open */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen(exp.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-8 pb-8 pt-4">
                                        <p className="text-zinc-300 mb-6 leading-relaxed">{exp.description}</p>
                                        <div className="mb-6">
                                            <h4 className="text-zinc-400 font-medium mb-2">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full text-sm backdrop-blur-sm group-hover:bg-blue-500/20 transition-all duration-300"
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => window.open(exp.link, '_blank')}
                                            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 relative overflow-hidden"
                                        >
                                            <span>View Details</span>
                                            <ExternalLink size={18} />
                                            {/* Shine Effect */}
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;