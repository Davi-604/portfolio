'use client';

import { useSectionStore } from '@/stores/useSectionStore';
import { motion } from 'framer-motion';
import { ArrowDown, FileUser, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
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
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl" />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.02]"
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
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full acrylic text-sm font-medium text-primary">
                            <Sparkles className="w-4 h-4" />
                            Disponivel para novos projetos
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8"
                    >
                        <span className="text-foreground">Ola, eu sou</span>
                        <br />
                        <span className="text-gradient">Davi Carvalho</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
                    >
                        Desenvolvedor Full-Stack especializado em criar 
                        <span className="text-foreground font-medium"> solucoes digitais modernas</span>, 
                        performaticas e escalaveis que transformam ideias em realidade.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-12"
                    >
                        <button
                            onClick={() => handleScrollToSection('projects')}
                            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 w-full sm:w-auto"
                        >
                            <span className="relative z-10">Ver projetos</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button
                            onClick={() => handleScrollToSection('contact')}
                            className="px-8 py-4 acrylic acrylic-hover font-semibold rounded-xl w-full sm:w-auto"
                        >
                            Entrar em contato
                        </button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl acrylic acrylic-hover text-muted-foreground hover:text-primary"
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1v95ArLUPhvC-qjabiGq9C4-Hcy0DU-Y4/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 rounded-xl acrylic acrylic-hover text-muted-foreground hover:text-primary"
                        >
                            <FileUser className="w-5 h-5" />
                            <span className="text-sm font-medium">Curriculo</span>
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30"
                    >
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-foreground">5+</div>
                            <div className="text-sm text-muted-foreground mt-1">Projetos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-foreground">2+</div>
                            <div className="text-sm text-muted-foreground mt-1">Anos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-foreground">14+</div>
                            <div className="text-sm text-muted-foreground mt-1">Tecnologias</div>
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
