import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    Trophy,
    ExternalLink
} from 'lucide-react';

const ExperienceSection = () => {
    const [openItems, setOpenItems] = useState(new Set());

    const experiences = [
        {
            id: 2,
            title: 'Internal Hackathon Winner - Smart India Hackathon (SIH-2025)',
            company: 'National',
            date: 'September 2025',
            description:
                'Led a team of 6 to build an AI-driven education platform using full-stack Android and Web technologies. Secured a top position among 140+ teams for innovation and user impact. Presented a live demo to judges and integrated real-time storage.',
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
            id="experience"
            className="relative py-20 px-6 z-10 scroll-mt-28"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                        Experience
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        From hackathons to real-world projects, here’s a snapshot of my
                        hands-on journey and the tech I’ve worked with.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {experiences.map((exp) => {
                        const Icon = exp.icon;

                        return (
                            <div
                                key={exp.id}
                                className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleAccordion(exp.id)}
                                    className="w-full flex items-center justify-between p-8 text-left hover:bg-zinc-800/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-br ${exp.badgeColor} text-white shadow-lg`}
                                        >
                                            <Icon size={24} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {exp.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm mt-1">
                                                {exp.company} • {exp.date}
                                            </p>
                                        </div>
                                    </div>

                                    {isOpen(exp.id) ? (
                                        <ChevronUp size={24} className="text-blue-400" />
                                    ) : (
                                        <ChevronDown size={24} className="text-zinc-500" />
                                    )}
                                </button>

                                {/* Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen(exp.id)
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-8 pb-8 pt-4">
                                        <p className="text-zinc-300 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-zinc-400 font-medium mb-2">
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech) => (
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
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105"
                                        >
                                            View Details
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

export default ExperienceSection;
