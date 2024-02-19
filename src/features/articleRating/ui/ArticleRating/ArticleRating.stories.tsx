import { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    { rate: 4 },
                ],
            },
        ],
    },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
    decorators: [storeDecorator({
        user: { authData: { id: '1' } },
    })],
};

