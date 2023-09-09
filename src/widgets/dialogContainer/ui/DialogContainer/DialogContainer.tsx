import { Avatar, FormItem, Group, Header, Input, Spinner } from "@vkontakte/vkui"
import cl from './DialogContainer.module.scss';
import { HStack, VStack } from "@/shared/ui/Stack";
import { DialogBlock } from "../DialogBlock/DialogBlock";
import { useSelector } from "react-redux";
import { getDialogsIsLoading } from "@/entities/Dialog";
import { HeaderBlock } from "../HeaderBlock/HeaderBlock";
import { getCurrentDialogDialog, getCurrentDialogIsLoading } from "@/entities/CurrentDialog/model/selectors/currentDialogSelectors";
import { ReactNode, useEffect, useState } from "react";
import { Card } from "@/shared/ui/Card";
import { NewMessage } from "@/entities/NewMessage";

const textDialogNotSelected = (
    <VStack maxHeight justify='center'>
        <HStack max justify='center'>
            <p>Диалог не выбран</p>
        </HStack>
    </VStack>
)

export const DialogContainer = () => {
    const isLoadingDialogs = useSelector(getDialogsIsLoading);
    const currentDialogIdLoading = useSelector(getCurrentDialogIsLoading);
    const dialog = useSelector(getCurrentDialogDialog);
    const [content, setContent] = useState<ReactNode>(null);

    useEffect(() => {
        if (isLoadingDialogs || currentDialogIdLoading) {
            setContent(<Spinner size="large" />);
        } else if (!dialog) {
            setContent(textDialogNotSelected);
        } else {
            setContent(
                <VStack
                    maxHeight
                    max
                    justify="between"
                >
                    <Card max>
                        <HeaderBlock />
                    </Card>

                    <Card className={cl.dialogBlock} max>
                        <DialogBlock />
                    </Card>

                    <Card max>
                        <NewMessage />
                    </Card>
                </VStack>
            )
        }
    }, [isLoadingDialogs, currentDialogIdLoading, dialog])

    return (
        <div className={cl.wrapper}>
            <Group style={{ height: '100%' }}>
                {
                    content
                }
            </Group>
        </div >
    )
}