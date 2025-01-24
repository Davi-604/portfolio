import { Skill } from '@/types/Skill';

type Props = {
    skill: Skill;
};

export const SkillFlag = ({ skill }: Props) => {
    return (
        <div
            className={`inline-flex items-center gap-2 py-1 px-2 rounded-2xl bg-muted lg:2`}
        >
            {skill.Icon && <skill.Icon style={{ color: skill.iconColor }} />}
            <div className="">{skill.label}</div>
        </div>
    );
};
