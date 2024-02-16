import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatarImg from '@/shared/assets/tests/storybook.jpg';
import { ProfilePage } from '../index';
// import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {},
    decorators: [storeDecorator({
        profile: {
            form: {
                username: 'Admin',
                age: 30,
                country: Country.Belarus,
                lastname: 'Fut',
                first: 'Smit',
                city: 'fdg',
                currency: Currency.EUR,
                avatar: avatarImg,
            },
        },
    })],
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Theme.DARK), storeDecorator({
        profile: {
            form: {
                username: 'Admin',
                age: 30,
                country: Country.Belarus,
                lastname: 'Fut',
                first: 'Smit',
                city: 'fdg',
                currency: Currency.EUR,
                avatar: avatarImg,
            },
        },
    })],
};
