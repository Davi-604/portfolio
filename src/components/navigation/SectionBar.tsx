'use client';

import { sections } from '@/data/sections';
import { useSectionStore } from '@/stores/useSectionStore';
import { Section } from '@/types/Section';
import { motion } from 'framer-motion';

export const SectionBar = () => {
    const { currentSection, setCurrentSection } = useSectionStore();

    const handleScrollToSection = (sectionId: Section['id']) => {
        setCurrentSection(sectionId);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3"
            aria-label="Navegacao por secoes"
        >
            <div className="glass-strong rounded-full py-4 px-2 flex flex-col items-center gap-2">
                {sections.map((section, index) => {
                    const isActive = currentSection === section.id;
                    
                    return (
                        <button
                            key={section.id}
                            onClick={() => handleScrollToSection(section.id)}
                            className="group relative p-2"
                            aria-label={`Ir para ${section.label}`}
                            aria-current={isActive ? 'true' : undefined}
                        >
                            {/* Tooltip */}
                            <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-card text-foreground text-sm font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg border border-border">
                                {section.label}
                            </span>

                            {/* Dot */}
                            <motion.span
                                className={`block rounded-full transition-all duration-300 ${
                                    isActive 
                                        ? 'w-3 h-3 bg-primary shadow-lg shadow-primary/50' 
                                        : 'w-2 h-2 bg-muted-foreground/40 group-hover:bg-muted-foreground'
                                }`}
                                layoutId="sectionIndicator"
                            />
                        </button>
                    );
                })}
            </div>

            {/* Progress indicator */}
            <div className="h-16 w-px bg-border relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-full bg-primary"
                    initial={{ height: '0%' }}
                    animate={{
                        height: `${((sections.findIndex(s => s.id === currentSection) + 1) / sections.length) * 100}%`
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.nav>
    );
};
