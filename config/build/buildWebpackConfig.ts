import webpack from 'webpack';
import { BuildProps } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildProps): webpack.Configuration => {
    const {
        paths,
        mode,
        isDev,
        port
    } = options;

    return {
        entry: paths.entry,
        mode: mode,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolve(paths),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}