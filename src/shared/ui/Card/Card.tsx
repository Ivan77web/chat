import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Card.module.scss';

export type CardPadding = '0' | '8' | '16' | '24';
export type CardVariant = 'light' | 'dark'

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    max?: boolean;
    padding?: CardPadding;
    variant?: CardVariant;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        max,
        padding = '8',
        variant = 'light',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={
                classNames(
                    cl.card,
                    {
                        [cl.max]: max,
                    },
                    [
                        className,
                        cl[paddingClass],
                        cl[variant],
                    ],
                )
            }
            {...otherProps}
        >
            {children}
        </div>
    );
});
