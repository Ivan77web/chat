import { getCurrentDialogUsers } from "@/entities/CurrentDialog/model/selectors/currentDialogSelectors";
import { getUserId } from "@/entities/User";
import { HStack } from "@/shared/ui/Stack"
import { FormItem, Avatar } from "@vkontakte/vkui"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icon36UserCircleOutline } from '@vkontakte/icons';

export const HeaderBlock = () => {
    const users = useSelector(getCurrentDialogUsers);
    const myId = useSelector(getUserId);;
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');

    useEffect(() => {
        if (users) {
            setName((myId === users[0].id) ? users[1].username : users[0].username);
            setSrc((myId === users[0].id) ? users[1].avatar || '' : users[0].avatar || '');
        }
    }, [users])

    return (
        <HStack max justify="between">
            <p>Назад</p>
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