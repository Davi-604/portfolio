import { Project } from '@/types/Project';
import { SkillFlag } from '../skill/SkillFlag';
import { motion } from 'framer-motion';

type Props = {
    project: Project;
};

export const ProjectCard = ({ project }: Props) => {
    const trackAnimation = {
        animate: {
            x: ['0%', '-100%'],
        },
        transition: {
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
        },
    };

    return (
        <div
            className="border-2 bg-popover border-muted-foreground dark:border-transparent rounded-lg flex flex-col justify-center gap-2 p-1 cursor-pointer w-[300px] lg:w-[500px]
        hover:scale-105 hover:border-secondary-foreground transition-all ease-in"
        >
            <img
                className="w-[300px] h-[150px] object-cover rounded-lg lg:w-full lg:h-[240px]"
                src={project.thumbUrl}
            />
            <div className="text-2xl font-bold my-5 lg:text-4xl">{project.name}</div>

            <div className="text-xl font-semibold text-left">Tecnologias utilizadas:</div>
            <div className="overflow-hidden w-full relative mb-2">
                <motion.div
                    className="flex gap-3"
                    animate={trackAnimation.animate}
                    transition={trackAnimation.transition}
                >
                    {project.usedSkills.map((skill, index) => (
                        <SkillFlag key={index} skill={skill} />
                    ))}
                    {/* Clonando para suavizar o loop */}
                    {project.usedSkills.map((skill, index) => (
                        <SkillFlag key={`clone-${index}`} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
