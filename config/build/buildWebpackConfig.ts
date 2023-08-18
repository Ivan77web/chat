import webpack from 'webpack';
import { BuildProps } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';

export const buildWebpackConfig = (options: BuildProps): webpack.Configuration => {
    const {
        paths,
        mode,
        isDev
    } = options;

    return {
        entry: paths.entry,
        mode: mode,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(paths),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    }
}