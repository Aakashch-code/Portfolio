import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code, Award,FileText, User, Menu, X } from 'lucide-react';
import CertificatesSection from "./componants/Certificates.jsx";
import ExperienceSection from "./componants/Experience.jsx";
import EducationSection from "./componants/Education.jsx";
import Contact from "./componants/Contact.jsx";
import ContactSection from "./componants/Contact.jsx";
export {EducationSection}
export { CertificatesSection }
export { ExperienceSection }
export {Contact}
export default function PremiumPortfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: "Intelli Wealth",
            category: "Full Stack",
            description: "A modern AI-integrated Android hosted app that helps users maintain their finances with ease.",
            tech: ["Java" , "Spring Boot", "PostgreSQL", "Docker", "React"],
            image: "📊",
            link: "https://github.com/Aakashch-code/Intelli-Wealth"
        },
        {
            id: 2,
            title: "Learn Quest",
            category: "Full Stack (BaaS)",
            description: "A hackathon project hosted on a website designed to resolve issues in student preparation and bridge the gap between academia and industry.",
            tech: ["Firebase","React" ],
            image: "🤖",
            link: "https://github.com/Aakashch-code/EduLens-AI"
        },
        {
            id: 3,
            title: "Subscription Manager",
            category: "Full Stack",
            description: "A full stack application to manage subscription from all places to one to resolve money waste issue",
            tech: ["Spring Boot","PostgreSQL", "React"],
            image: "🎟️",
            link: "https://github.com/Aakashch-code/Subscription-Manager"
        }
    ];

    const skills = [
        {
            category: "Frontend Development (Basics)",
            icon: "💻",
            technologies: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
        },
        {
            category: "Backend Development",
            icon: "⚙️",
            technologies: ["Spring Boot", "Firebase"]
        },
        {
            category: "DevOps & Platform",
            icon: "🚀",
            technologies: ["Docker", "GitHub Actions", "Oracle Cloud Infrastructure", "Render", "Netlify"]
        },
        {
            category: "Database",
            icon: "🗄️",
            technologies: ["PostgreSQL", "MySQL"]
        }
    ];

    const stats = [
        { label: "PROJECTS COMPLETED", value: "5+", icon: Briefcase },
        { label: "YEARS EXPERIENCE", value: "Fresher", icon: Award },
        { label: "TECHNOLOGIES", value: "15+", icon: Code }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100 relative overflow-hidden">
            {/* Unified Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Subtle radial overlay for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-950 to-zinc-950"></div>
                {/* Floating blurred orbs */}
                <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                {/* Floating dots */}
                <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-purple-500/30 rounded-full animate-float"></div>
                <div className="absolute top-[35%] right-[35%] w-1.5 h-1.5 bg-blue-500/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[25%] left-[35%] w-1 h-1 bg-purple-500/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-[40%] left-[10%] w-2 h-2 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-900/80 border-b border-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent cursor-default hover:scale-105 transition-transform duration-300">
                                Portfolio
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-2">
                            {[
                                { href: '#about', label: 'About' },
                                { href: '#projects', label: 'Projects' },
                                { href: '#skills', label: 'Skills' },
                                { href: '#contact', label: 'Contact' }
                            ].map((item, index) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="group relative px-4 py-2 text-zinc-400 hover:text-white transition-colors duration-300"
                                    style={{ animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both` }}
                                >
                                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></span>
                                    <span className="relative font-medium">{item.label}</span>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative p-2.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
                            <div className="relative">
                                {mobileMenuOpen ? (
                                    <X size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-90 transform" />
                                ) : (
                                    <Menu size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-6 pb-4 flex flex-col gap-3 border-t border-zinc-800/50 pt-6">
                            {[
                                { href: '#about', label: 'About', icon: '👤' },
                                { href: '#projects', label: 'Projects', icon: '💼' },
                                { href: '#skills', label: 'Skills', icon: '⚡' },
                                { href: '#contact', label: 'Contact', icon: '📧' }
                            ].map((item, index) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="group relative px-4 py-3 text-zinc-400 hover:text-white transition-all duration-300 rounded-xl overflow-hidden"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{ animation: `slideInRight 0.4s ease-out ${index * 0.1}s both` }}
                                >
                                    <div className="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/60 transition-all duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                                    <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-500/30 transition-all duration-300"></div>
                                    <div className="relative flex items-center gap-3">
                                        <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                                        <span className="font-medium">{item.label}</span>

                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <style jsx>{`
                    @keyframes fadeInDown {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideInRight {
                        from { opacity: 0; transform: translateX(-20px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                `}</style>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 z-10">
                <div className="max-w-7xl mx-auto text-center relative">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 mb-8 hover:border-green-500/50 transition-all duration-300 group cursor-default"
                        style={{ animation: 'fadeInDown 0.8s ease-out' }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-zinc-400 group-hover:text-green-400 transition-colors duration-300 font-medium">Available for work</span>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
                        style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}
                    >
                        Backend Developer
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                        style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}
                    >
                        Building exceptional digital experiences with modern technologies and creative solutions
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
                    >
                        <a
                            href="#contact"
                            className="group/btn relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-105"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></span>
                            <span className="relative flex items-center gap-2">
                                Get In Touch
                                <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </a>

                        <a
                            href="#projects"
                            className="group/view px-8 py-4 rounded-xl bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 font-semibold text-zinc-300 hover:text-white"
                        >
                            <span className="flex items-center gap-2">
                                View Work
                                <svg className="w-5 h-5 transform group-hover/view:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div
                        className="flex justify-center gap-4"
                        style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}
                    >
                        <a
                            href="https://github.com/Aakashch-code"
                            className="group/social relative p-3 rounded-xl bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            aria-label="GitHub"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover/social:from-purple-500/20 group-hover/social:to-purple-500/0 transition-all duration-300"></div>
                            <Github size={24} className="relative z-10 text-zinc-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/social:translate-x-[200%] transition-transform duration-700"></div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aakashch-code"
                            className="group/social relative p-3 rounded-xl bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            aria-label="LinkedIn"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover/social:from-blue-500/20 group-hover/social:to-blue-500/0 transition-all duration-300"></div>
                            <Linkedin size={24} className="relative z-10 text-zinc-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/social:translate-x-[200%] transition-transform duration-700"></div>
                        </a>

                        <a
                            href="mailto:aakashch.code@gmail.com"
                            className="group/social relative p-3 rounded-xl bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            aria-label="Email"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover/social:from-purple-500/20 group-hover/social:to-purple-500/0 transition-all duration-300"></div>
                            <Mail size={24} className="relative z-10 text-zinc-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/social:translate-x-[200%] transition-transform duration-700"></div>
                        </a>
                        <a
                            href="/my_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/social relative p-3 rounded-xl bg-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-green-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            aria-label="Resume"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover/social:from-green-500/20 group-hover/social:to-green-500/0 transition-all duration-300"></div>
                            <FileText size={24} className="relative z-10 text-zinc-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/social:translate-x-[200%] transition-transform duration-700"></div>
                        </a>

                    </div>

                    <div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
                        style={{ animation: 'fadeInUp 1s ease-out 1s both, bounce 2s infinite 2s' }}
                    >
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes fadeInDown {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-purple-500/50"></span>
                                            <span className="text-sm font-semibold text-zinc-400 group-hover:text-zinc-300 tracking-wider uppercase transition-colors duration-300">
                                                {stat.label}
                                            </span>
                                        </div>

                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
                                            <div className="relative p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-blue-500/20 group-hover:border-purple-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                <stat.icon
                                                    size={24}
                                                    className="text-zinc-400 group-hover:text-purple-400 transition-colors duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-5xl font-bold text-zinc-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-purple-300 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 tracking-tight">
                                        {stat.value}
                                    </div>

                                    <div className="mt-4 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg shadow-purple-500/50"></div>
                                    </div>
                                </div>

                                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-zinc-400 text-lg">Passionate about creating impactful solutions</p>
                    </div>

                    <div className="group relative p-8 md:p-12 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-shrink-0 group/image">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                                    <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 group-hover/image:scale-105 transition-transform duration-500">
                                        <div className="w-full h-full rounded-2xl bg-zinc-900 p-1">
                                            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
                                                <img
                                                    src="/pfp.jpg"
                                                    alt="Aakash Chauhan"
                                                    className="w-full h-full rounded-xl object-cover transition-transform duration-700 group-hover/image:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover/image:from-purple-500/10 group-hover/image:to-blue-500/10 transition-all duration-500 rounded-xl"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 shadow-lg shadow-purple-500/50"></div>
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 shadow-lg shadow-blue-500/50"></div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="relative inline-block">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 group-hover:bg-clip-text transition-all duration-500">
                                        Hi, I'm Aakash Chauhan
                                    </h3>
                                    <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>

                                <div className="space-y-4">
                                    <div className="group/para relative pl-4 border-l-2 border-zinc-700/50 hover:border-purple-500/50 transition-colors duration-300">
                                        <p className="text-zinc-400 group-hover/para:text-zinc-300 leading-relaxed transition-colors duration-300">
                                            I have hands-on experience with the technologies I use. As a backend-focused developer, I'm most comfortable working with Spring Boot and also familiar with the Spring Framework.
                                        </p>
                                    </div>

                                    <div className="group/para relative pl-4 border-l-2 border-zinc-700/50 hover:border-blue-500/50 transition-colors duration-300">
                                        <p className="text-zinc-400 group-hover/para:text-zinc-300 leading-relaxed transition-colors duration-300">
                                            I work with modern technologies and frameworks, constantly learning and adapting to new trends in the industry. When I'm not coding, you can find me contributing to open-source projects or sharing knowledge with the developer community.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {['Backend Focused', 'Spring Boot', 'Problem Solver'].map((tag, index) => (
                                        <span
                                            key={index}
                                            className="group/tag relative px-4 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-sm text-zinc-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-default"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/tag:translate-x-[200%] transition-transform duration-700"></span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover/tag:from-purple-500/10 group-hover/tag:to-blue-500/10 transition-all duration-300"></span>
                                            <span className="relative">{tag}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Skills & Expertise
                        </h2>
                        <p className="text-zinc-400 text-lg">Technologies I work with</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-col items-center text-center mb-6">
                                        <div className="relative mb-4">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                            <span className="relative text-5xl transform group-hover:scale-110 transition-transform duration-500 inline-block">
                                                {skill.icon}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
                                            {skill.category}
                                        </h3>
                                    </div>

                                    <div className="space-y-2.5">
                                        {skill.technologies.map((tech, i) => (
                                            <div
                                                key={i}
                                                className="relative group/tech"
                                                style={{ animation: `slideInLeft 0.4s ease-out ${(index * 0.1) + (i * 0.05)}s both` }}
                                            >
                                                <div className="relative px-4 py-2 rounded-lg bg-zinc-800/40 border border-zinc-700/30 group-hover/tech:border-purple-500/50 transition-all duration-300 overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover/tech:translate-x-[200%] transition-transform duration-700"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover/tech:from-purple-500/10 group-hover/tech:to-blue-500/10 transition-all duration-300"></div>
                                                    <div className="relative flex items-center justify-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/tech:opacity-100 transition-all duration-300 group-hover/tech:shadow-lg group-hover/tech:shadow-purple-500/50"></span>
                                                        <span className="text-sm font-medium text-zinc-300 group-hover/tech:text-transparent group-hover/tech:bg-gradient-to-r group-hover/tech:from-purple-400 group-hover/tech:to-blue-400 group-hover/tech:bg-clip-text transition-all duration-300">
                                                            {tech}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideInLeft {
                        from { opacity: 0; transform: translateX(-10px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                `}</style>
            </section>

            {/*{Experience Section}*/}
            <div>
                <ExperienceSection />
            </div>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto relative">
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            A selection of my recent work
                        </p>
                    </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/70 hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                                onClick={() => setSelectedProject(project)}
                                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                {project.image}
                                            </div>
                                        </div>

                                        <button className="relative p-2.5 rounded-lg bg-zinc-800/60 border border-zinc-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-zinc-800 hover:border-purple-500/50 hover:scale-110 hover:rotate-12">
                                            <ExternalLink size={18} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                        </button>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-500">
                                            {project.title}
                                        </h3>

                                        <div className="inline-block relative group/badge">
                                            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 group-hover/badge:border-purple-500/50 group-hover/badge:text-purple-300 transition-all duration-300">
                                                {project.category}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="group/tech relative px-3 py-1.5 rounded-lg bg-zinc-800/40 border border-zinc-700/30 text-xs font-medium text-zinc-400 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300 overflow-hidden cursor-default"
                                            >
                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/tech:translate-x-[200%] transition-transform duration-700"></span>
                                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover/tech:from-purple-500/10 group-hover/tech:to-blue-500/10 transition-all duration-300"></span>
                                                <span className="relative">{tech}</span>
                                            </span>
                                        ))}

                                        {project.tech.length > 3 && (
                                            <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-xs font-medium text-purple-300">
                                                +{project.tech.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-6 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg shadow-purple-500/50"></div>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
            </section>

            {/*{Education Section}*/}
            <div>
                <EducationSection />
            </div>

            {/*{Certificate Section}*/}
            <div>
                <CertificatesSection />
            </div>


            <div>
                <ContactSection />
            </div>
            {/* Footer */}
            <footer className="py-8 px-6 border-t border-zinc-700/50 relative z-10">
                <div className="max-w-7xl mx-auto text-center text-zinc-400">
                    <p>© 2025 Portfolio. All rights reserved.</p>
                </div>
            </footer>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="group/modal relative w-full max-w-2xl p-8 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background gradients and shimmer */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/modal:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover/modal:translate-x-[200%] transition-transform duration-1000"></div>

                        {/* Corner accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover/modal:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover/modal:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex items-start justify-between mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover/modal:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative text-5xl transform group-hover/modal:scale-110 group-hover/modal:rotate-6 transition-all duration-500">
                                    {selectedProject.image}
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="group/close relative p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:rotate-12 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover/close:from-purple-500/20 group-hover/close:to-blue-500/20 transition-all duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/close:translate-x-[200%] transition-transform duration-700"></div>
                                <X size={20} className="relative text-zinc-400 group-hover/close:text-white transition-colors duration-300" />
                            </button>
                        </div>

                        <h3 className="text-3xl font-bold mb-2 group-hover/modal:text-transparent group-hover/modal:bg-gradient-to-r group-hover/modal:from-purple-300 group-hover/modal:to-blue-300 group-hover/modal:bg-clip-text transition-all duration-500">
                            {selectedProject.title}
                        </h3>

                        <div className="inline-block relative group/badge mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 group-hover/badge:border-purple-500/50 group-hover/badge:text-purple-300 transition-all duration-300">
                    {selectedProject.category}
                </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <p className="text-zinc-400 mb-6 leading-relaxed group-hover/modal:text-zinc-300 transition-colors duration-300">
                            {selectedProject.description}
                        </p>

                        <div className="mb-6 relative group/section">
                            <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider group-hover/section:text-purple-300 transition-colors duration-300">
                                Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="group/tech relative px-3 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700/30 text-sm font-medium text-zinc-400 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300 overflow-hidden cursor-default"
                                    >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/tech:translate-x-[200%] transition-transform duration-700"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover/tech:from-purple-500/10 group-hover/tech:to-blue-500/10 transition-all duration-300"></span>
                            <span className="relative">{tech}</span>
                        </span>
                                ))}
                            </div>
                            <div className="mt-4 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-x-0 group-hover/section:scale-x-100 transition-transform duration-700 origin-left shadow-lg shadow-purple-500/50"></div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn flex-1 relative px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-105 text-center"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></span>
                                <span className="relative flex items-center justify-center gap-2">
                        View Project
                        <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                            </a>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="group/close px-6 py-3 rounded-xl bg-zinc-800/80 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 font-medium text-zinc-300 hover:text-white overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover/close:from-purple-500/20 group-hover/close:to-blue-500/20 transition-all duration-300"></div>
                                <span className="relative">Close</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}