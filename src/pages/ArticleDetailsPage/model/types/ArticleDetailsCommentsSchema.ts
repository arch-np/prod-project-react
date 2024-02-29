import { EntityState } from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';

// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
