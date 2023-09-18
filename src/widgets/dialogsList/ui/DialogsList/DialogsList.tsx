import { Card, FormItem, Group, Header, Input } from "@vkontakte/vkui"
import { ListDialogs } from "../ListDialogs/ListDialogs"
import cl from './DialogsList.module.scss';
import { HStack } from "@/shared/ui/Stack";
import { SearchDialog } from "../SearchDialog/SearchDialog";
import { FindUsers } from "@/features/findUsers";

export const DialogsList = () => {
    return (
        <div className={cl.wrapper}>
            <Group style={{ height: '100%', overflow: 'scroll' }} className={cl.wrapperTwo}>
                <FormItem>
                    <HStack max justify="center">
                        <h4>Диалоги</h4>
                    </HStack>
                </FormItem>

                <FormItem htmlFor="searchDialog" top="Имя">
                    <SearchDialog />
                </FormItem>

                <FormItem>
                    <ListDialogs />
                </FormItem>
            </Group>
        </div>
    )
}