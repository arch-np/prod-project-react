import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ProfileRatingProps } from '@/features/profileRating/ui/ProfileRating/ProfileRating';

const ProfileRatingAsync = lazy(
    () => import('./ProfileRating'));

export const ProfileRatingLazy = (props:ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width={'100%'} height={120}/>}>
        <ProfileRatingAsync {...props}/>
    </Suspense>
);
