import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '../../assets/tests/storybook.jpg';

import { Avatar } from './Avatar';

import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
