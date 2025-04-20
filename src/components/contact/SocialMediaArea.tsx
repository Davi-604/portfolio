import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SocialMediaItem } from './SocialMediaItem';
import { LuLocate, LuMapPin, LuPhone } from 'react-icons/lu';

export const SocialMediaArea = () => {
    return (
        <div className="flex flex-col justify-center gap-4">
            <div className="text-2xl text-center font-bold mb-5 lg:text-3xl">
                Outras formas de me encontrar:
            </div>
            <SocialMediaItem
                label="LinkedIn"
                Icon={FaLinkedin}
                url="linkedin.com/in/davicarvalhodev604"
            />
            <SocialMediaItem
                label="Github"
                Icon={FaGithub}
                url="https://github.com/Davi-604"
            />
            <SocialMediaItem
                label="E-mail: davimedeiroscv1001@gmail.com"
                Icon={FaEnvelope}
                url="https://mail.google.com/mail/?view=cm&fs=1&to=davimedeiroscv1001@gmail.com&su=Quero%20saber%20mais%20sobre%20seu%20trabalho&body=Olá,%20gostei%20do%20seu%20portfólio!"
            />
            <SocialMediaItem
                label="Telefone: (34) 9 9112-2454"
                Icon={LuPhone}
                url="https://wa.me/5534991122454?text=Olá%2C%20gostei%20do%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!"
            />
        </div>
    );
};
