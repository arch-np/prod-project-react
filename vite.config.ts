import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';
    const apiUrl =
        isDev ?
            'http://localhost:8000'
        :   'https://prod-project-server.vercel.app/';

    return {
        plugins: [
            svgr({
                svgrOptions: {
                    exportType: 'default',
                },
                include: '**/*.svg',
            }),
            react({
                babel: {
                    plugins: [
                        ...(isDev ?
                            []
                        :   [
                                [
                                    path.resolve(
                                        __dirname,
                                        'config/babel/babelRemovePropsPlugin.js',
                                    ),
                                    { props: ['data-testid'] },
                                ],
                            ]),
                    ],
                },
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['.tsx', '.ts', '.js'],
        },
        define: {
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify('frontend'),
        },
        server: {
            port: 3000,
            open: false,
        },
        build: {
            outDir: 'build',
        },
        css: {
            modules: {
                generateScopedName:
                    isDev ?
                        '[path][name]__[local]--[hash:base64:5]'
                    :   '[hash:base64:8]',
            },
        },
    };
});
