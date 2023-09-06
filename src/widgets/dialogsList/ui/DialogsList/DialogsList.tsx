import { FormItem, Group, Header, Input } from "@vkontakte/vkui"
import { ListDialogs } from "../ListDialogs/ListDialogs"
import cl from './DialogsList.module.scss';
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { dialogsReducer, getDialogs } from "@/entities/Dialog";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserDialogsId } from "@/entities/User/model/selectors/userSelectors";

export const DialogsList = () => {
    const dispatch = useAppDispatch();
    const dialogsId = useSelector(getUserDialogsId);

    const reducers: ReducersList = {
        dialogs: dialogsReducer,
    }

    useEffect(() => {
        dispatch(getDialogs(dialogsId))
    }, [])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cl.wrapper}>
                <Group style={{ height: '100%' }}
                    header={
                        <Header
                            mode="tertiary"
                        >
                            Диалоги
                        </Header>
                    }
                >
                    <FormItem htmlFor="searchDialog" top="Имя">
                        <Input
                            id="searchDialog"
                            type="text"
                        />
                    </FormItem>

                    <ListDialogs />
                </Group>
            </div>
        </DynamicModuleLoader>
    )
}