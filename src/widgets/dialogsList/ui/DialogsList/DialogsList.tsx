import { Card, FormItem, Group, Header, Input } from "@vkontakte/vkui"
import { ListDialogs } from "../ListDialogs/ListDialogs"
import cl from './DialogsList.module.scss';
import { HStack } from "@/shared/ui/Stack";

export const DialogsList = () => {
    return (
        <div className={cl.wrapper}>
            <Group style={{ height: '100%', overflow: 'scroll' }} className={cl.wrapperTwo}>
                <FormItem>
                    <HStack max justify="between">
                        Диалоги
                    </HStack>
                </FormItem>

                <FormItem htmlFor="searchDialog" top="Имя">
                    <Input
                        id="searchDialog"
                        type="text"
                    />
                </FormItem>

                <FormItem>
                    <ListDialogs />
                </FormItem>
            </Group>
        </div>
    )
}