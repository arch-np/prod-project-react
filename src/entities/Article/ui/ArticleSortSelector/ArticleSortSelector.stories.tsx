import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

// eslint-disable-next-line storybook/story-exports
const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Normal: Story = {
//     args: {},
// };
