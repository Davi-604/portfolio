import { FaWhatsapp } from 'react-icons/fa';
import { DefaultButton } from '../default/DefaultButton';

export const MessageArea = () => {
    const handleSendMessage = () => {
        const phoneNumber = '5534991122454';
        const message =
            'Olá, gostei do seu portfólio e gostaria de saber mais sobre seu trabalho!';

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
    };

    return (
        <div>
            <div className="text-center md:text-left">
                <div className="text-3xl font-bold lg:text-4xl">
                    Gostou do meu trabalho?
                </div>
                <div className="text-muted-foreground mt-2 lg:text-lg">
                    Mande uma mensagem e vamos trabalhar juntos!
                </div>
                <div className="mt-10">
                    <DefaultButton
                        label="Enviar mensagem"
                        onClick={handleSendMessage}
                        Icon={FaWhatsapp}
                    />
                </div>
            </div>
        </div>
    );
};
