import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [storeDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                delay: 3000,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Поставь лайк и оставь комментарий',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description: 'Поставь лайк и оставь комментарий',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Поставь лайк и оставь комментарий',
                    },
                ],
            },
        ],
    },
};
