import React from 'react';
import { motion } from 'framer-motion';
const skillsData = [
    {
        category: "Backend Development",
        icon: "⚙️",
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Docker",
            "REST APIs",
            "Hibernate/JPA",
            "Maven"
        ]
    },
    {
        category: "Tools & Testing",
        icon: "🔍",
        technologies: [
            "Git",
            "GitHub",
            "Postman",
            "JUnit",
            "Mockito",
            "DataGrip"
        ]
    },
    {
        category: "Frontend Familiarity",
        icon: "💻",
        technologies: [
            "React",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Component-based UI",
            "API Integration",
            "Basic State Management"
        ]
    },
    {
        category: "Database",
        icon: "🗄️",
        technologies: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
        ]
    }
];

// Parent container variant for staggering children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

// Card variant with spring physics
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    }
};

export default function SkillsSection({ skills = skillsData }) {
    return (
        <section id="skills" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
                    >
                        Featured Skills & Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-zinc-400 text-lg"
                    >
                        Technologies I work with
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }} // Triggers animation slightly before element hits view
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }} // Subtle lift on hover
                            whileTap={{ scale: 0.98 }} // Tactile feedback on click/touch
                            className="group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/70 transition-colors duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div className="relative mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                        <span
                                            className="relative text-5xl transform group-hover:scale-110 transition-transform duration-500 inline-block"
                                            role="img"
                                            aria-label={`${skill.category} icon`}
                                        >
                                            {skill.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
                                        {skill.category}
                                    </h3>
                                </div>

                                <div className="space-y-2.5">
                                    {skill.technologies.map((tech, i) => (
                                        <div key={i} className="relative group/tech">
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}