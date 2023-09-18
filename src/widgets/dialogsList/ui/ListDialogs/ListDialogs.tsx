import { getDialogs, getFilteredDialogsData } from "@/entities/Dialog";
import { getDialogsData, getDialogsError, getDialogsIsLoading } from "@/entities/Dialog";
import { getUserDialogsId } from "@/entities/User/model/selectors/userSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Spinner } from "@vkontakte/vkui";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DialogCard } from "../DialogCard/DialogCard";
import { HStack, VStack } from "@/shared/ui/Stack";
import { FindUsers } from "@/features/findUsers";
import { getDialogsFindUser } from "@/entities/Dialog/model/selectors/dialogsSelectors";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { findUsersSliceReducer } from "@/features/findUsers/model/slice/findUsers";

export const ListDialogs = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getDialogsIsLoading);
    const error = useSelector(getDialogsError);
    const dialogs = useSelector(getFilteredDialogsData);
    const valueFindUser = useSelector(getDialogsFindUser);
    const dialogsId = useSelector(getUserDialogsId);

    useEffect(() => {
        dispatch(getDialogs(dialogsId))
    }, []);

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

    if (dialogs.length === 0 && valueFindUser !== '') {
        return (
            <VStack max>
                <HStack justify="center" max>
                    Нет диалогов
                </HStack>

                <HStack max>
                    <FindUsers />
                </HStack>
            </VStack>
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