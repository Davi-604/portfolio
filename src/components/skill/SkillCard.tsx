import { slowFadeInLeft } from '@/animations/fadeIn';
import { useSectionStore } from '@/stores/useSectionStore';
import { Skill } from '@/types/Skill';
import { motion } from 'framer-motion';

type Props = {
    skill: Skill;
};

export const SkillCard = ({ skill }: Props) => {
    return (
        <div
            className="p-3 text-center border-2 border-muted-foreground rounded-lg flex flex-col items-center gap-2 
        hover:scale-110 hover:border-secondary-foreground transition-all ease-in lg:gap-3 lg:p-5"
        >
            {skill.Icon && (
                <skill.Icon
                    className={`${skill.iconColor ? '' : 'text-primary'}`}
                    style={{ color: skill.iconColor ?? '' }}
                    size={50}
                />
            )}
            <div className="text-lg font-bold text-secondary-foreground lg:text-2xl">
                {skill.label}
            </div>
            <div className="max-w-[160px] text-muted-foreground lg:max-w-[200px]">
                {skill.desc}
            </div>
        </div>
    );
};
