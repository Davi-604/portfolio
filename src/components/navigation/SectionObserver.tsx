import React, { useEffect, useRef, useState } from 'react';
import { useSectionStore } from '@/stores/useSectionStore';
import { Section } from '@/types/Section';
import { motion } from 'framer-motion';

type SectionProps = {
    id: Section['id'];
    children: React.ReactNode;
};

export const SectionObserver = ({ id, children }: SectionProps) => {
    const setCurrentSection = useSectionStore((state) => state.setCurrentSection);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTimeout(() => {
                    if (entry.isIntersecting) {
                        setCurrentSection(id);
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }, 100);
            },
            {
                threshold: window.innerWidth <= 768 ? 0.1 : 0.2,
                rootMargin: '0px 0px -20% 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [id, setCurrentSection]);

    return (
        <section id={id} ref={sectionRef}>
            {children}
        </section>
    );
};
