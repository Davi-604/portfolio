import { Button } from '../ui/button';
import { IconType } from 'react-icons';

type Props = {
    label: string;
    Icon?: IconType;
    onClick: () => void;
};
export const DefaultButton = ({ label, Icon, onClick }: Props) => {
    return (
        <Button
            onClick={onClick}
            className="text-xl font-bold h-12 p-7 lg:text-3xl lg:h-12"
        >
            {label}
            {Icon && <Icon style={{ width: '25px', height: '25px' }} strokeWidth={3} />}
        </Button>
    );
};
