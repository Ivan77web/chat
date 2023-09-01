import { authByUsernameReducer } from "@/features/authByUsername/model/slice/authByUsernameSlice"
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { HStack } from "@/shared/ui/Stack"
import { Group, Header } from "@vkontakte/vkui"
import cl from './Auth.module.scss';
import { AuthByUsername } from "@/features/authByUsername";

export const Auth = () => {
    const redusers: ReducersList = {
        authData: authByUsernameReducer
    }

    return (
        <DynamicModuleLoader reducers={redusers}>
            <HStack justify="center">
                <Group
                    className={cl.login_block}
                    header={
                        <Header
                            mode="tertiary"
                        >
                            Вход
                        </Header>
                    }
                >
                    <AuthByUsername />
                </Group>
            </HStack>
        </DynamicModuleLoader>
    )
}