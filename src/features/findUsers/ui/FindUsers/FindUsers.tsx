import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { findUsersSliceActions, findUsersSliceReducer } from "../../model/slice/findUsers"
import { useCallback, useEffect } from "react"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getAllUsers } from "../../model/services/getAllUsers"
import { useSelector } from "react-redux"
import { getFindFilterUsers, getFindUsersAllUsers, getFindUsersError, getFindUsersIsLoading } from "../../model/selectors/findUsersSelectors"
import { User } from "@/entities/User"
import { getDialogsFindUser } from "@/entities/Dialog"
import { Avatar, HorizontalCell } from "@vkontakte/vkui"
import { Icon48UserRectangleHorizontalOutline } from "@vkontakte/icons"
import { HStack } from "@/shared/ui/Stack"
import cl from './FindUsers.module.scss';
import { getUserAuthData } from "@/entities/User/model/selectors/userSelectors"
import { addNewDialog } from "../../model/services/addNewDialog"

export const FindUsers = () => {
    const value = useSelector(getDialogsFindUser);
    const dispatch = useAppDispatch();
    const users = useSelector(getFindUsersAllUsers);
    const filterUsers = useSelector(getFindFilterUsers);
    const isLoading = useSelector(getFindUsersIsLoading);
    const error = useSelector(getFindUsersError);
    const myUser = useSelector(getUserAuthData);
    const reducers: ReducersList = {
        findUsers: findUsersSliceReducer
    }

    const addDialog = useCallback((user: User) => {
        if (myUser) {
            dispatch(addNewDialog({
                myUser,
                guest: user
            }))
        }
    }, [myUser])

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    useEffect(() => {
        if (!isLoading) {
            let filterUsers: User[] = [];

            if (value) {
                users.map(user => {
                    console.log(user.username.toLowerCase());

                    if (user.username.toLowerCase().includes(value.toLowerCase())) {
                        filterUsers.push(user);
                    }
                })
            } else {
                filterUsers = [];
            }

            dispatch(findUsersSliceActions.setFilterUsers(filterUsers))
        }
    }, [value, isLoading])

    if (isLoading) {
        return (
            <DynamicModuleLoader reducers={reducers}>

            </DynamicModuleLoader>
        )
    }

    if (error) {
        return (
            <DynamicModuleLoader reducers={reducers}>
                <p>Произошла ошибка. Перезагрузите страницу.</p>
            </DynamicModuleLoader>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack max className={cl.wrapperForCell} gap="8">
                {
                    filterUsers?.map(user =>
                        <HorizontalCell
                            key={user.id}
                            size="s"
                            header={user.username}
                            onClick={() => addDialog(user)}
                        >
                            {
                                user.avatar
                                    ?
                                    <Avatar size={56} src={user.avatar} />
                                    :
                                    <Icon48UserRectangleHorizontalOutline />
                            }
                        </HorizontalCell>
                    )
                }
            </HStack>
        </DynamicModuleLoader >
    )
}