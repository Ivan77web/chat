import { HStack, VStack } from "@/shared/ui/Stack"
import { Icon56UserCircleOutline } from "@vkontakte/icons"
import { Headline, FormItem, Input, Avatar } from "@vkontakte/vkui"
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getRegistrationFormAvatar, getRegistrationFormStatusAvatar } from "../../model/selectors/registrationFormSelectors";
import cl from './AvatarBlock.module.scss';
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { registrationFormActions } from "../../model/slice/registrationFormSlice";
import { StatusFormItem } from "@/shared/types/statusFormItem";

export const AvatarBlock = () => {
    const dispatch = useAppDispatch();
    const avatar = useSelector(getRegistrationFormAvatar);
    const statusAvatar = useSelector(getRegistrationFormStatusAvatar);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(registrationFormActions.setAvatar(value))
    }, [dispatch])

    const setStatusAvatar = useCallback((value: StatusFormItem) => {
        dispatch(registrationFormActions.setStatusAvatar(value))
    }, [dispatch])

    useEffect(() => {
        dispatch(registrationFormActions.setStatusAvatar('default'));
    }, [avatar, dispatch])

    return (
        <HStack max gap="16">
            <VStack gap="4" max>
                <Headline level="1">Ссылка на аватар</Headline>

                <FormItem
                    status={statusAvatar}
                    className={cl.inputMax}
                    bottom={
                        statusAvatar === 'error' ? 'Фото не загружено' : ''
                    }
                >
                    <Input
                        className={cl.inputMax}
                        type="text"
                        onChange={(e) => onChangeAvatar(e.target.value)}
                        value={avatar}
                    />
                </FormItem>
            </VStack>

            <HStack
                className={cl.block_for_photo}
                justify="center"
                align="center"
                style={{ display: avatar.length === 0 ? "flex" : statusAvatar === 'error' ? 'flex' : "none" }}
            >
                <Icon56UserCircleOutline />
            </HStack>

            <Avatar
                src={avatar}
                size={96}
                onLoad={() => setStatusAvatar('default')}
                onError={() => setStatusAvatar('error')}
                style={{ display: statusAvatar === 'error' ? 'none' : avatar.length > 0 ? "block" : "none" }}
            />
        </HStack>
    )
}