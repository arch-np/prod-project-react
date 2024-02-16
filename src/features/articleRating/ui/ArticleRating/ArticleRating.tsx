import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    id:string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId: id,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount:number, feedBack?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId: id,
                rate: starsCount,
                feedBack,
            });
        } catch (e) {
            console.log(e);
        }
    }, [id, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount:number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье')}
            hasFeedback
        />
    );
});

export default ArticleRating;
