import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
    const src = path.resolve(__dirname, '..', '..', 'src');

    config!.resolve!.modules!.push(src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': src,
    };

    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules.push({
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes('.module.')),
                        localIdentName:
                            '[path][name]__[local]--[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    });

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
