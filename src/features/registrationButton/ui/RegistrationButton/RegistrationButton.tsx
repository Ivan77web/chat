import { Group, Div, Button } from "@vkontakte/vkui"
import cl from './RegistrationButton.module.scss';

export const RegistrationButton = () => {
    return (
        <Group
            className={cl.reg_block}
        >
            <Div>
                <Button
                    size="l"
                    appearance="positive"
                    stretched
                >
                    Зарегистрироваться
                </Button>
            </Div>
        </Group>
    )
}