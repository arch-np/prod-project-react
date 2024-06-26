import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) =>
    state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) =>
    state.articleDetails?.isLoading;
export const getArticleDetailsDataIsError = (state: StateSchema) =>
    state.articleDetails?.error;
