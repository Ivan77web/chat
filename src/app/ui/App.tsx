import { Route, Routes } from 'react-router-dom';
import cl from './App.module.scss';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/navbar/ui/Navbar';
import { AppRouter } from '../providers/router';

export const App = () => {
    return (
        <div className={classNames(cl.app, {}, [])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}