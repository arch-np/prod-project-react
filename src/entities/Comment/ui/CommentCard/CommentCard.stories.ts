import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from '../../model/types/comment';
import { CommentCard } from './CommentCard';
import { User } from 'entities/User';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const user:User = {
    id: '1',
    username: 'admin',
};

const comment:Comment
    = {
        id: '1',
        text: 'some comment',
        user,
    };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {
        comment,
    },
};
export const Loading: Story = {
    args: {
        isLoading: true,
        comment,
    },
};
export const NormalDark: Story = {
    args: {
        comment,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const LoadingDark: Story = {
    args: {
        isLoading: true,
        comment,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
