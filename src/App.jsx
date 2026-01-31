import React, { useState } from 'react';
import { Briefcase, Code, Award, Menu, X } from 'lucide-react';

// Make sure these paths are correct in your folder structure
import CertificatesSection from "./componants/Certificates.jsx";
import ExperienceSection from "./componants/Experience.jsx";
import EducationSection from "./componants/Education.jsx";
import ContactSection from "./componants/Contact.jsx";
import HeroSection from "./componants/HeroSection.jsx";
import ProjectsSection from "./componants/Projects.jsx";
import SkillsSection from "./componants/Skills.jsx";

export default function PremiumPortfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { href: '#about', label: 'About', icon: '👤' },
        { href: '#skills', label: 'Skills', icon: '⚡' },
        { href: '#experience', label: 'Experience', icon: '👔' },
        { href: '#projects', label: 'Projects', icon: '💼' },
        { href: '#education', label: 'Education', icon: '🎓' },
        { href: '#certificates', label: 'Certificates', icon: '🏅' },
        { href: '#contact', label: 'Contact', icon: '📧' }
    ];

    const stats = [
        { label: "PROJECTS COMPLETED", value: "3+", icon: Briefcase },
        { label: "YEARS EXPERIENCE", value: "Fresher", icon: Award },
        { label: "TECHNOLOGIES", value: "20+", icon: Code }
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-100 relative selection:bg-purple-500/30">

            {/* --- Global Background Layer --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black"></div>
                {/* Subtle animated blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5 supports-[backdrop-filter]:bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            Portfolio
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-zinc-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg flex items-center gap-3"
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Main Content Wrapper */}
            <main className="relative z-10 pt-20">

                <div id="home">
                    <HeroSection />
                </div>

                {/* Stats */}
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold text-zinc-500 tracking-wider">{stat.label}</span>
                                    <stat.icon className="text-purple-400" size={20} />
                                </div>
                                <div className="text-4xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="about" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="group relative p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/70 transition-all">
                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <div className="w-48 h-48 rounded-2xl bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700/50">
                                    <img src="/pfp.jpg" alt="Aakash" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-6 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-white">Hi, I'm Aakash Chauhan</h2>
                                    <div className="text-zinc-400 space-y-4 max-w-2xl">
                                        <p>I have hands-on experience with the technologies I use. As a backend-focused developer, I'm most comfortable working with Spring Boot and also familiar with the Spring Framework.</p>
                                        <p>I work with modern technologies and frameworks, constantly learning and adapting to new trends in the industry.</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        {['Backend Focused', 'Spring Boot', 'Problem Solver'].map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="skills"><SkillsSection /></div>
                <div id="experience"><ExperienceSection /></div>

                {/* Projects Section - CLEAN WRAPPER */}
                <div id="projects" className="scroll-mt-20">
                    <ProjectsSection />
                </div>

                <div id="education"><EducationSection /></div>
                <div id="certificates"><CertificatesSection /></div>
                <div id="contact"><ContactSection /></div>

            </main>

            <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-900">
                <p>© 2025 Aakash Chauhan • All rights reserved.</p>
            </footer>
        </div>
    );
}