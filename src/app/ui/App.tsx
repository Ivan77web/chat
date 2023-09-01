import { Route, Routes } from 'react-router-dom';
import cl from './App.module.scss';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { Link } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { AppRouter } from '../providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initAuthData } from '@/entities/User/model/services/initAuthData';
import { Alert, AppRoot, Avatar, Button, Cell, Group, Header, Panel, PanelHeader, Placeholder, Separator, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import { Icon56UsersOutline, Icon56MentionOutline, Icon56MessageReadOutline } from '@vkontakte/icons';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <AppRoot>
            <div className={classNames(cl.app, {}, [])}>
                <Navbar />
                <AppRouter />
            </div>
        </AppRoot>
    )
}