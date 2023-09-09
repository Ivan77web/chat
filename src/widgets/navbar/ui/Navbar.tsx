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

export const Navbar = () => {
    const auth = useSelector(getUserInited);

    return (
        <div className={cl.navbar}>
            <HStack justify="between" max>
                <p className={cl.title}>
                    Chat
                </p>

                {
                    auth && (
                        <ProfilePopover />
                    )
                }
            </HStack>
        </div>
    )
}