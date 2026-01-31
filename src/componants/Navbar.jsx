import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { href: '#about', label: 'About', icon: '👤' },
        { href: '#skills', label: 'Skills', icon: '⚡' },
        { href: '#hackathons', label: 'Hackathon', icon: '👔' },
        { href: '#projects', label: 'Projects', icon: '💼' },
        { href: '#education', label: 'Education', icon: '🎓' },
        { href: '#certificates', label: 'Certificates', icon: '🏅' },
        { href: '#contact', label: 'Contact', icon: '📧' }
    ];

    return (
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
    );
};

export default Navbar;