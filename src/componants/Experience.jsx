import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    Trophy,
    ExternalLink
} from 'lucide-react';

const HackathonSection = () => {
    const [openItems, setOpenItems] = useState(new Set());

    const hackathons = [
        {
            id: 2,
            title: 'Smart India Hackathon (SIH) 2025 – Winning Team',
            organizer: 'Government of India',
            date: 'September 2025',
            description:
                'Built an AI-powered education platform as part of a 36-hour national hackathon. Led a 6-member team to design, develop, and demo a production-ready Android and Web solution. Focused on real-time data handling, AI-driven insights, and scalability. Ranked among the top teams out of 140+ participants based on innovation, feasibility, and impact.',
            technologies: [
                'React',
                'Android Studio',
                'Firebase',
                'Tailwind CSS',
                'Java',
                'XML'
            ],
            link: 'https://github.com/Aakashch-code/EduLens-AI',
            icon: Trophy,
            badgeColor: 'from-yellow-400 to-orange-500'
        }
    ];

    const toggleAccordion = (id) => {
        setOpenItems((prev) => {
            const updated = new Set(prev);
            updated.has(id) ? updated.delete(id) : updated.add(id);
            return updated;
        });
    };

    const isOpen = (id) => openItems.has(id);

    return (
        <section
            id="hackathons"
            className="relative py-20 px-6 z-10 scroll-mt-28"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                        Hackathons & Competitions
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        High-pressure builds, real problem statements, and working
                        solutions shipped under strict time constraints.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {hackathons.map((hack) => {
                        const Icon = hack.icon;

                        return (
                            <div
                                key={hack.id}
                                className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleAccordion(hack.id)}
                                    className="w-full flex items-center justify-between p-8 text-left hover:bg-zinc-800/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-br ${hack.badgeColor} text-white shadow-lg`}
                                        >
                                            <Icon size={24} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {hack.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm mt-1">
                                                {hack.organizer} • {hack.date}
                                            </p>
                                        </div>
                                    </div>

                                    {isOpen(hack.id) ? (
                                        <ChevronUp size={24} className="text-blue-400" />
                                    ) : (
                                        <ChevronDown size={24} className="text-zinc-500" />
                                    )}
                                </button>

                                {/* Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen(hack.id)
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-8 pb-8 pt-4">
                                        <p className="text-zinc-300 mb-6 leading-relaxed">
                                            {hack.description}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-zinc-400 font-medium mb-2">
                                                Tech Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {hack.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-zinc-800/60 text-zinc-300 rounded-full text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={hack.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105"
                                        >
                                            View Project
                                            <ExternalLink size={18} />
                                        </a>
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

export default HackathonSection;
