import { RegistrationForm } from "@/widgets/registrationForm"
import { Page } from "@/shared/ui/Page/Page"
import { HStack } from "@/shared/ui/Stack"

const RegistrationPage = () => {
    return (
        <Page>
            <HStack max justify="center">
                <RegistrationForm />
            </HStack>
        </Page>
    )
}

export default RegistrationPage