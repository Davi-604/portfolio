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

export const Projects = () => {
    const { currentSection, setCurrentSection } = useSectionStore();

    return (
        <div className="px-3 py-10 flex flex-col items-center">
            <motion.div
                initial="hidden"
                animate={currentSection === 'projects' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Projetos" Icon={LuMonitorCog} />
            </motion.div>
            <div className="mt-10 flex flex-wrap justify-center max-w-[1100px] gap-5">
                {projects.map((pjt, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={currentSection === 'projects' ? 'visible' : 'hidden'}
                        variants={slowFadeInRight}
                    >
                        <ProjectDialog project={pjt} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
