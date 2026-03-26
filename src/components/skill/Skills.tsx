'use client';

import { skills } from '@/data/skills';
import { useSectionStore } from '@/stores/useSectionStore';
import { motion, useInView } from 'framer-motion';
import { Code2, Layers, Server, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

const categories = [
    { id: 'frontend', label: 'Front-end', icon: Code2, description: 'Interfaces modernas e responsivas' },
    { id: 'backend', label: 'Back-end', icon: Server, description: 'APIs robustas e escalaveis' },
    { id: 'corporate', label: 'Soft Skills', icon: Users, description: 'Habilidades interpessoais' },
];

export const Skills = () => {
    const { currentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [activeCategory, setActiveCategory] = useState('frontend');
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView || currentSection === 'skills') {
            setHasAnimated(true);
        }
    }, [currentSection, isInView]);

    const filteredSkills = skills.filter((skill) => skill.role === activeCategory);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-32 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-1/2 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
                            Stack Tecnica
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Minhas <span className="text-gradient">habilidades</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Tecnologias e ferramentas que utilizo para criar solucoes de alta qualidade
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                                        : 'glass text-muted-foreground hover:text-foreground hover:border-primary/30'
                                }`}
                            >
                                <category.icon className="w-5 h-5" />
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* Category Description */}
                    <motion.p
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-muted-foreground mb-10"
                    >
                        {categories.find((c) => c.id === activeCategory)?.description}
                    </motion.p>

                    {/* Skills Grid */}
                    <motion.div
                        key={activeCategory}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                variants={itemVariants}
                                className="group relative glass rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                            >
                                {/* Icon */}
                                <div className="mb-3 flex justify-center">
                                    {skill.Icon && (
                                        <skill.Icon
                                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.iconColor || 'hsl(var(--primary))' }}
                                        />
                                    )}
                                </div>

                                {/* Label */}
                                <h3 className="font-semibold text-foreground mb-1 text-sm">
                                    {skill.label}
                                </h3>

                                {/* Description Tooltip */}
                                {skill.desc && (
                                    <p className="text-xs text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {skill.desc}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* All Technologies Count */}
                    <motion.div variants={itemVariants} className="text-center mt-12">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass">
                            <Layers className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">
                                <span className="text-foreground font-semibold">{skills.length}</span> tecnologias e habilidades no total
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
