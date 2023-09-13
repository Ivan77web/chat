import React, { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './AppLink.module.scss';

export type AppLinkVariants = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariants;
    children?: ReactNode;
    activeClassName?: string,
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) => classNames(cl.AppLink, { [activeClassName]: isActive }, [
                className,
                cl[variant],
            ])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
