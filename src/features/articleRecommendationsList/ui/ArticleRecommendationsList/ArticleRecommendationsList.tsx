import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/articleRecommendationApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsList(5);

        if (error || !articles) {
            return <Text text={t('Не удалось загрузить рекомендации')} />;
        }

        if (isLoading) {
            return <Skeleton height={'300px'} width={'100%'} />;
        }

        return (
            <VStack
                gap={'8'}
                data-testid={'ArticleRecommendationsList'}
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);
