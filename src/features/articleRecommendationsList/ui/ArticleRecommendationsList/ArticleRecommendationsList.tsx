import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationApi';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { data: articles, isLoading, error } = useArticleRecommendationsList(5);

    if (error || !articles) {
        return <Text text={t('Не удалось загрузить рекомендации')}/>;
    }

    if (isLoading) {
        return <Skeleton height={'300px'} width={'100%'}/>;
    }

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target={'_blank'}
            />
        </VStack>
    );
});
