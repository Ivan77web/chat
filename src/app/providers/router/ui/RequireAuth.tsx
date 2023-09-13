// import { getUserInited } from '@/entities/User';
// import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
// import { getPathAuth, getPathMain, getPathRegistration } from '@/shared/const/router';
// import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom';

// interface RequireAuthProps {
//     children: JSX.Element,
// }

// export function RequireAuth({ children }: RequireAuthProps) {
//     const auth = useSelector(getUserInited);
//     const localStorageId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
//     const location = useLocation();

//     if (!localStorageId && location.pathname === '/registration') {
//         console.log(1);


//         // return <Navigate to={getPathRegistration()} state={{ from: location }} replace />;
//     }

//     if (!localStorageId && location.pathname !== '/auth') {
//         console.log(2);

//         return <Navigate to={getPathAuth()} state={{ from: location }} replace />;
//     }

//     if (localStorageId && (location.pathname === '/auth' || location.pathname === '/registration')) {
//         console.log(3);

//         return <Navigate to={getPathMain()} state={{ from: location }} replace />;
//     }

//     return children;
// }

import { getUserAuthData } from '@/entities/User/model/selectors/userSelectors';
import { getPathAuth } from '@/shared/const/router';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element,
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={getPathAuth()} state={{ from: location }} replace />;
    }

    return children;
}