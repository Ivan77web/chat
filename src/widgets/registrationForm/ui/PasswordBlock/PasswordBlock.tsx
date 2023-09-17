import { VStack, HStack } from "@/shared/ui/Stack"
import { Icon16InfoCircle } from "@vkontakte/icons"
import { Headline, FormItem, Input } from "@vkontakte/vkui"
import { TextTooltip } from "@vkontakte/vkui/dist/components/TextTooltip/TextTooltip"
import cl from './PasswordBlock.module.scss';
import { useCallback, useEffect } from "react";
import { registrationFormActions } from "../../model/slice/registrationFormSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { StatusFormItem } from "@/shared/types/statusFormItem";
import { useSelector } from "react-redux";
import { 
    getRegistrationFormAllStatusPassword, 
    getRegistrationFormAllStatusRepeatPassword, 
    getRegistrationFormPassword, 
    getRegistrationFormRepeatPassword, 
    getRegistrationFormStatusPasswordText, 
    getRegistrationFormStatusRepeatPasswordText 
} from "../../model/selectors/registrationFormSelectors";

export const PasswordBlock = () => {
    const dispatch = useAppDispatch();
    const allStatusPassword = useSelector(getRegistrationFormAllStatusPassword)
    const statusPasswordText = useSelector(getRegistrationFormStatusPasswordText)
    const password = useSelector(getRegistrationFormPassword)
    const allStatusRepeatPassword = useSelector(getRegistrationFormAllStatusRepeatPassword)
    const statusRepeatPasswordText = useSelector(getRegistrationFormStatusRepeatPasswordText)
    const repeatPassword = useSelector(getRegistrationFormRepeatPassword)

    const onChangePassword = useCallback((value: string) => {
        dispatch(registrationFormActions.setPassword(value))
    }, [dispatch])

    const onChangeRepeatPassword = useCallback((value: string) => {
        dispatch(registrationFormActions.setRepeatPassword(value))
    }, [dispatch])

    return (
        <>
            <VStack gap="4" max>
                <Headline level="1">
                    <HStack gap="16">
                        Пароль

                        <TextTooltip text={
                            <p>
                                Минимальная длина - 8 символов <br />
                                Пароль должен содержать минимум одну цифру <br />
                                Пароль должен содержать минимум одну заглавную буквук <br />
                                Пароль должен содержать минимум один специальный символ (!@#$%^&*_+:;,.?~)
                            </p>
                        }>
                            <Icon16InfoCircle />
                        </TextTooltip>
                    </HStack>
                </Headline>
                <FormItem
                    status={allStatusPassword}
                    className={cl.inputMax}
                    bottom={statusPasswordText}
                >
                    <Input
                        className={cl.inputMax}
                        type="password"
                        value={password}
                        onChange={(e) => onChangePassword(e.target.value)}
                    />
                </FormItem>
            </VStack>

            <VStack gap="4" max>
                <Headline level="1">Повторите пароль</Headline>
                <FormItem
                    status={allStatusRepeatPassword}
                    className={cl.inputMax}
                    bottom={statusRepeatPasswordText}
                >
                    <Input
                        className={cl.inputMax}
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => onChangeRepeatPassword(e.target.value)}
                    />
                </FormItem>
            </VStack>
        </>
    )
}