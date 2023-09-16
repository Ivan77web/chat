import { VStack, HStack } from "@/shared/ui/Stack";
import { Div, Header, Group } from "@vkontakte/vkui";
import cl from './RegistrationForm.module.scss';
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { registrationFormReducer } from "../../model/slice/registrationFormSlice";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRegistrationFormAvatar, getRegistrationFormPassword, getRegistrationFormRepeatPassword, getRegistrationFormUsername } from "../../model/selectors/registrationFormSelectors";
import { StatusFormItem } from "@/shared/types/statusFormItem";
import { AvatarBlock } from "../AvatarBlock/AvatarBlock";
import { UsernameBlock } from "../UsernameBlock/UsernameBlock";
import { PasswordBlock } from "../PasswordBlock/PasswordBlock";
import { ContinueRegistration } from "@/features/continueRegistration/ContinueRegistration";
import { registration } from "../../model/services/registration";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

const RegistrationForm = () => {
    const reducers: ReducersList = {
        registrationForm: registrationFormReducer,
    }

    const dispatch = useAppDispatch();

    const avatar = useSelector(getRegistrationFormAvatar);
    const username = useSelector(getRegistrationFormUsername);
    const password = useSelector(getRegistrationFormPassword);
    const repeatPassword = useSelector(getRegistrationFormRepeatPassword);

    const [statusAvatar, setStatusAvatar] = useState<StatusFormItem>('default');
    const [allStatusUsername, setAllStatusUsername] = useState<StatusFormItem>('default');
    const [statusUsernameText, setStatusUsernameText] = useState('');
    const [statusUsername, setStatusUsername] = useState<StatusFormItem>('default');
    const [statusUsernameShort, setStatusUsernameShort] = useState<StatusFormItem>('default');
    const [allStatusPassword, setAllStatusPassword] = useState<StatusFormItem>('default');
    const [statusPasswordText, setStatusPasswordText] = useState('');
    const [statusPassword, setStatusPassword] = useState<StatusFormItem>('default');
    const [statusPasswordShort, setStatusPasswordShort] = useState<StatusFormItem>('default');
    const [statusPasswordNumbers, setStatusPasswordNumbers] = useState<StatusFormItem>('default');
    const [statusPasswordUppercase, setStatusPasswordUppercase] = useState<StatusFormItem>('default');
    const [statusPasswordSpecialSymbol, setStatusPasswordSpecialSymbol] = useState<StatusFormItem>('default');
    const [allStatusRepeatPassword, setAllStatusRepeatPassword] = useState<StatusFormItem>('default');
    const [statusRepeatPasswordText, setStatusRepeatPasswordText] = useState('');
    const [statusRepeatPassword, setStatusRepeatPassword] = useState<StatusFormItem>('default');
    const [statusRepeatPasswordNotMatch, setStatusRepeatPasswordNotMatch] = useState<StatusFormItem>('default');

    const validateUsername = useCallback(() => {
        if (username.length === 0) {
            setStatusUsername('error');
            return false;
        } else {
            setStatusUsername('default');
        }

        if (username.length < 6) {
            setStatusUsernameShort('error');
            return false;
        } else {
            setStatusUsernameShort('default');
        }

        return true;
    }, [username])

    const validatePassword = useCallback(() => {
        if (password.length === 0) {
            setStatusPassword('error');
            return false;
        } else {
            setStatusPassword('default');
        }

        if (password.length < 8) {
            setStatusPasswordShort('error');
            return false;
        } else {
            setStatusPasswordShort('default');
        }

        if (!(/\d/.test(password))) {
            setStatusPasswordNumbers('error');
            return false;
        } else {
            setStatusPasswordNumbers('default');
        }

        if (!(/[A-Z]/.test(password))) {
            setStatusPasswordUppercase('error');
            return false;
        } else {
            setStatusPasswordUppercase('default');
        }

        if (!(/[!@#$%^&*_+:;,.?~]/.test(password))) {
            setStatusPasswordSpecialSymbol('error');
            return false;
        } else {
            setStatusPasswordSpecialSymbol('default');
        }

        return true;
    }, [password])

    const validateRepeatPassword = useCallback(() => {
        if (repeatPassword.length === 0) {
            setStatusRepeatPassword('error');
            return false;
        } else {
            setStatusRepeatPassword('default');
        }

        if (repeatPassword !== password) {
            setStatusRepeatPasswordNotMatch('error');
            return false;
        } else {
            setStatusRepeatPasswordNotMatch('default');
        }

        return true;
    }, [repeatPassword])

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
            setAllStatusUsername('error');
            setStatusUsernameText('Введите username');
        } else if (statusUsernameShort === 'error') {
            setAllStatusUsername('error');
            setStatusUsernameText('Username должен быть не менее 6 символов');
        } else {
            setAllStatusUsername('default');
            setStatusUsernameText('');
        }
    }, [statusUsername, statusUsernameShort])

    useEffect(() => {
        if (statusPassword === 'error') {
            setAllStatusPassword('error');
            setStatusPasswordText('Введите пароль');
        } else if (statusPasswordShort === 'error') {
            setAllStatusPassword('error');
            setStatusPasswordText('Пароль должен быть не менее 8 символов');
        } else if (statusPasswordNumbers === 'error') {
            setAllStatusPassword('error');
            setStatusPasswordText('Пароль должен содержать минимум одну цифру');
        } else if (statusPasswordUppercase === 'error') {
            setAllStatusPassword('error');
            setStatusPasswordText('Пароль должен содержать минимум одну заглавную букву');
        } else if (statusPasswordSpecialSymbol === 'error') {
            setAllStatusPassword('error');
            setStatusPasswordText('Пароль должен содержать минимум один специальный символ (!@#$%^&*()_+{}[]:;<>,.?~)');
        } else {
            setAllStatusPassword('default');
            setStatusPasswordText('');
        }
    }, [statusPassword, statusPasswordShort, statusPasswordNumbers, statusPasswordUppercase, statusPasswordSpecialSymbol])

    useEffect(() => {
        if (statusRepeatPassword === 'error') {
            setAllStatusRepeatPassword('error');
            setStatusRepeatPasswordText('Введите пароль еще раз');
        } else if (statusRepeatPasswordNotMatch === 'error') {
            setAllStatusRepeatPassword('error');
            setStatusRepeatPasswordText('Пароль не совпадает');
        } else {
            setAllStatusRepeatPassword('default');
            setStatusRepeatPasswordText('');
        }
    }, [statusRepeatPassword, statusRepeatPasswordNotMatch])

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
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

                        <AvatarBlock avatar={avatar} statusAvatar={statusAvatar} setStatusAvatar={setStatusAvatar} />

                        <UsernameBlock
                            username={username}
                            allStatusUsername={allStatusUsername}
                            statusUsernameText={statusUsernameText}
                        />

                        <PasswordBlock
                            allStatusPassword={allStatusPassword}
                            statusPasswordText={statusPasswordText}
                            password={password}
                            allStatusRepeatPassword={allStatusRepeatPassword}
                            statusRepeatPasswordText={statusRepeatPasswordText}
                            repeatPassword={repeatPassword}
                        />

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