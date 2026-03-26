'use client';

import { Project } from '@/types/Project';
import { ExternalLink, Github, Linkedin, Play, Star } from 'lucide-react';
import Image from 'next/image';

type Props = {
    project: Project;
    isFeatured?: boolean;
};

export const ProjectCard = ({ project, isFeatured = false }: Props) => {
    if (isFeatured) {
        return (
            <div className="group relative glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                        <Image
                            src={`/${project.thumbUrl}`}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                            <Star className="w-4 h-4" />
                            Destaque
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {project.name}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                            {project.desc?.replace(/<[^>]*>/g, '')}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.usedSkills.slice(0, 6).map((skill) => (
                                <span
                                    key={skill.id}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                                >
                                    {skill.label}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {project.webUrl && (
                                <a
                                    href={project.webUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Ver projeto
                                </a>
                            )}
                            {project.gitHubUrl && (
                                <a
                                    href={project.gitHubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 glass font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5"
                                >
                                    <Github className="w-4 h-4" />
                                    Codigo
                                </a>
                            )}
                            {project.youtubeUrl && (
                                <a
                                    href={project.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 glass font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5"
                                >
                                    <Play className="w-4 h-4" />
                                    Video
                                </a>
                            )}
                            {project.linkedinUrl && (
                                <a
                                    href={project.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 glass font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={`/${project.thumbUrl}`}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {project.isStatic && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                        Estatico
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                    {project.desc?.replace(/<[^>]*>/g, '')}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.usedSkills.slice(0, 4).map((skill) => (
                        <span
                            key={skill.id}
                            className="px-2 py-0.5 rounded-md text-xs font-medium bg-secondary/50 text-muted-foreground"
                        >
                            {skill.label}
                        </span>
                    ))}
                    {project.usedSkills.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-secondary/50 text-muted-foreground">
                            +{project.usedSkills.length - 4}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                    {project.webUrl && (
                        <a
                            href={project.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                        </a>
                    )}
                    {project.gitHubUrl && (
                        <a
                            href={project.gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 glass rounded-lg transition-all duration-300 hover:border-primary/50"
                            aria-label="Ver codigo no GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {project.youtubeUrl && (
                        <a
                            href={project.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 glass rounded-lg transition-all duration-300 hover:border-primary/50"
                            aria-label="Ver video no YouTube"
                        >
                            <Play className="w-4 h-4" />
                        </a>
                    )}
                    {project.linkedinUrl && (
                        <a
                            href={project.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 glass rounded-lg transition-all duration-300 hover:border-primary/50"
                            aria-label="Ver post no LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
