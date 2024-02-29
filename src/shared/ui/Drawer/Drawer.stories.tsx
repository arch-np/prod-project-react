import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: (<div></div>),
    },
};
