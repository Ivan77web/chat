import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildProps } from './types/config';

export function buildDevServer(options: BuildProps): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
