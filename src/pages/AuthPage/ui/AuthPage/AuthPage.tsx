import { HStack, VStack } from "@/shared/ui/Stack";
import { RegistrationButton } from "@/features/registrationButton";
import { AuthByUsername } from "@/features/authByUsername";
import { Auth } from "@/widgets/auth";

const AuthPage = () => {
    return (
        <HStack justify="center">
            <VStack gap="16">
                <Auth />
                <RegistrationButton />
            </VStack>
        </HStack>
    )
}

export default AuthPage;