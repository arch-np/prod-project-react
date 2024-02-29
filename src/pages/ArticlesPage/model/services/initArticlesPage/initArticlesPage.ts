import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            searchParams.forEach((value, key) => {
                switch (key) {
                case 'order':
                    dispatch(articlesPageActions.setOrder(value as SortOrder));
                    break;

                case 'sort':
                    dispatch(articlesPageActions.setSort(value as ArticleSortField));
                    break;

                case 'search':
                    dispatch(articlesPageActions.setSearch(value));
                    break;

                case 'type':
                    dispatch(articlesPageActions.setType(value as ArticleType));
                    break;

                default:
                    return null;
                }
            });

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);

