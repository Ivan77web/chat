import { HStack, VStack } from "@/shared/ui/Stack";
import { RegistrationButton } from "@/features/registrationButton";
import { AuthByUsername } from "@/features/authByUsername";
import { Auth } from "@/widgets/auth";
import { Page } from "@/shared/ui/Page";
import { useSelector } from "react-redux";
import { getUserAuthData, getUserInited } from "@/entities/User/model/selectors/userSelectors";
import { useNavigate } from "react-router-dom";
import { getPathMain } from "@/shared/const/router";
import { useEffect } from "react";

const AuthPage = () => {
    const auth = useSelector(getUserInited);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate(getPathMain());
        }
    }, [auth])

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