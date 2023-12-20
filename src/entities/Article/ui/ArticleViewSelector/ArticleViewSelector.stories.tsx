import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from 'entities/Article';

const meta = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        view: ArticleView.TILE,
    },
};
