import type { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { storeDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                {
                    name: 'light',
                    class: ['app', Theme.LIGHT],
                    color: '#dfe3e5',
                },
                { name: 'dark', class: ['app', Theme.DARK], color: '#021b52' },
                {
                    name: 'green',
                    class: ['app', Theme.GREEN],
                    color: '#33da0e',
                },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        // themeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        storeDecorator({}),
    ],
};

export default preview;
