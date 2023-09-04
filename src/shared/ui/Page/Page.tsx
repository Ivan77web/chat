import { ReactNode } from "react"
import cl from './Page.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageProps {
    children: ReactNode;
    className?: string;
}

export const Page = (props: PageProps) => {
    const {
        children,
        className
    } = props;

    return (
        <main
            className={classNames(cl.page, {}, [className])}
        >
            {children}
        </main>
    )
}