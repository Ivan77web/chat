import { Dialog } from "@/entities/Dialog";
import { Card } from "@/shared/ui/Card";
import { HStack } from "@/shared/ui/Stack";
import { Avatar } from "@vkontakte/vkui";
import cl from './DialogCard.module.scss';
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { currentDialogsActions, getDataForCurrentDialog } from "@/entities/CurrentDialog";

interface DialogCardProps {
    dialog: Dialog,
}

export const DialogCard = ({ dialog }: DialogCardProps) => {
    const dispatch = useAppDispatch();
    const lastMessage = dialog.messages[dialog.messages.length - 1];

    const onChangeDialog = useCallback((id: string) => {
        dispatch(getDataForCurrentDialog({idDialog: id}))
    }, [dispatch])

    return (
        <Card
            variant="dark"
            padding="16"
            className={cl.card}
            onClick={() => onChangeDialog(dialog.id)}
        >
            <HStack gap="16" max>
                <Avatar src="https://sun9-79.userapi.com/impg/tRxej3Q1HTz4NAgsFDR2nlFni-I4PYgQqhiV3w/VI2RqkRijKE.jpg?size=960x960&quality=95&sign=79f905338520287eb55a728d93e1c100&type=album" />
                <p className={cl.titleMessage}>{lastMessage.message}</p>
                <p>{lastMessage.time}</p>
            </HStack>
        </Card>
    )
}