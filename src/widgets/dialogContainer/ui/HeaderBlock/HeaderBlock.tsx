import { getCurrentDialogUsers } from "@/entities/CurrentDialog/model/selectors/currentDialogSelectors";
import { getUserId } from "@/entities/User";
import { HStack } from "@/shared/ui/Stack"
import { FormItem, Avatar, Button } from "@vkontakte/vkui"
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icon36UserCircleOutline } from '@vkontakte/icons';
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { currentDialogsActions } from "@/entities/CurrentDialog";

export const HeaderBlock = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(getCurrentDialogUsers);
    const myId = useSelector(getUserId);;
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');

    const onComeBack = useCallback(() => {
        dispatch(currentDialogsActions.resetDialog());
    }, [dispatch])

    useEffect(() => {
        if (users) {
            setName((myId === users[0].id) ? users[1].username : users[0].username);
            setSrc((myId === users[0].id) ? users[1].avatar || '' : users[0].avatar || '');
        }
    }, [users])

    return (
        <HStack
            max
            justify="between"
        >
            <Button
                onClick={onComeBack}
                mode="tertiary"
                size="l"
            >
                Назад
            </Button>
            <p>{name}</p>
            {
                src
                    ?
                    <Avatar src={src} />
                    :
                    <Icon36UserCircleOutline />
            }
        </HStack>
    )
}