import { dialogsActions } from "@/entities/Dialog";
import { getDialogsFindUser } from "@/entities/Dialog/model/selectors/dialogsSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "@vkontakte/vkui"
import { useCallback, useState } from "react"
import { useSelector } from "react-redux";

export const SearchDialog = () => {
    const dispatch = useAppDispatch();
    const value = useSelector(getDialogsFindUser);

    const onChange = useCallback((value: string) => {
        dispatch(dialogsActions.setFindUser(value));
        dispatch(dialogsActions.searchDialog(value));
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