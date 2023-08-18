import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildPaths } from "./types/config";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
    ]
}