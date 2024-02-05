import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';

// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
