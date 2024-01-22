import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Text',
    component: Text,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Hello, world!',
        text: 'Lorem ipsum dolor sit amet',
    },
};
export const Error: Story = {
    args: {
        title: 'Hello, world!',
        text: 'Lorem ipsum dolor sit amet',
        theme: TextTheme.ERROR,
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'Hello, world!',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet',
    },
};
export const PrimaryDark: Story = {
    args: {
        title: 'Hello, world!',
        text: 'Lorem ipsum dolor sit amet',
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'Hello, world!',
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet',
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const SizeL: Story = {
    args: {
        title: 'Hello, world!',
        text: 'Lorem ipsum dolor sit amet',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Hello, world!',
        text: 'Lorem ipsum dolor sit amet',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Hello, world!',
        text: 'Lorem ipsum dolor sit amet',
        size: TextSize.S,
    },
};
