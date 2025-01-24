import { Section } from '@/types/Section';
import { sections } from '@/data/sections';
import { useSectionStore } from '@/stores/useSectionStore';
import { Logo } from '../default/Logo';
import { NavItem } from '../navigation/NavItem';
import { ThemeToggle } from '../default/ThemeToggle';
import { MenuTrigger } from '../navigation/MenuTrigger';
import { motion } from 'framer-motion';
import { fadeInUp, slowFadeInLeft } from '@/animations/fadeIn';

export const Header = () => {
    const { currentSection, setCurrentSection } = useSectionStore();

    const handleScrollToSection = (sectionId: Section['id']) => {
        setCurrentSection(sectionId);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className=" bg-blue-950 text-white ">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slowFadeInLeft}
                className="flex items-center p-3 h-[100px]"
            >
                <div className="flex-1 lg:flex-none">
                    <Logo />
                </div>
                <nav className="flex-1 hidden gap-10 items-center justify-center lg:flex xl:gap-20">
                    {sections.map((section, index) => (
                        <NavItem
                            key={index}
                            section={section}
                            onClick={handleScrollToSection}
                        />
                    ))}
                </nav>
                <div className="hidden lg:block">
                    <ThemeToggle positionTop="10" positionRight="10" />
                </div>
                <MenuTrigger />
            </motion.div>
        </header>
    );
};
