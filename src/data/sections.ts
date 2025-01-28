import { Section } from '@/types/Section';
import {
    ChartNetworkIcon,
    Contact,
    HomeIcon,
    MonitorCog,
    UserSearchIcon,
} from 'lucide-react';

export const sections: Section[] = [
    { id: 'home', label: 'Home', Icon: HomeIcon },
    { id: 'about', label: 'Sobre', Icon: UserSearchIcon },
    { id: 'projects', label: 'Projetos', Icon: MonitorCog },
    { id: 'skills', label: 'Habilidades', Icon: ChartNetworkIcon },
    { id: 'contact', label: 'Contato', Icon: Contact },
];
