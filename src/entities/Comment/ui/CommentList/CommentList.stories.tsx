import type { Meta, StoryObj } from '@storybook/react';
import { Comment, CommentList } from '/entities/Comment';
import { User } from 'entities/User';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const user:User = {
    id: '1',
    username: 'admin',
};

const comment:Comment[]
    = [
        {
            id: '1',
            text: 'some comment',
            user,
        },
        {
            id: '2',
            text: 'some comment2',
            user,
        },
    ];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {
        comments: comment,
    },
};
export const Loading: Story = {
    args: {
        isLoading: true,
        comments: [],
    },
};
export const NormalDark: Story = {
    args: {
        comments: comment,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const LoadingDark: Story = {
    args: {
        isLoading: true,
        comments: [],
    },
    decorators: [themeDecorator(Theme.DARK)],
};
