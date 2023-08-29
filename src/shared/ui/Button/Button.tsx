import {
    ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export type ButtonVariants = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
    color?: ButtonColor;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        variant = 'outline',
        color = 'normal',
        square,
        size = 'm',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.square]: square,
        [cl.disabled]: disabled,
        [cl.fullWidth]: fullWidth,
        [cl.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(cl.Button, mods, [className, cl[variant], cl[size], cl[color]])}
            disabled={disabled}
            {...otherProps}
            ref={ref}
        >
            <div className={cl.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cl.addonRight}>{addonRight}</div>
        </button>
    );
});
