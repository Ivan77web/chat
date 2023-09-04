import { Counter } from "@/entities/Counter"
import { AuthByUsername } from "@/features/authByUsername"
import { Logout } from "@/features/logout"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Page } from "@/shared/ui/Page/Page"
import { HStack } from "@/shared/ui/Stack"
import { View, Panel, PanelHeader } from "@vkontakte/vkui"
import { useEffect } from "react"

const MainPage = () => {
    return (
        // <div className={classNames('', {}, [])}>
        //     Main page
        // </div>

        <Page>
            Main page
        </Page>
    )
}

export default MainPage