import { IconType } from 'react-icons';

type Props = {
    label: string;
    Icon: IconType;
};

export const DefaultSectionTittle = ({ label, Icon }: Props) => {
    return (
        <div className="text-3xl inline-flex items-center gap-5 pb-2 border-b-4  border-primary lg:text-5xl">
            {label} <Icon />
        </div>
    );
};
