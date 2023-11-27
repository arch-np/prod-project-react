import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
// import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [themeDecorator(Theme.DARK)],
};
export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};
export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};
export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
