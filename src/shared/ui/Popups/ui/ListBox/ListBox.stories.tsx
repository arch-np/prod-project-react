import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [(Story:StoryFn) => <div style={{ padding: '200px' }}><Story/></div>],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        items: [
            { content: 'sdfsdfsdfsdf', value: '123' },
            { content: 'sdfsdfsdgsdgsdfsdf', value: '1234' },
            { content: 'sdffasfassdfsdfsdfsdg', value: '12345' },
        ],
    },
};
export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '12345',
        items: [
            { content: 'sdfsdfsdfsdf', value: '123' },
            { content: 'sdfsdfsdgsdgsdfsdf', value: '1234' },
            { content: 'sdffasfassdfsdfsdfsdg', value: '12345' },
        ],
    },
};
export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '12345',
        items: [
            { content: 'sdfsdfsdfsdf', value: '123' },
            { content: 'sdfsdfsdgsdgsdfsdf', value: '1234' },
            { content: 'sdffasfassdfsdfsdfsdg', value: '12345' },
        ],
    },
};
export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '12345',
        items: [
            { content: 'sdfsdfsdfsdf', value: '123' },
            { content: 'sdfsdfsdgsdgsdfsdf', value: '1234' },
            { content: 'sdffasfassdfsdfsdfsdg', value: '12345' },
        ],
    },
};
export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '12345',
        items: [
            { content: 'sdfsdfsdfsdf', value: '123' },
            { content: 'sdfsdfsdgsdgsdfsdf', value: '1234' },
            { content: 'sdffasfassdfsdfsdfsdg', value: '12345' },
        ],
    },
};
