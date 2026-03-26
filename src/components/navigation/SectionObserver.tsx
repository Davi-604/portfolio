'use client';

import { useSectionStore } from '@/stores/useSectionStore';
import { Section } from '@/types/Section';
import { useEffect, useRef } from 'react';

type Props = {
    id: Section['id'];
    children: React.ReactNode;
};

export const SectionObserver = ({ id, children }: Props) => {
    const setCurrentSection = useSectionStore((state) => state.setCurrentSection);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCurrentSection(id);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '-10% 0px -10% 0px',
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
        <section id={id} ref={sectionRef} className="scroll-mt-20">
            {children}
        </section>
    );
};
