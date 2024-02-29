import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'content 1',
            },
            {
                content: 'content 2',
            },
            {
                content: 'content 3',
            },
        ],
    },
};
