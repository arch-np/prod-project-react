import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line pp-checker/path-checker
import { ArticleEditPage } from 'pages/ArticleEditPage';

const meta = {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
