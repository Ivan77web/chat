import { Button } from "@vkontakte/vkui"

interface ContinueRegistrationProps {
    onRegistrate: () => void;
}

export const ContinueRegistration = (props: ContinueRegistrationProps) => {
    const {
        onRegistrate
    } = props;

    return (
        <Button
            size="l"
            onClick={onRegistrate}
        >
            Зарегистрироваться
        </Button>
    )
}