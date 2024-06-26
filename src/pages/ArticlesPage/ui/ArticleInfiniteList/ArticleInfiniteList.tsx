import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';

import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return (
            <Text
                text={t('Произошла непредвиденная ошибка при загрузке статей')}
            />
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
