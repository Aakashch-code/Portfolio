import React from 'react';
import Background from "./componants/ui/Background.jsx";
import Navbar from "./componants/Navbar.jsx";
import HeroSection from "./componants/HeroSection.jsx";
import StatsSection from "./componants/Stats.jsx";
import AboutSection from "./componants/About.jsx";
import SkillsSection from "./componants/Skills.jsx";
import ExperienceSection from "./componants/Experience.jsx";
import ProjectsSection from "./componants/Projects.jsx";
import EducationSection from "./componants/Education.jsx";
import CertificatesSection from "./componants/Certificates.jsx";
import ContactSection from "./componants/Contact.jsx";
import Footer from "./componants/Footer.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-black text-zinc-100 relative selection:bg-purple-500/30">
            <Background />
            <Navbar />

            <main className="relative z-10 pt-20">
                <HeroSection />
                <StatsSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <div id="projects" className="scroll-mt-20">
                    <ProjectsSection />
                </div>
                <EducationSection />
                <CertificatesSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}