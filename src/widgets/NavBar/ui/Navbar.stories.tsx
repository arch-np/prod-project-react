import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from './NavBar';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widgets/NavBar',
    component: NavBar,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {},
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Theme.DARK), storeDecorator({})],
};

export const AuthNavbar: Story = {
    args: {},
    decorators: [storeDecorator({
        user: { authData: {} },
    })],
};
