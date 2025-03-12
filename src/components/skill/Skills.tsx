import { skills } from '@/data/skills';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { LuChartNetwork } from 'react-icons/lu';
import { DefaultSectionTittle } from '../default/DefaultSectionTittle';
import { useSectionStore } from '@/stores/useSectionStore';
import { fadeInDown, fadeInUp, slowFadeInLeft } from '@/animations/fadeIn';
import { useEffect, useState } from 'react';

export const Skills = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (currentSection === 'skills' && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [currentSection, hasAnimated]);

    return (
        <div className="px-3 py-10 bg-primary-foreground min-h-screen flex flex-col items-center overflow-y-hidden">
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Habilidades" Icon={LuChartNetwork} />
            </motion.div>

            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={slowFadeInLeft}
                className="mt-10 text-xl text-left pb-2 border-b-4 inline-block border-muted-foreground"
            >
                Tecnologias de front-end
            </motion.div>
            <div className="grid grid-cols-2  mt-7 max-w-[1100px] gap-5 md:grid-cols-3 lg:grid-cols-4">
                {skills
                    .filter((skill) => skill.role === 'frontend')
                    .map((skill, index) => (
                        <motion.div
                            initial="hidden"
                            animate={hasAnimated ? 'visible' : ''}
                            variants={slowFadeInLeft}
                            className="flex"
                            key={index}
                        >
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
            </div>
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={slowFadeInLeft}
                className="mt-10 text-xl text-left pb-2 border-b-4 inline-block border-muted-foreground"
            >
                Tecnologias de back-end
            </motion.div>
            <div className="grid grid-cols-2 mt-7 max-w-[1100px] gap-5 md:grid-cols-3 lg:grid-cols-4">
                {skills
                    .filter((skill) => skill.role === 'backend')
                    .map((skill, index) => (
                        <motion.div
                            initial="hidden"
                            animate={hasAnimated ? 'visible' : ''}
                            variants={slowFadeInLeft}
                            className="flex"
                            key={index}
                        >
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
            </div>
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={slowFadeInLeft}
                className="mt-10 text-xl text-left pb-2 border-b-4 inline-block border-muted-foreground"
            >
                Habilidades coorporativas
            </motion.div>
            <div className="grid grid-cols-2  mt-7 max-w-[1100px] gap-5 md:grid-cols-3 lg:grid-cols-4">
                {skills
                    .filter((skill) => skill.role === 'corporate')
                    .map((skill, index) => (
                        <motion.div
                            initial="hidden"
                            animate={hasAnimated ? 'visible' : ''}
                            variants={slowFadeInLeft}
                            className="flex"
                            key={index}
                        >
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};
