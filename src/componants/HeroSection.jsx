import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronRight, Terminal, Copy, Check } from 'lucide-react';

// Helper component for the Terminal Lines to add syntax highlighting
const TerminalLine = ({ text }) => {
    // Simple logic to colorize keys and values
    const parts = text.split(':');
    const key = parts[0];
    const value = parts.slice(1).join(':');

    return (
        <div className="block">
            <span className="text-blue-400">{key}</span>
            {value && <span className="text-zinc-500">:</span>}
            {value && <span className="text-green-400">{value}</span>}
        </div>
    );
};

const HeroSection = () => {
    const [terminalLines, setTerminalLines] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    // The data to display
    const fullLog = [
        "> initializing_profile...",
        "> loading_modules: [Spring Boot, Java, Docker]",
        "> architecture: Microservices",
        "> system_status: STABLE",
        "> executing: build_scalable_systems()",
        "> user_identity: Aakash_Chauhan",
        "> profile_loaded_successfully."
    ];

    // Typing effect logic
    useEffect(() => {
        let currentLineIndex = 0;
        let currentCharIndex = 0;
        let currentText = "";
        let timeoutId;

        const typeChar = () => {
            if (currentLineIndex >= fullLog.length) return;

            const line = fullLog[currentLineIndex];

            // Add next character
            currentText = line.slice(0, currentCharIndex + 1);

            // Update state safely
            setTerminalLines(prev => {
                const newLines = [...prev];
                newLines[currentLineIndex] = currentText;
                return newLines;
            });

            currentCharIndex++;

            if (currentCharIndex > line.length) {
                // Line finished, move to next
                currentLineIndex++;
                currentCharIndex = 0;
                currentText = "";
                // Pause briefly between lines
                timeoutId = setTimeout(typeChar, 400);
            } else {
                // Type next char (randomized speed for realism)
                timeoutId = setTimeout(typeChar, Math.random() * 30 + 20);
            }
        };

        // Initialize first line
        setTerminalLines([""]);
        timeoutId = setTimeout(typeChar, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("aakashch.code@gmail.com");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section id="hero" className="relative pt-32 pb-20 px-6 z-10 min-h-[90vh] flex items-center overflow-hidden">

            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text & CTA */}
                <div className="fade-in-up"> {/* Assume you might have a basic fade-in CSS class, or standard appearing */}

                    {/* Live Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/40 backdrop-blur-md border border-green-500/20 text-green-400 text-xs font-mono mb-8 hover:bg-zinc-800/60 transition-colors cursor-default select-none">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        System Status: Online & Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Backend <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient-x">
                            Developer
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                        Architecting the logic behind the screen. I build resilient <span className="text-zinc-200 font-semibold">Spring Boot backends</span> and robust database systems that ensure data integrity and security.</p>

                    {/* Primary Actions */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                            aria-label="Contact Me"
                        >
                            Start Collaboration
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 border border-zinc-700 bg-zinc-800/40 backdrop-blur-md text-zinc-300 font-medium rounded-xl hover:bg-zinc-800/80 hover:text-white hover:border-zinc-600 transition-all active:scale-[0.98]"
                            aria-label="View Projects"
                        >
                            Explore Projects
                        </a>
                    </div>

                    {/* Social Links with Tooltips */}
                    <div className="flex gap-5 items-center">
                        <SocialLink href="https://github.com/Aakashch-code" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/aakashch-code" icon={<Linkedin size={20} />} label="LinkedIn" />

                        {/* Copy Email Interaction */}
                        <button
                            onClick={copyEmail}
                            className="group relative p-3 bg-zinc-900/50 backdrop-blur-md rounded-lg border border-zinc-800 hover:border-purple-500/50 hover:text-purple-400 text-zinc-400 transition-all"
                            aria-label="Copy Email Address"
                        >
                            {isCopied ? <Check size={20} /> : <Mail size={20} />}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {isCopied ? "Copied!" : "Copy Email"}
                            </span>
                        </button>

                        <SocialLink href="/my_resume.pdf" icon={<FileText size={20} />} label="Resume" />
                    </div>
                </div>

                {/* Right Column: Interactive Terminal */}
                <div className="relative group perspective-1000 hidden lg:block">
                    {/* Decorative Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>

                    <div className="relative w-full bg-[#0d0d0e] rounded-xl border border-zinc-800/60 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-2">
                        {/* Window Header */}
                        <div className="bg-[#1a1a1c] px-4 py-3 flex items-center justify-between border-b border-zinc-800/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff4035] transition-colors cursor-pointer"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#eebb1e] transition-colors cursor-pointer"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#1eb833] transition-colors cursor-pointer"></div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono select-none">
                                <Terminal size={12} />
                                aakash@dev-env: ~
                            </div>
                            <div className="w-10"></div> {/* Spacer for centering */}
                        </div>

                        {/* Window Content */}
                        <div className="p-6 h-[350px] font-mono text-sm overflow-y-auto custom-scrollbar">
                            <div className="flex flex-col gap-1">
                                {terminalLines.map((line, index) => (
                                    <TerminalLine key={index} text={line} />
                                ))}
                                <div className="animate-pulse w-2 h-5 bg-zinc-500 mt-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 bg-zinc-900/50 backdrop-blur-md rounded-lg border border-zinc-800 hover:border-blue-500/50 hover:text-blue-400 text-zinc-400 transition-all"
        aria-label={label}
    >
        {icon}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
        </span>
    </a>
);

export default HeroSection;