import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
// import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Theme.DARK)],
};
