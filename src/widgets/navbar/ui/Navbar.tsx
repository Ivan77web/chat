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

export const Navbar = () => {
    const auth = useSelector(getUserInited);

    return (
        <View activePanel="header">
            <Panel id="header">
                <PanelHeader>
                    <HStack justify="between">
                        Chat

                        {
                            auth && (
                                // <Logout />
                                <ProfilePopover/>
                            )
                        }
                    </HStack>
                </PanelHeader>
            </Panel>
        </View>
    )
}