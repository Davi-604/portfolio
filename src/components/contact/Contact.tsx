import { LuContact } from 'react-icons/lu';
import { DefaultSectionTittle } from '../default/DefaultSectionTittle';
import { MessageArea } from './MessageArea';
import { SocialMediaArea } from './SocialMediaArea';
import { motion } from 'framer-motion';
import { useSectionStore } from '@/stores/useSectionStore';
import { fadeInUp, slowFadeInLeft, slowFadeInRight } from '@/animations/fadeIn';

export const Contact = () => {
    const { currentSection, setCurrentSection } = useSectionStore();

    return (
        <div className="px-3 py-10 flex flex-col items-center bg-background">
            <motion.div
                initial="hidden"
                animate={currentSection === 'contact' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Contato" Icon={LuContact} />
            </motion.div>
            <div className="flex max-w-[1100px] w-full  flex-wrap gap-10 mt-16">
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={currentSection === 'contact' ? 'visible' : 'hidden'}
                    variants={slowFadeInLeft}
                >
                    <MessageArea />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={currentSection === 'contact' ? 'visible' : 'hidden'}
                    variants={slowFadeInRight}
                >
                    <SocialMediaArea />
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                animate={currentSection === 'contact' ? 'visible' : 'hidden'}
                variants={fadeInUp}
                className="mt-16 text-muted-foreground"
            >
                Criado com muita atenção por Davi 🚀
            </motion.div>
        </div>
    );
};
