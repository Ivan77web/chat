import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './DialogBlock.module.scss';
import { useSelector } from 'react-redux';
import { getCurrentDialogId } from '@/entities/CurrentDialog';
import { Dialog, getDialogsData } from '@/entities/Dialog';
import { Spinner } from '@vkontakte/vkui';
import { MessageBlock } from '../MessageBlock/MessageBlock';
import { VStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { User } from '@/entities/User';
import { getUserId } from '@/entities/User/model/selectors/userSelectors';

interface DialogBlockProps {
    className?: string;
}

export const DialogBlock = memo(({ className }: DialogBlockProps) => {
    const dispatch = useAppDispatch();
    const currentDialogId = useSelector(getCurrentDialogId);
    const allDialogs = useSelector(getDialogsData);
    const [currentDialog, setCurrentDialog] = useState<Dialog | null>(null);

    useEffect(() => {
        allDialogs.map(dialog => {
            if (dialog.id === currentDialogId) {
                setCurrentDialog(dialog);
            }
        })
    }, [currentDialogId, allDialogs])

    if (currentDialogId === null || currentDialog === null) {
        return (
            <p>Диалог не выбран</p>
        )
    }

    return (
        <VStack gap='32' className={classNames(cl.DialogBlock, {}, [className])}>
            {
                currentDialog.messages.map((mes, index) =>
                    <MessageBlock
                        key={index}
                        messageItem={mes}
                    />
                )
            }
        </VStack>
    );
});
