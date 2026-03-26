'use client';

import { useSectionStore } from '@/stores/useSectionStore';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code2, GraduationCap, Rocket, Target, Users, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const highlights = [
    { icon: Code2, label: 'Projetos Entregues', value: '5+' },
    { icon: Briefcase, label: 'Anos de Experiencia', value: '2+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '3+' },
    { icon: Zap, label: 'Tecnologias', value: '14+' },
];

const timeline = [
    {
        year: '2023',
        title: 'Inicio da Jornada',
        description: 'Comecei meus estudos em programacao, focando em fundamentos de desenvolvimento web.',
        icon: GraduationCap,
    },
    {
        year: '2024',
        title: 'Primeiros Projetos',
        description: 'Desenvolvi meus primeiros projetos pessoais e comecei a trabalhar com tecnologias modernas como React e Next.js.',
        icon: Rocket,
    },
    {
        year: '2025',
        title: 'Projetos Comerciais',
        description: 'Entreguei projetos comerciais para clientes reais, consolidando experiencia pratica em desenvolvimento Full-Stack.',
        icon: Target,
    },
];

export const About = () => {
    const { currentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView || currentSection === 'about') {
            setHasAnimated(true);
        }
    }, [currentSection, isInView]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
                            Sobre mim
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Conheca minha <span className="text-gradient">trajetoria</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Desenvolvedor apaixonado por criar solucoes que fazem a diferenca
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left - About Text */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="prose prose-lg dark:prose-invert">
                                <p className="text-muted-foreground leading-relaxed">
                                    Me chamo <span className="text-foreground font-semibold">Davi Carvalho</span> e 
                                    sou um programador Full-Stack que esta sempre em busca de entregar as melhores 
                                    solucoes, seja solucionando problemas de forma inteligente ou criando 
                                    implementacoes inovadoras.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Com uma trajetoria marcada por diversas experiencias dentro do desenvolvimento 
                                    de software, adquiri uma visao clara sobre a responsabilidade do meu trabalho. 
                                    Aprendi que o verdadeiro proposito do desenvolvimento nao e apenas 
                                    &quot;fazer funcionar&quot;, mas sim entregar sistemas <span className="text-primary font-medium">performaticos</span>, 
                                    <span className="text-primary font-medium"> seguros</span> e que resolvam problemas reais de forma definitiva e escalavel.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Meu objetivo e agregar valor ao ambiente em que estou inserido, contribuindo 
                                    para o sucesso das pessoas e dos projetos ao meu redor.
                                </p>
                            </div>

                            {/* Highlights Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                {highlights.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        variants={itemVariants}
                                        className="p-4 rounded-xl glass hover:border-primary/30 transition-colors"
                                    >
                                        <item.icon className="w-6 h-6 text-primary mb-2" />
                                        <div className="text-2xl font-bold text-foreground">{item.value}</div>
                                        <div className="text-sm text-muted-foreground">{item.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Timeline */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        variants={itemVariants}
                                        className="relative pl-8 lg:pl-12"
                                    >
                                        {/* Timeline line */}
                                        <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                                            {index < timeline.length - 1 && (
                                                <div className="absolute top-12 left-0 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
                                            )}
                                        </div>

                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-1 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                                            <item.icon className="w-4 h-4 text-primary" />
                                        </div>

                                        {/* Content */}
                                        <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                                            <span className="text-sm font-mono text-primary">{item.year}</span>
                                            <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
