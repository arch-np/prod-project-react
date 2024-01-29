import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
    decorators: [storeDecorator({})],
};

