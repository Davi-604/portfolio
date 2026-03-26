'use client';

import { projects } from '@/data/projects';
import { useSectionStore } from '@/stores/useSectionStore';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

export const Projects = () => {
    const { currentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView || currentSection === 'projects') {
            setHasAnimated(true);
        }
    }, [currentSection, isInView]);

    // Separate featured project (first one) from others
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-32 overflow-hidden bg-muted/30"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
                            Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Projetos em <span className="text-gradient">destaque</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Confira alguns dos projetos que desenvolvi, desde marketplaces completos ate sistemas de gestao
                        </p>
                    </motion.div>

                    {/* Featured Project */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <ProjectCard project={featuredProject} isFeatured />
                    </motion.div>

                    {/* Other Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {otherProjects.map((project) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
