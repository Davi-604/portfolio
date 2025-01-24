import { Skill } from './Skill';

export type Project = {
    id: number;
    name: string;
    thumbUrl: string;
    gitHubUrl?: string;
    webUrl?: string;
    youtubeUrl?: string;
    linkedinUrl?: string;
    desc?: string;
    isStatic?: boolean;
    usedSkills: Skill[];
};
