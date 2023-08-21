import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, getPathAbout, getPathMain, getPathNotFoundPage } from "@/shared/const/router";
import { RouteProps } from "react-router";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getPathMain(),
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: getPathAbout(),
        element: <AboutPage />
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: getPathNotFoundPage(),
        element: <NotFoundPage />
    },
}