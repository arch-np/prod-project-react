import type { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { storeDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
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
    },
    decorators: [
        StyleDecorator,
        themeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        storeDecorator({}),
    ],
};

export default preview;
