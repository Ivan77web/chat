import { memo, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './DialogBlock.module.scss';
import { useSelector } from 'react-redux';
import { Spinner } from '@vkontakte/vkui';
import { MessageBlock } from '../MessageBlock/MessageBlock';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
    getCurrentDialogDialog,
    getCurrentDialogError,
    getCurrentDialogIsLoading,
    getCurrentDialogUsers
} from '@/entities/CurrentDialog/model/selectors/currentDialogSelectors';

interface DialogBlockProps {
    className?: string;
}

export const DialogBlock = memo(({ className }: DialogBlockProps) => {
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);
    const dialog = useSelector(getCurrentDialogDialog);
    const dialogIsLoading = useSelector(getCurrentDialogIsLoading);
    const dialogError = useSelector(getCurrentDialogError);
    const users = useSelector(getCurrentDialogUsers);

    // Функция для прокрутки контейнера вниз
    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    // Прокручиваем контейнер вниз при изменении сообщений
    useEffect(() => {
        scrollToBottom();
    }, [dialog]);


    if (dialogIsLoading) {
        return (
            <Spinner size='large' />
        )
    }

    if (dialogError) {
        return (
            <p>Произошла ошибка</p>
        )
    }

    if (dialog === undefined) {
        return (
            <p>Диалог не выбран</p>
        )
    }

    if (users === undefined) {
        return (
            <Spinner size='large' />
        )
    }

    return (
        <div
            ref={messagesContainerRef}
            className={cl.container}
        >
            <VStack gap='32' className={classNames(cl.DialogBlock, {}, [className])}>
                {
                    dialog.messages.map((mes, index) =>
                        <MessageBlock
                            key={index}
                            messageItem={mes}
                            user={mes.autorId === users[0].id ? users[0] : users[1]}
                        />
                    )
                }
            </VStack>
        </div>
    );
});
