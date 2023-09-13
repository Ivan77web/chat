import { getUserInited } from "@/entities/User";
import { Logout } from "@/features/logout";
import { HStack, VStack } from "@/shared/ui/Stack";
import { ProfilePopover } from "@/widgets/profilePopover";
import {
    View,
    Panel,
    PanelHeader,
    Card,
} from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import cl from './Navbar.module.scss';
import { Link } from "react-router-dom";
import { AppLink } from "@/shared/ui/AppLink";
import { getPathMain } from "@/shared/const/router";

export const Navbar = () => {
    const auth = useSelector(getUserInited);

    return (
        <div className={cl.navbar}>
            <VStack maxHeight justify="center" align="center">
                <HStack justify="between" max>
                    <p className={cl.title}>
                        <AppLink to={getPathMain()}>
                            Chat
                        </AppLink>
                    </p>

                    {
                        auth && (
                            <ProfilePopover />
                        )
                    }
                </HStack>
            </VStack>
        </div>
    )
}