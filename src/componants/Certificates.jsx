import React, { useState } from 'react';
import {ChevronDown, ChevronUp, Cloud, Award, ExternalLink, Code} from 'lucide-react';

const CertificatesSection = () => {
    const [openItems, setOpenItems] = useState(new Set());

    const certificates = [
            {
                id: 3,
                title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
                icon: Cloud,
                badgeColor: 'from-blue-400 to-cyan-500',
                description: 'Foundational certification demonstrating core knowledge of Oracle Cloud Infrastructure services, including compute, storage, networking, and security. Prepares for building and managing cloud environments effectively.',
                link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=2FF47CE9CA63716E969C4BDB0FD55412DE7D003F05B18FA86B5024D9F80EBB13',
                date: '30-Aug-2025'
            },
            {
                id: 2,
                title: 'Oracle Fusion AI Agent Studio Fusion Agent Associate - Rel 1',
                icon: Code,
                badgeColor: 'from-indigo-400 to-purple-500',
                description: 'Entry-level certification focused on developing and deploying AI agents using Oracle Fusion AI Agent Studio. Includes skills in agent configuration, integration with Fusion applications, and release 1 features for automating business processes with AI.',
                link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B5B2F746EFBD5B7062C9B8541341573C761618E0DF6060089D1FAB707498AB5A',
                date: '31-Aug-2025'
            },
            {
                id: 5,
                title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
                icon: Cloud,
                badgeColor: 'from-blue-400 to-cyan-500',
                description: 'Professional certification demonstrating advanced skills in developing, deploying, and managing applications on Oracle Cloud Infrastructure. Includes expertise in OCI services like Functions, API Gateway, Container Engine, and DevOps tools for building scalable, secure cloud-native solutions.',
                link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9C172560BE42CFE8FEE994665640010A00C715153B8E3BAC0E74042427DF2A1D',
                earned: '08-Sep-2025',
                expires: '08-Sep-2027'
            },
            {
                id: 4,
                title: 'Oracle AI Vector Search Certified Professional 2025',
                icon: Code,
                badgeColor: 'from-purple-400 to-pink-500',
                description: 'This professional-level certification validates expertise in implementing and optimizing AI vector search capabilities within Oracle Cloud Infrastructure. Covers advanced topics such as vector embeddings, semantic search, retrieval-augmented generation (RAG), and integrating vector databases for AI-driven applications.',
                link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=C0CDDE3A187BAC2B6DE6B43A7CED25554D230D8A155A6F68F6F71B761FFBEDA4',
                earned: '03-Oct-2025',
                expires: '03-Oct-2027'
            },
            {
                id: 1,
                title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
                icon: Award,
                badgeColor: 'from-purple-400 to-pink-500',
                description: 'This advanced certification validates expertise in leveraging generative AI technologies within Oracle Cloud Infrastructure for professional applications. Covers AI model integration, ethical AI practices, and building generative AI solutions for enterprise use cases.',
                link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9321D177937F638205EF59368599B1875B63FE78FB3C267326D4812CC2488D31',
                date: '01-Sep-2025'
            }

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
        <section id="certificates"
                 className="relative py-20 px-6 z-10">
            <div className="relative container mx-auto max-w-6xl">
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