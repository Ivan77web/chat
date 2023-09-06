import { Page } from "@/shared/ui/Page/Page"
import { HStack } from "@/shared/ui/Stack"
import { DialogContainer } from "@/widgets/dialogContainer"
import { DialogsList } from "@/widgets/dialogsList"

const MainPage = () => {
    return (
        <Page>
            <HStack justify="between" gap="16" maxHeight isStretch>
                <DialogsList />

                <DialogContainer />
            </HStack>
        </Page>
    )
}

export default MainPage