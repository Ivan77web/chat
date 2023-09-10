import { dialogsActions } from "@/entities/Dialog";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "@vkontakte/vkui"
import { useCallback, useState } from "react"

export const SearchDialog = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const onChange = useCallback((value: string) => {
        dispatch(dialogsActions.searchDialog(value));
        setValue(value);
    }, [dispatch, value])

    return (
        <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            id="searchDialog"
            type="text"
        />
    )
}