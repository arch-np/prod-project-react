import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

const meta = {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const item:Notification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
};

export const Normal: Story = {
    args: {
        item,
    },
};
