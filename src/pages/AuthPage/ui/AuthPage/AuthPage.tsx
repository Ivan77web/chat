import { HStack, VStack } from "@/shared/ui/Stack";
import { RegistrationButton } from "@/features/registrationButton";
import { AuthByUsername } from "@/features/authByUsername";
import { Auth } from "@/widgets/auth";
import { Page } from "@/shared/ui/Page";

const AuthPage = () => {
    return (
        <Page>
            <HStack justify="center">
                <VStack gap="16">
                    <Auth />
                    <RegistrationButton />
                </VStack>
            </HStack>
        </Page>
    )
}

export default AuthPage;