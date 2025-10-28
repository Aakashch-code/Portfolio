import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cloud, Award, ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
    const [openItems, setOpenItems] = useState(new Set());

    const certificates = [

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
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-bounce [animation-delay:1s]" />
            </div>

            <div className="relative container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 group">
                        Certificates & Badges
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Explore my Oracle Cloud certifications. Each badge showcases hands-on expertise in cloud infrastructure, architecture, and development. Click to expand and verify.
                    </p>
                </div>

                {/* Accordion Container */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {certificates.map((cert) => {
                        const IconComponent = cert.icon;
                        return (
                            <div
                                key={cert.id}
                                className="group bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-500/20 hover:shadow-xl"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(cert.id)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-all duration-300 hover:bg-zinc-800/50"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.badgeColor} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                                                {cert.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm mt-1">Oracle Cloud Certified</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 transition-transform duration-300 group-hover:scale-110">
                                        {isOpen(cert.id) ? (
                                            <ChevronUp size={24} className="text-purple-400" />
                                        ) : (
                                            <ChevronDown size={24} className="text-zinc-500 group-hover:text-purple-400" />
                                        )}
                                    </div>
                                </button>

                                {/* Accordion Content - Slides in on open */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen(cert.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-8 pb-8 pt-4">
                                        <p className="text-zinc-300 mb-6 leading-relaxed">{cert.description}</p>
                                        <button
                                            onClick={() => window.open(cert.link, '_blank')}
                                            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 relative overflow-hidden"
                                        >
                                            <span>View Certificate</span>
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

export default CertificatesSection;