import { LuUserSearch } from 'react-icons/lu';
import { DefaultSectionTittle } from '../default/DefaultSectionTittle';
import { motion } from 'framer-motion';
import { fadeInUp, slowFadeInLeft } from '@/animations/fadeIn';
import { useSectionStore } from '@/stores/useSectionStore';

export const About = () => {
    const { currentSection, setCurrentSection } = useSectionStore();

    return (
        <div className="px-3 py-10 bg-muted flex flex-col items-center">
            <motion.div
                initial="hidden"
                animate={currentSection === 'about' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <DefaultSectionTittle label="Sobre mim" Icon={LuUserSearch} />
            </motion.div>

            <motion.div
                initial="hidden"
                animate={currentSection === 'about' ? 'visible' : 'hidden'}
                variants={slowFadeInLeft}
                className="mt-5 text-lg text-muted-foreground inline-block lg:mt-10 lg:max-w-[1100px] lg:text-xl"
            >
                Olá, eu me chamo Davi Carvalho e sou um programador Full-stack que gosta
                muito do que faz. Tenho 18 anos e estudo programação há cerca de 2 anos.
                Desde então, não consigo imaginar outro objetivo de carreira que não seja
                me tornar o melhor programador possível.
                <br />
                <br />
                Ao longo da minha jornada como estudante, aprendi muito sobre a
                responsabilidade que devo ter com o meu trabalho e o verdadeiro propósito
                de tudo isso: <b>resolver problemas</b>.
                <br />
                <br />
                Com isso em mente, busco constantemente aprender novas formas de aprimorar
                minhas habilidades e expandir meu conhecimento na área. Meu objetivo é me
                capacitar para resolver cada vez mais desafios de maneira eficiente e
                criativa.
                <br />
                <br />
                Por isso, me concentro em agregar valor ao ambiente em que estou inserido
                e em aproveitar ao máximo o que esse ambiente tem a oferecer. Dessa forma,
                espero ser sempre útil e produtivo, contribuindo para o sucesso das
                pessoas e dos projetos a minha volta.
            </motion.div>
        </div>
    );
};
