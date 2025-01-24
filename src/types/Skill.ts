import { IconType } from 'react-icons';

export type Skill = {
    id: number;
    label: string;
    iconColor?: string;
    role: 'frontend' | 'backend' | 'corporate';
    Icon?: IconType;
    desc?: string;
};
