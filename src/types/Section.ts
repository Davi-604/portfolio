import { IconType } from 'react-icons';

export type Section = {
    id: 'home' | 'about' | 'skills' | 'projects' | 'contact';
    label: string;
    Icon?: IconType;
};
