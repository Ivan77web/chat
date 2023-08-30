import { AuthByUsername } from "@/features/authByUsername";
import { AppRoot, SplitLayout, PanelHeader, SplitCol, View, Panel, Group, Header, SimpleCell } from "@vkontakte/vkui";

const AuthPage = () => {
    return (
        // <div className="test">
        //     <AuthByUsername />

        //     <div className="test">

        //     </div>
        // </div>

        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false} />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>VKUI</PanelHeader>
                            <Group header={<Header mode="secondary">Items</Header>}>
                                <SimpleCell>Hello</SimpleCell>
                                <SimpleCell>World</SimpleCell>
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    )
}

export default AuthPage;