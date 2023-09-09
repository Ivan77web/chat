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
    const dialog = useSelector(getCurrentDialogDialog);
    const dialogIsLoading = useSelector(getCurrentDialogIsLoading);
    const dialogError = useSelector(getCurrentDialogError);
    const users = useSelector(getCurrentDialogUsers);
    // const divRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (divRef.current) {
    //         console.log(1);


    //         divRef.current.scrollBy(0, 100000)
    //     }
    // }, [divRef])

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
        // <div ref={divRef}>
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
        // </div>
    );
});
