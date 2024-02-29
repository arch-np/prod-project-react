import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId:string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        profileId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateArticle = useCallback((starsCount:number, feedBack?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starsCount,
                feedBack,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starsCount:number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width={'100%'} height={140}/>;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Отзыв о профиле')}
            hasFeedback
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
        />
    );
});

export default ProfileRating;
