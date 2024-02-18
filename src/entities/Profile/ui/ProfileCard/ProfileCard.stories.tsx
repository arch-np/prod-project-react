import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatarImg from '@/shared/assets/tests/storybook.jpg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        data: {
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

};
export const withError:Story = {
    args: {
        error: 'Error',
    },
};

export const Loading:Story = {
    args: {
        isLoading: true,
    },
};
