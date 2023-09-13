import { Route, RouteProps, Routes } from "react-router-dom"
import { routeConfig } from "../config/routeConfig"
import { Suspense, memo, useCallback, useEffect } from "react"
import { AppRoutesProps } from "@/shared/types/router"
import { RequireAuth } from "./RequireAuth"

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<div>LOADING</div>}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter);