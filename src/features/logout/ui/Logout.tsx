
import { userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Button } from "@/shared/ui/Button"
import { useCallback } from "react"

export const Logout = () => {
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    return (
        <div>
            <Button
                title="Выход"
                onClick={onLogout}
                variant="outline"
            />
        </div>
    )
}