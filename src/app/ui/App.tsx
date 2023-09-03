import cl from './App.module.scss';
import { useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { AppRouter } from '../providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initAuthData } from '@/entities/User/model/services/initAuthData';
import { AppRoot } from '@vkontakte/vkui';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <AppRoot>
            <div className={
                classNames(
                    cl.app,
                    {},
                    []
                )}
            >
                <Navbar />
                <AppRouter />
            </div>
        </AppRoot>
    )
}