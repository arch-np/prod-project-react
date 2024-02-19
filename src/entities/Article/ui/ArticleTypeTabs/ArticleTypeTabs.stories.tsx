import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '../../model/consts/articleConsts';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: ArticleType.ALL,
    },
};
