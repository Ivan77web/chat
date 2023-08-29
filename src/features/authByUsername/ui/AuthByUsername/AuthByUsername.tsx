import { useSelector } from "react-redux"
import { getAuthDataUsername, getAuthDataPassword, getAuthDataIsLoading, getAuthDataError } from "../../model/selectors/authByUsernameSelectors"
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { authByUsernameActions, authByUsernameReducer } from "../../model/slice/authByUsernameSlice";
import cl from './AuthByUsername.module.scss';
import { HStack, VStack } from "@/shared/ui/Stack";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { authByUsername } from "../../model/services/authByUsername";

const AuthByUsername = () => {
    const dispatch = useAppDispatch();
    const username = useSelector(getAuthDataUsername);
    const password = useSelector(getAuthDataPassword);
    const isLoading = useSelector(getAuthDataIsLoading);
    const error = useSelector(getAuthDataError);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(authByUsernameActions.setLogin(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authByUsernameActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(() => {
        dispatch(authByUsername({ username, password }))
    }, [dispatch, username, password])

    const redusers: ReducersList = {
        authData: authByUsernameReducer
    }

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <DynamicModuleLoader reducers={redusers}>
            <Card
                variant="outlined"
                className={cl.form}
            >
                <VStack gap="16">
                    <Text
                        title="Авторизация"
                        className={cl.title}
                    />

                    <Input
                        className={cl.input}
                        value={username}
                        placeholder="Логин"
                        onChange={onChangeLogin}
                        disabled={isLoading}
                    />
                    <Input
                        className={cl.input}
                        value={password}
                        placeholder="Пароль"
                        onChange={onChangePassword}
                        disabled={isLoading}
                    />

                    {
                        error
                            ?
                            <Text text={'Ошибка авторизации'} />
                            :
                            ''
                    }

                    <HStack justify="end" max>
                        <Button
                            variant='outline'
                            onClick={onLogin}
                            disabled={isLoading}
                        >
                            Вход
                        </Button>
                    </HStack>
                </VStack>
            </Card>
        </DynamicModuleLoader>
    )
}

export default AuthByUsername;