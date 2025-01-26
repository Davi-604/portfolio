import { LuContact } from 'react-icons/lu';
import { DefaultSectionTittle } from '../default/DefaultSectionTittle';
import { MessageArea } from './MessageArea';
import { SocialMediaArea } from './SocialMediaArea';
import { motion } from 'framer-motion';
import { useSectionStore } from '@/stores/useSectionStore';
import { fadeInUp, slowFadeInLeft, slowFadeInRight } from '@/animations/fadeIn';
import { useEffect, useState } from 'react';

export const Contact = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (currentSection === 'contact' && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [currentSection, hasAnimated]);

    return (
        <div className="px-3 py-10 flex flex-col items-center bg-background">
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Contato" Icon={LuContact} />
            </motion.div>
            <div className="flex max-w-[1100px] w-full  flex-wrap gap-10 mt-16">
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : ''}
                    variants={slowFadeInLeft}
                >
                    <MessageArea />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : ''}
                    variants={slowFadeInRight}
                >
                    <SocialMediaArea />
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={fadeInUp}
                className="mt-16 text-muted-foreground"
            >
                Criado com muita atenção por Davi 🚀
            </motion.div>
        </div>
    );
};
