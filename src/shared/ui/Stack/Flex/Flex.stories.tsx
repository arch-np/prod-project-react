import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};

export const RawGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};

export const RawGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};

export const RawGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        align: 'end',
        direction: 'column',
        children: (
            <>
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
                <div>row5</div>
            </>
        ),
    },
};
