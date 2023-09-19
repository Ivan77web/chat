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
import { AppLink } from "@/shared/ui/AppLink";
import { getPathMain } from "@/shared/const/router";
import { Icon56LogoVkColor } from '@vkontakte/icons';

export const Navbar = () => {
    const auth = useSelector(getUserInited);

    return (
        <div className={cl.navbar}>
            <VStack maxHeight justify="center" align="center">
                <HStack justify="between" max>
                    <div className={cl.title}>
                        <AppLink to={getPathMain()}>
                            <HStack>
                                <Icon56LogoVkColor/>
                                Chat
                            </HStack>
                        </AppLink>
                    </div>

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