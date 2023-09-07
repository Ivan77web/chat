import { Avatar, FormItem, Group, Header, Input, Spinner } from "@vkontakte/vkui"
import cl from './DialogContainer.module.scss';
import { ListDialogs } from "@/widgets/dialogsList/ui/ListDialogs/ListDialogs";
import { HStack } from "@/shared/ui/Stack";
import { DialogBlock } from "../DialogBlock/DialogBlock";
import { useSelector } from "react-redux";
import { getDialogsIsLoading } from "@/entities/Dialog";

export const DialogContainer = () => {
    const isLoadingDialogs = useSelector(getDialogsIsLoading);

    return (
        <div className={cl.wrapper}>
            <Group style={{ height: '100%' }}>
                {
                    isLoadingDialogs
                        ?
                        <Spinner size="large" />
                        :
                        (
                            <>
                                <FormItem>
                                    <HStack max justify="between">
                                        <p>Назад</p>
                                        <p>Шестопалов Иван</p>
                                        <Avatar src="https://sun9-79.userapi.com/impg/tRxej3Q1HTz4NAgsFDR2nlFni-I4PYgQqhiV3w/VI2RqkRijKE.jpg?size=960x960&quality=95&sign=79f905338520287eb55a728d93e1c100&type=album" />
                                    </HStack>
                                </FormItem>

                                <FormItem>
                                    <DialogBlock />
                                </FormItem>

                                <FormItem htmlFor="searchDialog" top="Имя">
                                    <Input
                                        id="searchDialog"
                                        type="text"
                                    />
                                </FormItem>
                            </>
                        )
                }
            </Group>
        </div>
    )
}