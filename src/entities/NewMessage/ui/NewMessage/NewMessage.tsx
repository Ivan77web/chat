import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Input } from "@vkontakte/vkui"
import { useCallback } from "react"
import { newMessageActions } from "../../model/slice/NewMessageSlice";
import { useSelector } from "react-redux";
import { getNewMessage } from "../../model/selectors/newMessageSelectors";
import { getUserId } from "@/entities/User";
import { getCurrentDialogId } from "@/entities/CurrentDialog";
import { sendNewMessage } from "../../model/services/sendNewMessage";

export const NewMessage = () => {
    const dispatch = useAppDispatch();
    const value = useSelector(getNewMessage);
    const myId = useSelector(getUserId);
    const currentDialogId = useSelector(getCurrentDialogId);

    const onChange = useCallback((value: string) => {
        dispatch(newMessageActions.setMessage(value))
    }, [dispatch])

    const onKeyDown = useCallback((key: string) => {
        if (key === 'Enter') {
            if (myId && currentDialogId) {
                const newDate = new Date();

                let day: number | string = newDate.getDate();
                let month: number | string = newDate.getMonth();
                let year = newDate.getFullYear();

                if (String(day).length < 2) day = "0" + String(day);
                if (String(month).length < 2) month = "0" + String(month);

                const date = `${day}:${month}:${year}`
                const time = newDate.toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' });


                dispatch(sendNewMessage({
                    autorID: myId,
                    mes: value,
                    date: date,
                    time: time,
                    currentDialogId: currentDialogId,
                }))

                dispatch(newMessageActions.resetMessage());
            }
        }
    }, [value, dispatch, myId, currentDialogId])

    return (
        <Input
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => onKeyDown(e.key)}
            value={value}
            id="searchDialog"
            type="text"
        />
    )
}