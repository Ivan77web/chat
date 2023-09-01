import {
    View,
    Panel,
    PanelHeader,
} from "@vkontakte/vkui";

export const Navbar = () => {
    return (
        <View activePanel="header">
            <Panel id="header">
                <PanelHeader>
                    Chat
                </PanelHeader>
            </Panel>
        </View>
    )
}