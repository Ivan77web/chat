import { getUserInited } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { getPathAuth, getPathMain } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element,
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserInited);
    const localStorageId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    const location = useLocation();

    if (!localStorageId && location.pathname !== '/auth') {
        return <Navigate to={getPathAuth()} state={{ from: location }} replace />;
    }

    if (localStorageId && location.pathname === '/auth') {
        return <Navigate to={getPathMain()} state={{ from: location }} replace />;
    }

    return children;
}
