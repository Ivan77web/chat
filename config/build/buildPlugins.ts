import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import webpack from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildProps } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (options: BuildProps): WebpackPluginInstance[] => {
    const {
        paths,
        isDev,
        apiUrl
    } = options;

    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ]
}