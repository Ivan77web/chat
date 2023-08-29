import { AboutPage } from "@/pages/AboutPage";
import AuthPage from "@/pages/AuthPage/ui/AuthPage/AuthPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, getPathAbout, getPathAuth, getPathMain, getPathNotFoundPage } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";
import { RouteProps } from "react-router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getPathMain(),
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.ABOUT]: {
        path: getPathAbout(),
        element: <AboutPage />,
        authOnly: true,
    },
    [AppRoutes.AUTH]: {
        path: getPathAuth(),
        element: <AuthPage />
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: getPathNotFoundPage(),
        element: <NotFoundPage />
    },
}