import { useSelector } from "react-redux"
import { getAuthDataUsername, getAuthDataPassword, getAuthDataIsLoading, getAuthDataError, getAuthDataIsSuccess } from "../../model/selectors/authByUsernameSelectors"
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { authByUsernameActions, authByUsernameReducer } from "../../model/slice/authByUsernameSlice";
import cl from './AuthByUsername.module.scss';
import { HStack, VStack } from "@/shared/ui/Stack";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { authByUsername } from "../../model/services/authByUsername";
import { Group, Header, Div, Headline, Cell, Input, Button, ScreenSpinner, FormItem } from "@vkontakte/vkui";
import { DynamicLoader } from "@/shared/ui/DynamicLoader";

type Status = 'default' | 'error' | 'valid';

const AuthByUsername = () => {
    const dispatch = useAppDispatch();
    const [statusLogin, setStatusLogin] = useState<Status>('default');
    const [statusPassword, setStatusPassword] = useState<Status>('default');
    const username = useSelector(getAuthDataUsername);
    const password = useSelector(getAuthDataPassword);
    const isLoading = useSelector(getAuthDataIsLoading);
    const isSuccess = useSelector(getAuthDataIsSuccess);
    const error = useSelector(getAuthDataError);

    const onChangeLogin = useCallback((value: string) => {
        if (username) {
            setStatusLogin('default');
        }

        dispatch(authByUsernameActions.setLogin(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        if (password) {
            setStatusPassword('default');
        }

        dispatch(authByUsernameActions.setPassword(value))
    }, [dispatch, password])

    const onLogin = useCallback(() => {
        if (validate()) {
            dispatch(authByUsername({ username, password }))
        }
    }, [dispatch, username, password])

    const validate = useCallback(() => {
        let validate = false;

        if (!username) {
            setStatusLogin('error');
        } else {
            setStatusLogin('default');
        }

        if (!password) {
            setStatusPassword('error');
        } else {
            setStatusPassword('default');
        }

        if (username && password) {
            validate = true;
        }

        return validate
    }, [username, password])

    useEffect(() => {
        if (error) {
            setStatusPassword('error');
        }
    }, [error])

    return (
        <>
            <DynamicLoader isLoading={isLoading} error={error} isSuccess={isSuccess} />

            <Div>
                <VStack gap="16">
                    <VStack gap="4" max>
                        <Headline level="1">Логин</Headline>

                        <FormItem
                            status={statusLogin}
                            className={cl.inputMax}
                            bottom={
                                statusLogin === 'error' ? 'Введите логин' : ''
                            }
                        >
                            <Input
                                className={cl.inputMax}
                                id="auth_login"
                                type="text"
                                value={username}
                                onChange={(e) => onChangeLogin(e.target.value)}
                            />
                        </FormItem>
                    </VStack>

                    <VStack gap="4" max>
                        <Headline level="1">Пароль</Headline>
                        <FormItem
                            status={statusPassword}
                            className={cl.inputMax}
                            bottom={
                                statusPassword === 'error'
                                    ?
                                    error ? 'Неверный пароль' : 'Введите пароль'
                                    :
                                    ''
                            }
                        >
                            <Input
                                id="examauth_passwordple"
                                className={cl.inputMax}
                                type="password"
                                value={password}
                                onChange={(e) => onChangePassword(e.target.value)}
                            />
                        </FormItem>

                    </VStack>

                    <HStack gap="4" max justify="between">
                        <Cell mode="selectable">
                            Запомнить меня
                        </Cell>

                        <Button
                            size="l"
                            onClick={onLogin}
                        >
                            Войти
                        </Button>
                    </HStack>
                </VStack>
            </Div>
        </>
    )
}

export default AuthByUsername;