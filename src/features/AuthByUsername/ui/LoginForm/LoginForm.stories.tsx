import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
// import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},

    decorators: [
        storeDecorator({
            loginForm: {
                username: '123',
                password: 'asfsa',
            },
        }),
    ],
};

export const WithError: Story = {
    args: {},

    decorators: [
        storeDecorator({
            loginForm: {
                username: '123',
                password: 'asfsa',
                error: 'Error',
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},

    decorators: [
        storeDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
    ],
};
