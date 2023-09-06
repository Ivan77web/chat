import { FormItem, Group, Header, Input } from "@vkontakte/vkui"
import { ListDialogs } from "../ListDialogs/ListDialogs"
import cl from './DialogsList.module.scss';

export const DialogsList = () => {
    return (
        <div className={cl.wrapper}>
            <Group style={{ height: '100%' }}
                header={
                    <Header
                        mode="tertiary"
                    >
                        Диалоги
                    </Header>
                }
            >
                <FormItem htmlFor="searchDialog" top="Имя">
                    <Input
                        id="searchDialog"
                        type="text"
                    />
                </FormItem>

                <ListDialogs />
            </Group>
        </div>
    )
}