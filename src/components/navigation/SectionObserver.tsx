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
                if (entry.isIntersecting) {
                    setCurrentSection(id);
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: [0.2],
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

    const animatedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    {child}
                </motion.div>
            );
        }

        return child;
    });

    return (
        <section id={id} ref={sectionRef}>
            {children}
        </section>
    );
};
