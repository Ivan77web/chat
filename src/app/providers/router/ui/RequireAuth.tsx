import { getUserInited } from '@/entities/User';
import { getPathAuth } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element,
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserInited);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={getPathAuth()} state={{ from: location }} replace />;
    }

    return children;
}
