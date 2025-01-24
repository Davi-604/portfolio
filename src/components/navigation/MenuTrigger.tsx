import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '../ui/drawer';
import { ThemeToggle } from '../default/ThemeToggle';
import { NavItem } from './NavItem';
import { sections } from '@/data/sections';
import { Section } from '@/types/Section';
import { useSectionStore } from '@/stores/useSectionStore';
import { useState } from 'react';

export const MenuTrigger = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleScrollToSection = (sectionId: Section['id']) => {
        setOpenDrawer(false);
        setCurrentSection(sectionId);

        const section = document.getElementById(sectionId);
        if (section) {
            setTimeout(() => section.scrollIntoView({ behavior: 'smooth' }), 700);
        }
    };

    return (
        <div className="lg:hidden">
            <Drawer direction="right" open={openDrawer} onOpenChange={setOpenDrawer}>
                <DrawerTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="w-full p-2 h-10 rounded-full flex-1"
                    >
                        <MenuIcon style={{ width: '24px', height: '24px' }} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="p-5  w-3/4 bg-white dark:bg-blue-950 rounded-none ">
                    <DrawerHeader>
                        <DrawerTitle className="mt-5 md:text-2xl">
                            Menu de navegação
                        </DrawerTitle>
                    </DrawerHeader>
                    <nav className="flex flex-col gap-10 mt-10">
                        {sections.map((section, index) => (
                            <NavItem
                                key={index}
                                section={section}
                                onClick={handleScrollToSection}
                            />
                        ))}
                    </nav>
                    <DrawerFooter>
                        <DrawerClose>
                            <XIcon
                                className="fixed top-4 right-4 p-1 h-8 w-8"
                                strokeWidth={3}
                                onClick={() => setOpenDrawer(false)}
                            ></XIcon>
                        </DrawerClose>
                    </DrawerFooter>
                    <ThemeToggle positionBottom="20" positionLeft="10" />
                </DrawerContent>
            </Drawer>
        </div>
    );
};
