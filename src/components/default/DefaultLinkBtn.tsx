import { FaGithub, FaGlobe, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Button } from '../ui/button';

type Props = {
    dest: 'web' | 'github' | 'youtube' | 'linkedin';
    url?: string;
};

export const DefaultLinkButton = ({ dest, url }: Props) => {
    return (
        <Button
            variant={'ghost'}
            disabled={!url}
            className="flex  items-center gap-2 text-lg py-1 px-2 font-semibold border-2 border-secondary-foreground rounded-lg cursor pointer
        hover:scale-105 hover:text-primary transition-all ease-in"
        >
            {dest === 'web' && <FaGlobe />}
            {dest === 'github' && <FaGithub />}
            {dest === 'youtube' && <FaYoutube />}
            {dest === 'linkedin' && <FaLinkedin />}
            <a href={url} target="_blank">
                {dest === 'web' && 'Site'}
                {dest === 'github' && 'GitHub'}
                {dest === 'youtube' && 'Vídeo'}
                {dest === 'linkedin' && 'Postagem no LinkedIn'}
            </a>
        </Button>
    );
};
