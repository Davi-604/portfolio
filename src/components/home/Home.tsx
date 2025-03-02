import { Typewriter } from 'react-simple-typewriter';
import { FileUserIcon } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { DefaultButton } from '../default/DefaultButton';
import { motion } from 'framer-motion';
import { fadeInUp, slowFadeInLeft, slowFadeInRight } from '@/animations/fadeIn';
import { useSectionStore } from '@/stores/useSectionStore';
import { useState, useEffect } from 'react';

export const Home = () => {
    const { currentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

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
                                    'https://drive.google.com/file/d/1SLIbio50SLRHYlY5e8a9aofTe0QFNSzG/view?usp=drive_link'
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
                                'https://drive.google.com/file/d/1rTIQmBKhmLy78hIur4bVclZek3bpM0Jj/view?usp=sharing'
                            )
                        }
                        label="Confira meu currículo"
                        Icon={FileUserIcon}
                    />
                </motion.div>
            </div>
        </AnimatedBackground>
    );
};
