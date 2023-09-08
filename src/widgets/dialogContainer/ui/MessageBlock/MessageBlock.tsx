import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './MessageBlock.module.scss';
import { Message } from '@/entities/Dialog';
import { HStack, VStack } from '@/shared/ui/Stack';
import { User } from '@/entities/User';
import { Avatar } from '@vkontakte/vkui';
import { Icon36UserCircleOutline } from '@vkontakte/icons';

interface MessageBlockProps {
    className?: string;
    messageItem: Message;
    user: User
}

export const MessageBlock = memo((props: MessageBlockProps) => {
    const {
        className,
        messageItem,
        user,
    } = props;

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
            max
        >
            <HStack justify='between' max>
                <HStack gap='8'>
                    {
                        user.avatar
                            ?
                            <Avatar src={user.avatar} />
                            :
                            <Icon36UserCircleOutline />
                    }
                    {
                        user.username
                    }
                </HStack>

                <VStack>
                    <p>{time}</p>
                    <p>{date}</p>
                </VStack>
            </HStack>

            {message}
        </VStack>
    );
});
