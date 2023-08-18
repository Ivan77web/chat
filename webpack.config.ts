import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildMode, BuildPaths } from "config/build/types/config";
import path from 'path';

const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}

const mode: BuildMode = 'production'
// @ts-ignore
const isDev = mode === 'development';

export default buildWebpackConfig({
    paths,
    mode,
    isDev
});