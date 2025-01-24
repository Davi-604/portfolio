import { IconType } from 'react-icons';

type Props = {
    label: string;
    url: string;
    Icon: IconType;
};
export const SocialMediaItem = ({ label, url, Icon }: Props) => {
    return (
        <div className="flex flex-col justify-center gap-4">
            <a
                target="_blank"
                href={url}
                className="flex items-center gap-3 text-lg text-muted-foreground hover:underline lg:text-2xl"
            >
                <Icon />
                {label}
            </a>
        </div>
    );
};
