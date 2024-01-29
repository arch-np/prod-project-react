import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Article } from 'entities/Article';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsadsg',
};

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3&_expand=user`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [storeDecorator({})],
};

