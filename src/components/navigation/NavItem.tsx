import { Section } from '@/types/Section';

type Props = {
    section: Section;
    onClick: (sectionId: Section['id']) => void;
};

export const NavItem = ({ section, onClick }: Props) => {
    return (
        <div
            className={`flex items-center gap-2 pb-1 text-lg font-semibold cursor-pointer border-b-2 border-transparent lg:text-2xl
        hover:border-blue-500 hover:text-blue-600 transition-all ease-in 
        ${section.active ? 'border-blue-500 text-blue-600' : ''}`}
            onClick={() => onClick(section.id)}
        >
            {section.Icon && <section.Icon />}
            {section.label}
        </div>
    );
};
