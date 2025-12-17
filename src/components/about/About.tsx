import { fadeInUp, slowFadeInLeft } from '@/animations/fadeIn';
import { useSectionStore } from '@/stores/useSectionStore';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LuUserSearch } from 'react-icons/lu';
import { DefaultSectionTittle } from '../default/DefaultSectionTittle';

export const About = () => {
    const { currentSection, setCurrentSection } = useSectionStore();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (currentSection === 'about' && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [currentSection, hasAnimated]);

    return (
        <div className="px-3 py-10 bg-muted min-h-screen flex flex-col items-center">
            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Sobre mim" Icon={LuUserSearch} />
            </motion.div>

            <motion.div
                initial="hidden"
                animate={hasAnimated ? 'visible' : ''}
                variants={slowFadeInLeft}
                className="mt-16 text-lg text-muted-foreground inline-block lg:mt-20 lg:max-w-[1100px] lg:text-xl"
            >
                Me chamo Davi Carvalho e sou um programador Full-stack que está sempre em busca de entregar as 
                melhores soluções, seja solucionando problemas de forma inteligente ou criando implementações
                inovadoras.

                <br />
                <br />

                Com uma trajetória marcada por diversas experiências dentro do desenvolvimento de software,
                adquiri uma visão clara sobre a responsabilidade do meu trabalho.
                Aprendi que o verdadeiro propósito do desenvolvimento não é apenas "fazer funcionar", mas sim entregar sistemas
                performáticos, seguros e que resolvam problemas reais de forma definitiva e escalável.

                <br />
                <br />

                Com isso em mente, busco constantemente aprender novas formas de aprimorar
                minhas habilidades e expandir meu conhecimento na área. Assim meu objetivo se encontra em me
                melhorar para resolver cada vez mais desafios de maneira eficiente e criativa.

                <br />
                <br />
                Por isso, me concentro em agregar valor ao ambiente em que estou inserido
                e em aproveitar ao máximo o que esse ambiente tem a oferecer. Dessa forma,
                busco ser sempre útil e produtivo, contribuindo para o sucesso das
                pessoas e dos projetos a minha volta.
            </motion.div>
        </div>
    );
};
