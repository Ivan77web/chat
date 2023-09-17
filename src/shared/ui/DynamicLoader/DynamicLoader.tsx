import { ScreenSpinner } from "@vkontakte/vkui";
import { ReactNode, useEffect, useState } from "react";
import cl from './DynamicLoader.module.scss';
import { useNavigate } from "react-router-dom";

interface DynamicLoaderProps {
    isLoading: boolean;
    isSuccess: boolean;
    error?: string;
    toNavigate?: string;
}

export const DynamicLoader = (props: DynamicLoaderProps) => {
    const { isLoading, error, isSuccess, toNavigate } = props;
    const navigate = useNavigate();
    const [state, setState] = useState<ReactNode>(null);

    const clearState = () => setState(null);

    const clearStateAndNavigate = () => {
        if(toNavigate){
            setState(null);
            navigate(toNavigate);
        }
    };

    useEffect(() => {
        if (isLoading) {
            setState(<ScreenSpinner state="loading" />);
        }
    }, [isLoading])

    useEffect(() => {
        if (error) {
            setState(<ScreenSpinner state="error">Произошла ошибка</ScreenSpinner>);

            setTimeout(clearState, 2000);
        }
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            setState(<ScreenSpinner state="done">Успешно</ScreenSpinner>);

            setTimeout(clearStateAndNavigate, 2000);
        }
    }, [isSuccess])

    return (
        <div className={cl.container}>
            {state}
        </div>
    )
}