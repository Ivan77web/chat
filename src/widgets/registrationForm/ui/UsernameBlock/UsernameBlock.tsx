import { VStack, HStack } from "@/shared/ui/Stack"
import { Icon16InfoCircle } from "@vkontakte/icons"
import { Headline, FormItem, Input } from "@vkontakte/vkui"
import { TextTooltip } from "@vkontakte/vkui/dist/components/TextTooltip/TextTooltip"
import cl from './UsernameBlock.module.scss';
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { registrationFormActions } from "../../model/slice/registrationFormSlice";
import { StatusFormItem } from "@/shared/types/statusFormItem";
import { useSelector } from "react-redux";
import { getRegistrationFormAllStatusUsername, getRegistrationFormStatusUsernameText, getRegistrationFormUsername } from "../../model/selectors/registrationFormSelectors";

export const UsernameBlock = () => {
    const dispatch = useAppDispatch();
    const username = useSelector(getRegistrationFormUsername);
    const allStatusUsername = useSelector(getRegistrationFormAllStatusUsername);
    const statusUsernameText = useSelector(getRegistrationFormStatusUsernameText);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(registrationFormActions.resetError());
        dispatch(registrationFormActions.setUsername(value))
    }, [dispatch])

    return (
        <VStack gap="4" max>
            <Headline level="1">
                <HStack gap="16">
                    Логин

                    <TextTooltip text="Минимальная длина - 6 символов">
                        <Icon16InfoCircle />
                    </TextTooltip>
                </HStack>
            </Headline>

            <FormItem
                status={allStatusUsername}
                className={cl.inputMax}
                bottom={statusUsernameText}
            >
                <Input
                    className={cl.inputMax}
                    type="text"
                    onChange={(e) => onChangeUsername(e.target.value)}
                    value={username}
                />
            </FormItem>
        </VStack>
    )
}