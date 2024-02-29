import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Modal',
    component: Modal,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur, dolorem, eos harum illo incidunt laborum minima, nesciunt non optio perferendis provident quasi velit? Ab distinctio fugit in provident sint.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur, dolorem, eos harum illo incidunt laborum minima, nesciunt non optio perferendis provident quasi velit? Ab distinctio fugit in provident sint.',
    },
    decorators: [themeDecorator(Theme.DARK)],
};
