import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsNormalizeSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
