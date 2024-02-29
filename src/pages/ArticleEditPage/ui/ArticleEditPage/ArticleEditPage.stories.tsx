import type { Meta, StoryObj } from '@storybook/react';

import { ArticleEditPage } from '../../index';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
    decorators: [storeDecorator({})],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
