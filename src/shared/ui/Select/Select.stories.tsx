import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

import { themeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Select',
    component: Select,
    args: {

    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Выберите значение',
        options: [
            { value: '123', content: 'Пункт 1' },
            { value: '1233', content: 'Пункт 2' },
            { value: '1234', content: 'Пункт 3' },
            { value: '1235', content: 'Пункт 4' },
        ],
    },
    decorators: [themeDecorator(Theme.DARK)],
};
