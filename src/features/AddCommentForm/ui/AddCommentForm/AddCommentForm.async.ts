import { FC, lazy } from 'react';

import { AddCommentFromProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFromProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./AddCommentForm')), 1000);
        }),
);
