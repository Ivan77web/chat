import { HStack, VStack } from "@/shared/ui/Stack";
import { RegistrationButton } from "@/features/registrationButton";
import { AuthByUsername } from "@/features/authByUsername";

const AuthPage = () => {
    return (
        <HStack justify="center">
            <VStack gap="16">
                <AuthByUsername />
                <RegistrationButton />
            </VStack>
        </HStack>
    )
}

export default AuthPage;