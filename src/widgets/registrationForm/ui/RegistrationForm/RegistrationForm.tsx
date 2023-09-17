import { VStack, HStack } from "@/shared/ui/Stack";
import { Div, Header, Group } from "@vkontakte/vkui";
import cl from './RegistrationForm.module.scss';
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { registrationFormActions, registrationFormReducer } from "../../model/slice/registrationFormSlice";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getRegistrationFormAllStatusPassword, getRegistrationFormAllStatusRepeatPassword, getRegistrationFormAllStatusUsername, getRegistrationFormAvatar, getRegistrationFormError, getRegistrationFormIsLoading, getRegistrationFormIsSuccess, getRegistrationFormPassword, getRegistrationFormRepeatPassword, getRegistrationFormStatusAvatar, getRegistrationFormStatusPassword, getRegistrationFormStatusPasswordNumbers, getRegistrationFormStatusPasswordShort, getRegistrationFormStatusPasswordSpecialSymbol, getRegistrationFormStatusPasswordText, getRegistrationFormStatusPasswordUppercase, getRegistrationFormStatusRepeatPassword, getRegistrationFormStatusRepeatPasswordNotMatch, getRegistrationFormStatusRepeatPasswordText, getRegistrationFormStatusUsername, getRegistrationFormStatusUsernameShort, getRegistrationFormStatusUsernameText, getRegistrationFormUsername } from "../../model/selectors/registrationFormSelectors";
import { AvatarBlock } from "../AvatarBlock/AvatarBlock";
import { UsernameBlock } from "../UsernameBlock/UsernameBlock";
import { PasswordBlock } from "../PasswordBlock/PasswordBlock";
import { ContinueRegistration } from "@/features/continueRegistration/ContinueRegistration";
import { registration } from "../../model/services/registration";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { getPathAuth } from "@/shared/const/router";

const RegistrationForm = () => {
    const reducers: ReducersList = {
        registrationForm: registrationFormReducer,
    }

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getRegistrationFormIsLoading);
    const error = useSelector(getRegistrationFormError);
    const isSuccess = useSelector(getRegistrationFormIsSuccess);

    const avatar = useSelector(getRegistrationFormAvatar);
    const username = useSelector(getRegistrationFormUsername);
    const password = useSelector(getRegistrationFormPassword);
    const repeatPassword = useSelector(getRegistrationFormRepeatPassword);
    const statusAvatar = useSelector(getRegistrationFormStatusAvatar) || 'default';
    const statusUsername = useSelector(getRegistrationFormStatusUsername) || 'default';
    const statusUsernameShort = useSelector(getRegistrationFormStatusUsernameShort) || 'default';
    const statusPassword = useSelector(getRegistrationFormStatusPassword) || 'default';
    const statusPasswordShort = useSelector(getRegistrationFormStatusPasswordShort) || 'default';
    const statusPasswordNumbers = useSelector(getRegistrationFormStatusPasswordNumbers) || 'default';
    const statusPasswordUppercase = useSelector(getRegistrationFormStatusPasswordUppercase) || 'default';
    const statusPasswordSpecialSymbol = useSelector(getRegistrationFormStatusPasswordSpecialSymbol) || 'default';
    const statusRepeatPassword = useSelector(getRegistrationFormStatusRepeatPassword) || 'default';
    const statusRepeatPasswordNotMatch = useSelector(getRegistrationFormStatusRepeatPasswordNotMatch) || 'default';
    const statusUsernameText = useSelector(getRegistrationFormStatusUsernameText);

    const validateUsername = useCallback(() => {
        if (username.length === 0) {
            dispatch(registrationFormActions.setStatusUsername('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusUsername('default'));

        }

        if (username.length < 6) {
            dispatch(registrationFormActions.setStatusUsernameShort('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusUsernameShort('default'));
        }

        return true;
    }, [username, dispatch])

    const validatePassword = useCallback(() => {
        if (password.length === 0) {
            dispatch(registrationFormActions.setStatusPassword('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusPassword('default'));
        }

        if (password.length < 8) {
            dispatch(registrationFormActions.setStatusPasswordShort('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusPasswordShort('default'));
        }

        if (!(/\d/.test(password))) {
            dispatch(registrationFormActions.setStatusPasswordNumbers('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusPasswordNumbers('default'));
        }

        if (!(/[A-Z]/.test(password))) {
            dispatch(registrationFormActions.setStatusPasswordUppercase('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusPasswordUppercase('default'));
        }

        if (!(/[!@#$%^&*_+:;,.?~]/.test(password))) {
            dispatch(registrationFormActions.setStatusPasswordSpecialSymbol('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusPasswordSpecialSymbol('default'));
        }

        return true;
    }, [password, dispatch])

    const validateRepeatPassword = useCallback(() => {
        if (repeatPassword.length === 0) {
            dispatch(registrationFormActions.setStatusRepeatPassword('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusRepeatPassword('default'));
        }

        if (repeatPassword !== password) {
            dispatch(registrationFormActions.setStatusRepeatPasswordNotMatch('error'));
            return false;
        } else {
            dispatch(registrationFormActions.setStatusRepeatPasswordNotMatch('default'));
        }

        return true;
    }, [repeatPassword, dispatch])

    const validate = () => {
        const usernameValidate = validateUsername();
        const PasswordValidate = validatePassword();
        const RepeatPasswordValidate = validateRepeatPassword();

        if (
            statusAvatar !== 'error' &&
            usernameValidate &&
            PasswordValidate &&
            RepeatPasswordValidate
        ) {
            return true;
        } else {
            return false;
        }
    }

    const onRegistrate = useCallback(() => {
        if (validate()) {
            dispatch(registration({
                avatar,
                password,
                username
            }));
        }
    }, [validate])

    useEffect(() => {
        if (statusUsername === 'error') {
            dispatch(registrationFormActions.setAllStatusUsername('error'));
            dispatch(registrationFormActions.setStatusUsernameText('Введите username'));
        } else if (statusUsernameShort === 'error') {
            dispatch(registrationFormActions.setAllStatusUsername('error'));
            dispatch(registrationFormActions.setStatusUsernameText('Username должен быть не менее 6 символов'));
        } else {
            dispatch(registrationFormActions.setAllStatusUsername('default'));
            dispatch(registrationFormActions.setStatusUsernameText(''));
        }
    }, [statusUsername, statusUsernameShort, dispatch])

    useEffect(() => {
        if (statusPassword === 'error') {
            dispatch(registrationFormActions.setAllStatusPassword('error'));
            dispatch(registrationFormActions.setStatusPasswordText('Введите пароль'));
        } else if (statusPasswordShort === 'error') {
            dispatch(registrationFormActions.setAllStatusPassword('error'));
            dispatch(registrationFormActions.setStatusPasswordText('Пароль должен быть не менее 8 символов'));
        } else if (statusPasswordNumbers === 'error') {
            dispatch(registrationFormActions.setAllStatusPassword('error'));
            dispatch(registrationFormActions.setStatusPasswordText('Пароль должен содержать минимум одну цифру'));
        } else if (statusPasswordUppercase === 'error') {
            dispatch(registrationFormActions.setAllStatusPassword('error'));
            dispatch(registrationFormActions.setStatusPasswordText('Пароль должен содержать минимум одну заглавную букву'));
        } else if (statusPasswordSpecialSymbol === 'error') {
            dispatch(registrationFormActions.setAllStatusPassword('error'));
            dispatch(registrationFormActions.setStatusPasswordText('Пароль должен содержать минимум один специальный символ (!@#$%^&*()_+{}[]:;<>,.?~)'));
        } else {

            dispatch(registrationFormActions.setAllStatusPassword('default'));
            dispatch(registrationFormActions.setStatusPasswordText(''));
        }
    }, [statusPassword, statusPasswordShort, statusPasswordNumbers, statusPasswordUppercase, statusPasswordSpecialSymbol, dispatch])

    useEffect(() => {
        if (statusRepeatPassword === 'error') {
            dispatch(registrationFormActions.setAllStatusRepeatPassword('error'));
            dispatch(registrationFormActions.setStatusRepeatPasswordText('Введите пароль еще раз'));
        } else if (statusRepeatPasswordNotMatch === 'error') {
            dispatch(registrationFormActions.setAllStatusRepeatPassword('error'));
            dispatch(registrationFormActions.setStatusRepeatPasswordText('Пароль не совпадает'));
        } else {
            dispatch(registrationFormActions.setAllStatusRepeatPassword('default'));
            dispatch(registrationFormActions.setStatusRepeatPasswordText(''));
        }
    }, [statusRepeatPassword, statusRepeatPasswordNotMatch, dispatch])

    useEffect(() => {
        if (error === "409") {
            dispatch(registrationFormActions.setAllStatusUsername('error'));
            dispatch(registrationFormActions.setStatusUsernameText('Username уже занят, попробуйте использовать другой username'));
        } else if (error !== '409' && statusUsernameText === 'Username уже занят, попробуйте использовать другой username') {
            dispatch(registrationFormActions.setAllStatusUsername('default'));
            dispatch(registrationFormActions.setStatusUsernameText(''));
        }
    }, [error])

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <DynamicLoader
                isLoading={isLoading}
                error={error}
                isSuccess={isSuccess}
                toNavigate={getPathAuth()}
            />

            <Group
                className={cl.reg_block}
                header={
                    <Header
                        mode="tertiary"
                    >
                        Регистрация
                    </Header>
                }
            >
                <Div>
                    <VStack gap="16">

                        <AvatarBlock />
                        <UsernameBlock />
                        <PasswordBlock />

                        <HStack gap="4" max justify="end">
                            <ContinueRegistration onRegistrate={onRegistrate} />
                        </HStack>
                    </VStack>
                </Div>
            </Group>
        </DynamicModuleLoader>
    )
}

export default RegistrationForm;