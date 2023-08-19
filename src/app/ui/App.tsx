import { Route, Routes } from 'react-router-dom';
import cl from './App.module.scss';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

export const App = () => {
    return (
        <div className={classNames(cl.app, {}, [])}>
            <Link to={'/main'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<div>Подождите</div>}>
                <Routes>
                    <Route
                        path={'/main'}
                        element={<MainPage />}
                    />
                    <Route
                        path={'/about'}
                        element={<AboutPage />}
                    />
                    <Route
                        path={'/'}
                        element={<MainPage />}
                    />
                    <Route
                        path={'*'}
                        element={<MainPage />}
                    />
                </Routes>
            </Suspense>
        </div>
    )
}