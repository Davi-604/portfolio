'use client';

import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Header } from './home/Header';
import { Home } from './home/Home';
import { SectionBar } from './navigation/SectionBar';
import { SectionObserver } from './navigation/SectionObserver';
import { Projects } from './projects/Projects';
import { Skills } from './skill/Skills';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export const MainContainer = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'; // Evita conflitos de scroll
    }, []);

    return (
        <AnimatePresence mode="wait">
            <main className="flex flex-col h-full overflow-hidden">
                <Header />
                <SectionObserver id="home">
                    <Home />
                </SectionObserver>
                <SectionObserver id="about">
                    <About />
                </SectionObserver>
                <SectionObserver id="projects">
                    <Projects />
                </SectionObserver>
                <SectionObserver id="skills">
                    <Skills />
                </SectionObserver>
                <SectionBar />
                <SectionObserver id="contact">
                    <Contact />
                </SectionObserver>
            </main>
        </AnimatePresence>
    );
};
