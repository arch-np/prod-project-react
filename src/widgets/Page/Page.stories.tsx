import { Meta, StoryObj } from '@storybook/react';
import { Page } from '@/widgets/Page/Page';

const meta = {
    title: 'widgets/Page',
    component: Page,
    tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <div></div>,
    },
};

