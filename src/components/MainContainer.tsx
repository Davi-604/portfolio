'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Header } from './home/Header';
import { Home } from './home/Home';
import { SectionBar } from './navigation/SectionBar';
import { SectionObserver } from './navigation/SectionObserver';
import { Projects } from './projects/Projects';
import { Skills } from './skill/Skills';

export const MainContainer = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    return (
        <AnimatePresence mode="wait">
            <main className="relative">
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
                
                <SectionObserver id="contact">
                    <Contact />
                </SectionObserver>

                <SectionBar />
            </main>
        </AnimatePresence>
    );
};
