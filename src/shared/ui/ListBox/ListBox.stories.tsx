import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
import cls from './ListBox.module.scss';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
