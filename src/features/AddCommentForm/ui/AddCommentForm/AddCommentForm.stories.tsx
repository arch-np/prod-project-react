import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Suspense } from 'react';

import { AddCommentForm } from '../../index';

import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Loader } from '@/shared/ui/Loader';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Normal: Story = {
    render: () => (
        <Suspense fallback={<Loader />}>
            <AddCommentForm onSendComment={action('onSendComment')} />
        </Suspense>
    ),
    decorators: [storeDecorator({})],
};
