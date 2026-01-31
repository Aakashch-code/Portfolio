import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Globe, Code, ArrowRight, Server, Layout, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Intelli Wealth",
        category: "Modular Monolith Financial Platform",
        description: [
            "Architected a modular monolith backend with feature-based modules (Treasury, Wealth, Protection) and clean separation across API, application, domain, and persistence layers.",
            "Implemented 45+ REST APIs for transactions, budgeting, goal tracking, assets, liabilities, insurance, net worth, and contingency planning.",
            "Used polyglot persistence with PostgreSQL for transactional integrity and MongoDB for flexible financial summaries and asset aggregation.",
            "Built a contingency analysis engine calculating monthly burn rate, liquid coverage, runway duration, and recommended savings gaps.",
            "Secured APIs using Spring Security and JWT-based stateless authentication with role-based access control.",
            "Integrated a local, privacy-first LLM (Ollama) to generate on-device financial insights without external data exposure.",
            "Dockerized the backend and exposed APIs via Swagger UI; added a lightweight React UI to visualize API behavior end-to-end."
        ],
        tech: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "MongoDB", "Docker", "Ollama","Swagger UI","React","Tailwind CSS"],
        image: "📊",
        demoLink: "https://intelli-wealth-ui.netlify.app/",
        swaggerLink: "https://intelliwealth-api.onrender.com/swagger-ui/index.html#",
        backendLink: "https://github.com/Aakashch-code/intelliwealth-api",
        frontendLink: "https://github.com/Aakashch-code/intelli-wealth-ui",
        link: null
    },
    {
        id: 2,
        title: "Learn Quest",
        category: "AI-Driven Learning Backend",
        description: [
            "Built an AI-driven backend that parses user-uploaded documents using the Gemini API to generate dynamic flashcards and practice tests.",
            "Designed and implemented backend APIs and processing workflows to transform unstructured content into structured learning artifacts.",
            "Developed a structured Skill Guide chatbot logic to recommend career roadmaps based on user goals and curated market data."
        ],
        tech: ["Java", "Gemini API", "Firebase", "Backend API"],
        image: "🤖",
        link: "https://github.com/Aakashch-code/Learn-Quest",
        demoLink: null
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } }
};

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <section className="py-24 px-6 relative z-10">
            {/* INJECTED CSS TO HIDE SCROLLBAR */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <motion.h2
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.2}}
                        className="text-zinc-400 text-lg max-w-2xl"
                    >
                        Scalable systems, Full Stack architectures, and complex API design.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, margin: "-50px"}}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="
                                group relative p-6 rounded-3xl cursor-pointer flex flex-col h-full
                                bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50
                                hover:border-zinc-700/70 hover:-translate-y-2
                                hover:shadow-2xl hover:shadow-purple-500/10
                                transition-all duration-500 ease-out
                            "
                            onClick={() => setSelectedProject(project)}
                        >
                            <div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"/>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className="relative text-4xl p-3 bg-zinc-800/50 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                                        {project.image}
                                    </div>
                                    <div
                                        className="p-2 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group-hover:bg-zinc-700 group-hover:text-white text-zinc-400 transition-colors">
                                        <Code size={18}/>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-purple-300 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <div className="mb-4">
                                    <span
                                        className="inline-block text-xs font-semibold tracking-wider text-purple-400 uppercase">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {Array.isArray(project.description) ? project.description[0] : project.description}
                                </p>
                            </div>

                            <div
                                className="mt-auto pt-4 border-t border-zinc-800/50 flex items-center justify-between group-hover:border-zinc-700/50 transition-colors duration-500">
                                <div className="flex -space-x-2">
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <div key={i}
                                             className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400 font-medium ring-2 ring-zinc-900">
                                            {tech.charAt(0)}
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-purple-300 transition-colors duration-300">
                                    View Details <ArrowRight size={14}
                                                             className="group-hover:translate-x-1 transition-transform duration-300"/>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{opacity: 0, scale: 0.95, y: 20}}
                                animate={{opacity: 1, scale: 1, y: 0}}
                                exit={{opacity: 0, scale: 0.95, y: 20}}
                                // ADDED "hide-scrollbar" class here
                                className="hide-scrollbar relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-zinc-700 shadow-2xl shadow-purple-500/20 flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div
                                    className="sticky top-0 z-10 flex items-center justify-between p-6 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl">{selectedProject.image}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                            <p className="text-purple-400 text-sm font-medium">{selectedProject.category}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <X size={20}/>
                                    </button>
                                </div>

                                <div className="p-6 md:p-8 space-y-8">
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech, i) => (
                                                <span key={i}
                                                      className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-zinc-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="prose prose-invert max-w-none">
                                        <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Key
                                            Features</h4>
                                        {Array.isArray(selectedProject.description) ? (
                                            <ul className="space-y-3">
                                                {selectedProject.description.map((point, i) => (
                                                    <li key={i} className="flex gap-3 text-zinc-300 leading-relaxed">
                                                        <span
                                                            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"/>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-zinc-300 leading-relaxed">{selectedProject.description}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 mt-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        {/* Demo Button */}
                                        {selectedProject.demoLink ? (
                                            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer"
                                               className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all">
                                                <Globe size={18}/> Live Demo
                                            </a>
                                        ) : (
                                            <button disabled
                                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700">
                                                <Globe size={18}/> Demo Offline
                                            </button>
                                        )}

                                        {/* Swagger Button */}
                                        {selectedProject.swaggerLink && (
                                            <a href={selectedProject.swaggerLink} target="_blank" rel="noopener noreferrer"
                                               className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-blue-200 font-semibold border border-blue-500/30 transition-all">
                                                <BookOpen size={18}/> API Docs
                                            </a>
                                        )}

                                        {/* Repo Buttons */}
                                        {selectedProject.backendLink && (
                                            <a href={selectedProject.backendLink} target="_blank" rel="noopener noreferrer"
                                               className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold border border-zinc-700 transition-all">
                                                <Server size={18}/> Backend Repo
                                            </a>
                                        )}
                                        {selectedProject.frontendLink && (
                                            <a href={selectedProject.frontendLink} target="_blank" rel="noopener noreferrer"
                                               className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold border border-zinc-700 transition-all">
                                                <Layout size={18}/> Frontend Repo
                                            </a>
                                        )}

                                        {/* Fallback */}
                                        {!selectedProject.backendLink && !selectedProject.frontendLink && selectedProject.link && (
                                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                                               className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold border border-zinc-700 transition-all">
                                                <Code size={18}/> View Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}