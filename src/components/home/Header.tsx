'use client';

import { sections } from '@/data/sections';
import { useSectionStore } from '@/stores/useSectionStore';
import { Section } from '@/types/Section';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Header = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (sectionId: Section['id']) => {
        setCurrentSection(sectionId);
        setIsMobileMenuOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'glass-strong shadow-lg py-3' 
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => handleScrollToSection('home')}
                        className="text-xl font-bold tracking-tight"
                    >
                        <span className="text-primary">Davi</span>
                        <span className="text-foreground">Carvalho</span>
                        <span className="text-primary">.</span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleScrollToSection(section.id)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                    currentSection === section.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                {section.label}
                                {currentSection === section.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button (Desktop) */}
                    <button
                        onClick={() => handleScrollToSection('contact')}
                        className="hidden md:flex px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                    >
                        Contato
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg glass text-foreground"
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
            >
                <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleScrollToSection(section.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                                currentSection === section.id
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                            }`}
                        >
                            {section.Icon && <section.Icon className="w-5 h-5" />}
                            <span className="font-medium">{section.label}</span>
                        </button>
                    ))}
                    <button
                        onClick={() => handleScrollToSection('contact')}
                        className="mt-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-center"
                    >
                        Entrar em contato
                    </button>
                </nav>
            </motion.div>
        </motion.header>
    );
};
