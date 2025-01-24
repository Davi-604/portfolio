import { Section } from '@/types/Section';
import {
    ChartNetworkIcon,
    Contact,
    HomeIcon,
    MonitorCog,
    UserSearchIcon,
} from 'lucide-react';

export const sections: Section[] = [
    { id: 'home', label: 'Home', active: true, Icon: HomeIcon },
    { id: 'about', label: 'Sobre', active: false, Icon: UserSearchIcon },
    { id: 'projects', label: 'Projetos', active: false, Icon: MonitorCog },
    { id: 'skills', label: 'Habilidades', active: false, Icon: ChartNetworkIcon },
    { id: 'contact', label: 'Contato', active: false, Icon: Contact },
];
