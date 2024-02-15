// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import { Sidebar } from '@/widgets/Sidebar';
import { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {},
    decorators: [
        storeDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Auth: Story = {
    args: {},
    decorators: [
        storeDecorator({
            user: { authData: {} },
        }),
    ],
};

export const NoAuth: Story = {
    args: {},
    decorators: [
        storeDecorator({
            user: {},
        }),
    ],
};
