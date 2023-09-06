import { getUserInited } from "@/entities/User";
import { Logout } from "@/features/logout";
import { HStack } from "@/shared/ui/Stack";
import { ProfilePopover } from "@/widgets/profilePopover";
import {
    View,
    Panel,
    PanelHeader,
} from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import cl from './Navbar.module.scss';

export const Navbar = () => {
    const auth = useSelector(getUserInited);

    return (
        <div className={cl.navbar}>
            <View activePanel="header">
                <Panel id="header">
                    <PanelHeader>
                        <HStack justify="between">
                            Chat

                            {
                                auth && (
                                    // <Logout />
                                    <ProfilePopover />
                                )
                            }
                        </HStack>
                    </PanelHeader>
                </Panel>
            </View>
        </div>
    )
}