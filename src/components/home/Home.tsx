import { fadeInUp, slowFadeInLeft, slowFadeInRight } from '@/animations/fadeIn';
import { useSectionStore } from '@/stores/useSectionStore';
import { motion } from 'framer-motion';
import { FileUserIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';
import { DefaultButton } from '../default/DefaultButton';
import { AnimatedBackground } from './AnimatedBackground';

export const Home = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScrollToNextSection = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (currentSection === 'home' && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [currentSection, hasAnimated]);

    return (
        <AnimatedBackground>
            <div className="flex flex-col p-3 mt-[100px] lg:mt-10 lg:flex-row lg:items-start lg:p-5">
                <div className="mb-10 lg:mr-10">
                    <motion.div
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : ''}
                        variants={fadeInUp}
                    >
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-600 lg:text-3xl">
                            Quem sou eu?
                        </h3>
                        <h1 className="text-5xl font-bold mt-2 text-blue-800 lg:text-8xl">
                            Davi Carvalho
                        </h1>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : ''}
                        variants={slowFadeInLeft}
                        className="font-bold mt-1 lg:text-4xl"
                    >
                        <Typewriter
                            words={[
                                'Programador FullStack',
                                'Desenvolvedor Web',
                                'Criador de Soluções',
                                'Amante de técnologia',
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : ''}
                        variants={slowFadeInLeft}
                        className="mt-32 hidden lg:block"
                    >
                        <DefaultButton
                            onClick={() =>
                                window.open(
                                    'https://drive.google.com/file/d/13Yb4nZRmZYxupst3RNVDL29yyTdk5b5d/view?usp=sharing'
                                )
                            }
                            label="Confira meu currículo"
                            Icon={FileUserIcon}
                        />
                    </motion.div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                    <motion.div
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : ''}
                        variants={fadeInUp}
                        style={{
                            backgroundImage: 'url("images/me.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                        }}
                        className="mx-auto w-[200px] h-[200px] rounded-full border-8 border-blue-900 lg:w-[350px] lg:h-[350px]"
                    ></motion.div>
                    <motion.div
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : ''}
                        variants={slowFadeInLeft}
                        className="text-left text-2xl mt-5 text-secondary-foreground font-bold lg:text-4xl"
                    >
                        <Typewriter
                            words={[
                                'Meu principal objetivo é trazer soluções práticas e eficazes para resolver os seus problemas.',
                            ]}
                            typeSpeed={35}
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : ''}
                    variants={slowFadeInRight}
                    className="mt-10 text-center lg:hidden"
                >
                    <DefaultButton
                        onClick={() =>
                            window.open(
                                'https://drive.google.com/file/d/13Yb4nZRmZYxupst3RNVDL29yyTdk5b5d/view?usp=sharing'
                            )
                        }
                        label="Confira meu currículo"
                        Icon={FileUserIcon}
                    />
                </motion.div>
                <div
                    className="mx-auto mt-10 mb-5 lg:hidden"
                    onClick={() => handleScrollToNextSection()}
                >
                    <MdKeyboardDoubleArrowDown className="animate-bounce" size={84} />
                </div>
            </div>
        </AnimatedBackground>
    );
};
