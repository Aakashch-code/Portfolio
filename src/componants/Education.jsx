import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    GraduationCap,
    ExternalLink,
} from "lucide-react";

const EducationSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const degree = {
        id: 1,
        title: "Bachelor of Engineering in Electronics and Telecommunications",
        institution: "Terna Engineering College, Navi Mumbai",
        link: "https://ternaengg.ac.in/",
        icon: GraduationCap,
        badgeColor: "from-indigo-400 to-purple-500",
        date: "2021 – Present (Ongoing)", // 👈 Updated here
        description:
            "Currently pursuing my Bachelor's degree in Electronics and Telecommunications Engineering. Gaining hands-on experience in digital systems, embedded technologies, and communication networks while actively engaging in technical projects.",
        achievements: [
            "Consistently maintained strong academic performance",
            "Worked on IoT-based automation and control systems",
            "Participated in tech fests and project exhibitions",
        ],
    };

    const IconComponent = degree.icon;

    return (
        <section className="relative min-h-screen bg-zinc-950 py-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl animate-bounce [animation-delay:1s]" />
            </div>

            <div className="relative container mx-auto px-6 max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-4">
                        Education
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        My ongoing academic journey that’s building the foundation for my
                        engineering career.
                    </p>
                </div>

                {/* Single Accordion */}
                <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-indigo-500/20 hover:shadow-xl">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-8 text-left transition-all duration-300 hover:bg-zinc-800/50"
                    >
                        <div className="flex items-center space-x-4">
                            <div
                                className={`p-3 rounded-xl bg-gradient-to-br ${degree.badgeColor} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                                <IconComponent size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">
                                    {degree.title}
                                </h3>
                                <p className="text-zinc-400 text-sm mt-1">
                                    {degree.institution} • {degree.date}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 transition-transform duration-300 group-hover:scale-110">
                            {isOpen ? (
                                <ChevronUp size={24} className="text-indigo-400" />
                            ) : (
                                <ChevronDown
                                    size={24}
                                    className="text-zinc-500 group-hover:text-indigo-400"
                                />
                            )}
                        </div>
                    </button>

                    {/* Accordion Content */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="px-8 pb-8 pt-4">
                            <p className="text-zinc-300 mb-6 leading-relaxed">
                                {degree.description}
                            </p>
                            <div className="mb-6">
                                <h4 className="text-zinc-400 font-medium mb-2">
                                    Key Achievements:
                                </h4>
                                <ul className="space-y-1 text-zinc-300">
                                    {degree.achievements.map((ach, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <span className="text-indigo-400">•</span>
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => window.open(degree.link, "_blank")}
                                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 relative overflow-hidden"
                            >
                                <span>Visit College Website</span>
                                <ExternalLink size={18} />
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
