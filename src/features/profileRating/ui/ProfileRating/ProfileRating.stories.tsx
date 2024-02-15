import type { Meta, StoryObj } from '@storybook/react';
import { ProfileRating } from '../../index';

const meta = {
    title: 'shared/profileRating',
    component: ProfileRating,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        profileId: '1',
    },
};
