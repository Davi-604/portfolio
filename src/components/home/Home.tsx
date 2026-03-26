'use client';

import { useSectionStore } from '@/stores/useSectionStore';
import { motion } from 'framer-motion';
import { ArrowDown, FileUser, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const Home = () => {
    const { currentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (currentSection === 'home' && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [currentSection, hasAnimated]);

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Davi-604', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/davicarvalhodev604/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:davi.developer604@gmail.com', label: 'Email' },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                         linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Disponivel para novos projetos
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
                        >
                            <span className="text-foreground">Ola, eu sou</span>
                            <br />
                            <span className="text-gradient">Davi Carvalho</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Desenvolvedor Full-Stack especializado em criar 
                            <span className="text-foreground font-medium"> solucoes digitais modernas</span>, 
                            performaticas e escalaveis que transformam ideias em realidade.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10"
                        >
                            <button
                                onClick={() => handleScrollToSection('projects')}
                                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 w-full sm:w-auto"
                            >
                                <span className="relative z-10">Ver projetos</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button
                                onClick={() => handleScrollToSection('contact')}
                                className="px-8 py-4 glass font-semibold rounded-xl transition-all duration-300 hover:bg-secondary/80 hover:-translate-y-0.5 w-full sm:w-auto"
                            >
                                Entrar em contato
                            </button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                            <a
                                href="https://drive.google.com/file/d/1v95ArLUPhvC-qjabiGq9C4-Hcy0DU-Y4/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <FileUser className="w-5 h-5" />
                                <span className="text-sm font-medium">Curriculo</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        variants={floatVariants}
                        className="relative"
                    >
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-emerald-500/30 rounded-full blur-2xl scale-110" />
                            
                            {/* Main image container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                                <Image
                                    src="/images/me.jpg"
                                    alt="Davi Carvalho - Desenvolvedor Full-Stack"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -top-4 -right-4 px-4 py-2 glass-strong rounded-xl shadow-lg"
                            >
                                <span className="text-sm font-semibold text-primary">Full-Stack</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -bottom-2 -left-4 px-4 py-2 glass-strong rounded-xl shadow-lg"
                            >
                                <span className="text-sm font-semibold text-foreground">+5 Projetos</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                onClick={() => handleScrollToSection('about')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Rolar para baixo"
            >
                <span className="text-xs font-medium tracking-wider uppercase">Explorar</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.button>
        </section>
    );
};
