import React from 'react';
import { Shield, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        label: "API Endpoints",
        value: "45+",
        desc: "RESTful Architecture",
        icon: Server,
    },
    {
        label: "Security Protocol",
        value: "JWT + RBAC",
        desc: "Stateless Auth",
        icon: Shield,
    },
    {
        label: "Data Engineering",
        value: "Polyglot",
        desc: "Postgres & MongoDB",
        icon: Database,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const StatsSection = () => {
    return (
        <section className="py-6 px-6 relative z-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="
                            group relative p-6 rounded-3xl
                            bg-zinc-900/40 backdrop-blur-md
                            border border-zinc-800/50 hover:border-zinc-700/80
                            transition-all duration-300
                        "
                    >
                        {/* Hover Gradient Effect (Purple to match profile) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Header: Label & Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase group-hover:text-zinc-400 transition-colors">
                                    {stat.label}
                                </span>
                                <div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-all duration-300">
                                    <stat.icon size={18} />
                                </div>
                            </div>

                            {/* Main Value */}
                            <div className="mt-auto">
                                <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-medium text-zinc-500 mt-1 group-hover:text-zinc-400 transition-colors">
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default StatsSection;