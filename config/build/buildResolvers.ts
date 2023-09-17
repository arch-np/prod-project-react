import {ResolveOptions} from 'webpack';
import {BuildOptions} from './types/config';

export function buildResolvers(options:BuildOptions):ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        // Абсолютный путь к файлу в приоритете
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
