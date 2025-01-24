import { Section } from '@/types/Section';
import { create } from 'zustand';

type SectionStore = {
    currentSection: Section['id'];
    setCurrentSection: (sectionId: Section['id']) => void;
};

export const useSectionStore = create<SectionStore>((set) => ({
    currentSection: 'home',
    setCurrentSection: (sectionId) => set({ currentSection: sectionId }),
}));
