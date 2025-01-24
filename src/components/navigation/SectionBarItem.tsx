import { Section } from '@/types/Section';

type Props = {
    currentSection: string;
    section: Section;
    onClick: (sectionId: Section['id']) => void;
};

export const SectionBarItem = ({ currentSection, onClick, section }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div
                className={`w-1 h-4 bg-primary mx-auto  transition-all ease-in ${
                    currentSection === section.id ? 'opacity-100' : 'opacity-40 '
                }`}
            ></div>
            <div
                className={`flex items-center gap-2 cursor-pointer  
                hover:opacity-100 hover:scale-110  transition-all ease-in ${
                    currentSection === section.id
                        ? 'opacity-100 scale-110 '
                        : 'opacity-40 '
                }`}
                onClick={() => onClick(section.id)}
            >
                {section.label}
            </div>
            <div
                className={`w-1 h-4 bg-primary mx-auto  transition-all ease-in ${
                    currentSection === section.id ? 'opacity-100' : 'opacity-40 '
                }`}
            ></div>
        </div>
    );
};
