import { LuMonitorCog } from 'react-icons/lu';
import { DefaultSectionTittle } from '../default/DefaultSectionTittle';
import { projects } from '@/data/projects';
import { ProjectDialog } from './ProjectDialog';
import { motion } from 'framer-motion';
import { useSectionStore } from '@/stores/useSectionStore';
import {
    fadeInDown,
    fadeInUp,
    slowFadeInLeft,
    slowFadeInRight,
} from '@/animations/fadeIn';
import { useEffect, useState } from 'react';

export const Projects = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (currentSection === 'projects' && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [currentSection, hasAnimated]);

    return (
        <div className="px-3 py-10 min-h-screen flex flex-col items-center">
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Projetos" Icon={LuMonitorCog} />
            </motion.div>
            <div className="mt-10 flex flex-wrap items-center justify-center max-w-[1100px] gap-5">
                {projects.map((pjt, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : ''}
                        variants={slowFadeInRight}
                    >
                        <ProjectDialog project={pjt} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
