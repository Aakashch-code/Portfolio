import React from 'react';
import { Briefcase, Code, Award } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        { label: "PROJECTS COMPLETED", value: "3+", icon: Briefcase },
        { label: "YEARS EXPERIENCE", value: "Fresher", icon: Award },
        { label: "TECHNOLOGIES", value: "20+", icon: Code }
    ];

    return (
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
    );
};

export default StatsSection;