import { Group, Div, Button } from "@vkontakte/vkui"
import cl from './RegistrationButton.module.scss';
import { AppLink } from "@/shared/ui/AppLink";
import { getPathRegistration } from "@/shared/const/router";

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
                    <AppLink to={getPathRegistration()}>
                        Зарегистрироваться
                    </AppLink>
                </Button>
            </Div>
        </Group>
    )
}