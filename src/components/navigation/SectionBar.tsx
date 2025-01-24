'use client';

import { sections } from '@/data/sections';
import { FaCircle } from 'react-icons/fa';
import { SectionBarItem } from './SectionBarItem';
import { useSectionStore } from '@/stores/useSectionStore';
import { Section } from '@/types/Section';
import { motion } from 'framer-motion';
import { slowFadeInRight } from '@/animations/fadeIn';

export const SectionBar = () => {
    const { currentSection, setCurrentSection } = useSectionStore();

    const lastSectionElementIndex: number = sections.length - 1;

    const handleScrollToSection = (sectionId: Section['id']) => {
        setCurrentSection(sectionId);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={slowFadeInRight}
            className=" hidden fixed z-50 bottom-4 right-2 text-primary flex-col justify-center lg:flex"
        >
            <div
                className={`mx-auto transition-all ease-in ${
                    currentSection === sections[0].id ? 'opacity-100' : 'opacity-40'
                }`}
            >
                <FaCircle />
            </div>
            {sections.map((sec, index) => (
                <SectionBarItem
                    key={index}
                    currentSection={currentSection}
                    onClick={handleScrollToSection}
                    section={sec}
                />
            ))}
            <div
                className={`mx-auto transition-all ease-in ${
                    currentSection === sections[lastSectionElementIndex].id
                        ? 'opacity-100'
                        : 'opacity-40'
                }`}
            >
                <FaCircle />
            </div>
        </motion.div>
    );
};
