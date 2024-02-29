import { lazy, Suspense } from 'react';

import { ProfileRatingProps } from './ProfileRating';

import { Skeleton } from '@/shared/ui/Skeleton';

const ProfileRatingAsync = lazy(
    () => import('./ProfileRating'));

export const ProfileRatingLazy = (props:ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width={'100%'} height={120}/>}>
        <ProfileRatingAsync {...props}/>
    </Suspense>
);
