import { Dialog } from "@/entities/Dialog";
import { Card } from "@/shared/ui/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Avatar } from "@vkontakte/vkui";
import cl from './DialogCard.module.scss';
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getDataForCurrentDialog } from "@/entities/CurrentDialog";
import { useSelector } from "react-redux";
import { getUserId } from "@/entities/User";
import { Icon48UserRectangleHorizontalOutline } from '@vkontakte/icons';

interface DialogCardProps {
    dialog: Dialog,
}

export const DialogCard = ({ dialog }: DialogCardProps) => {
    const dispatch = useAppDispatch();
    const myId = useSelector(getUserId);
    const lastMessage = dialog?.messages[dialog.messages.length - 1] || null;
    const guestAvatarId = dialog.participants[0].id !== myId ? dialog.participants[0].avatar : dialog.participants[1].avatar;
    const guestName = dialog.participants[0].id !== myId ? dialog.participants[0].username : dialog.participants[1].username;
    const correctTime = lastMessage?.time.slice(0, -3) || '';
    const messageInLastMessage = lastMessage?.message || '';

    const onChangeDialog = useCallback((id: string) => {
        dispatch(getDataForCurrentDialog({ idDialog: id }))
    }, [dispatch])

    return (
        <Card
            variant="dark"
            padding="16"
            className={cl.card}
            onClick={() => onChangeDialog(dialog.id)}
        >
            <HStack gap="16" max justify="between">
                <div className={cl.avatarBlock}>
                    {
                        guestAvatarId
                            ?
                            <Avatar src={guestAvatarId} />
                            :
                            <Icon48UserRectangleHorizontalOutline />

                    }
                </div>
                <VStack className={cl.body}>
                    <h4 className={cl.guestName}>{guestName}</h4>
                    <p className={cl.titleMessage}>{messageInLastMessage}</p>
                </VStack>

                <p>{correctTime}</p>
            </HStack>
        </Card>
    )
}