import AuthPage from "@/pages/AuthPage/ui/AuthPage/AuthPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { AppRoutes, getPathRegistration, getPathAuth, getPathMain } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getPathMain(),
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.REGISTRATION]: {
        path: getPathRegistration(),
        element: <RegistrationPage />,
        authOnly: false,
    },
    [AppRoutes.AUTH]: {
        path: getPathAuth(),
        element: <AuthPage />,
        authOnly: false,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: '*',
        element: <NotFoundPage />,
        authOnly: false,
    },
}