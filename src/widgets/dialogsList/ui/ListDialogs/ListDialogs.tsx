import { dialogsReducer, getDialogs } from "@/entities/Dialog";
import { getDialogsData, getDialogsError, getDialogsIsLoading } from "@/entities/Dialog";
import { getUserDialogsId } from "@/entities/User/model/selectors/userSelectors";
import { ReducersList, DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Spinner } from "@vkontakte/vkui";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DialogCard } from "../DialogCard/DialogCard";
import { VStack } from "@/shared/ui/Stack";

export const ListDialogs = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getDialogsIsLoading);
    const error = useSelector(getDialogsError);
    const dialogs = useSelector(getDialogsData);

    const dialogsId = useSelector(getUserDialogsId);

    useEffect(() => {
        console.log(1);
        console.log(isLoading);


        dispatch(getDialogs(dialogsId))
    }, []);

    useEffect(() => {
        console.log(isLoading);

    }, [isLoading])

    if (error) {
        return (
            <div>
                Произошла ошибка
            </div>
        )
    }

    if (isLoading) {
        return (
            <Spinner size="large" />
        )
    }

    return (
        <div>
            {
                dialogs.map(dialog => <DialogCard key={dialog.id} dialog={dialog} />)
            }
        </div>
    )
}