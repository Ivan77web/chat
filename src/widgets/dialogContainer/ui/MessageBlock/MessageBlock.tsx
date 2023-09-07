import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './MessageBlock.module.scss';
import { Message } from '@/entities/Dialog';
import { HStack, VStack } from '@/shared/ui/Stack';

interface MessageBlockProps {
    className?: string;
    messageItem: Message;
}

export const MessageBlock = memo(({ className, messageItem }: MessageBlockProps) => {
    const {
        autorId,
        date,
        message,
        time,
    } = messageItem;

    return (
        <VStack
            className={classNames(cl.MessageBlock, {}, [className])}
            gap='16'
        >
            <HStack gap='8' max>
                {autorId}
                {time}
            </HStack>

            {message}
        </VStack>
    );
});
