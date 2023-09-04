
import { userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Button } from "@vkontakte/vkui";
import { useCallback } from "react"

export const Logout = () => {
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    return (
        <Button
            onClick={onLogout}
            size="l"
            mode="secondary"
            stretched
        >
            Выйти
        </Button>
    )
}