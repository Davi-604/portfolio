'use client';

import { useSectionStore } from '@/stores/useSectionStore';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Copy, FileUser, Github, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';
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

const socialLinks = [
    { 
        icon: Github, 
        label: 'GitHub', 
        href: 'https://github.com/Davi-604',
        username: '@Davi-604',
        color: 'hover:text-foreground'
    },
    { 
        icon: Linkedin, 
        label: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/davicarvalhodev604/',
        username: 'Davi Carvalho',
        color: 'hover:text-blue-500'
    },
    { 
        icon: Mail, 
        label: 'Email', 
        href: 'mailto:davi.developer604@gmail.com',
        username: 'davi.developer604@gmail.com',
        color: 'hover:text-primary'
    },
];

export const Contact = () => {
    const { currentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [copied, setCopied] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView || currentSection === 'contact') {
            setHasAnimated(true);
        }
    }, [currentSection, isInView]);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('davi.developer604@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-32 overflow-hidden bg-muted/30"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
                            Contato
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Vamos <span className="text-gradient">conversar</span>?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Estou disponivel para novos projetos e oportunidades. Entre em contato e vamos criar algo incrivel juntos.
                        </p>
                    </motion.div>

                    {/* Main Contact Card */}
                    <motion.div variants={itemVariants} className="glass rounded-2xl p-8 lg:p-12 mb-8">
                        <div className="grid lg:grid-cols-2 gap-10">
                            {/* Left Side - CTA */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Envie uma mensagem</h3>
                                        <p className="text-sm text-muted-foreground">Respondo em ate 24 horas</p>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Tem um projeto em mente ou quer discutir uma oportunidade? 
                                    Ficarei feliz em conversar sobre como posso ajudar a transformar suas ideias em realidade.
                                </p>

                                {/* Email Copy */}
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 mb-6">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span className="text-foreground font-medium flex-1 text-sm sm:text-base">
                                        davi.developer604@gmail.com
                                    </span>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                                        aria-label="Copiar email"
                                    >
                                        <Copy className={`w-4 h-4 ${copied ? 'text-primary' : 'text-muted-foreground'}`} />
                                    </button>
                                </div>

                                {copied && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-sm text-primary mb-4"
                                    >
                                        Email copiado!
                                    </motion.p>
                                )}

                                {/* Location */}
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>Brasil</span>
                                </div>
                            </div>

                            {/* Right Side - Links */}
                            <div className="flex flex-col justify-center">
                                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                    Conecte-se
                                </h4>
                                <div className="space-y-3">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 ${link.color}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <link.icon className="w-5 h-5" />
                                                <div>
                                                    <div className="font-medium text-foreground">{link.label}</div>
                                                    <div className="text-sm text-muted-foreground">{link.username}</div>
                                                </div>
                                            </div>
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>
                                    ))}
                                </div>

                                {/* Resume Link */}
                                <a
                                    href="https://drive.google.com/file/d/1v95ArLUPhvC-qjabiGq9C4-Hcy0DU-Y4/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                                >
                                    <FileUser className="w-5 h-5" />
                                    Baixar curriculo
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Banner */}
                    <motion.div variants={itemVariants} className="text-center glass rounded-2xl p-8 glow">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Pronto para comecar?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Vamos transformar sua ideia em um produto digital de alta qualidade.
                        </p>
                        <a
                            href="mailto:davi.developer604@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                            <Mail className="w-5 h-5" />
                            Iniciar conversa
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                variants={itemVariants}
                initial="hidden"
                animate={hasAnimated ? 'visible' : 'hidden'}
                className="mt-24 pt-8 border-t border-border"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span>Desenvolvido por</span>
                            <span className="font-semibold text-foreground">Davi Carvalho</span>
                        </div>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <div>
                            {new Date().getFullYear()} - Todos os direitos reservados
                        </div>
                    </div>
                </div>
            </motion.footer>
        </section>
    );
};
