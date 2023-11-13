import { BuildOptions } from '../types/config';

export function buildBabelLoader(options:BuildOptions) {
    const { isDev } = options;
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                // если условие выше не соблюдается, то нам нужно удалить его из массива через filter(Boolean)
                ].filter(Boolean),
            },
        },
    };
}
