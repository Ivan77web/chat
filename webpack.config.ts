import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildMode, BuildPaths, BuildEnv } from "config/build/types/config";
import path from 'path';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode: BuildMode = env?.mode || 'development';
    const isDev = mode === 'development';
    const port = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const config = buildWebpackConfig({
        paths,
        mode,
        isDev,
        port,
        apiUrl,
    });

    return config
}