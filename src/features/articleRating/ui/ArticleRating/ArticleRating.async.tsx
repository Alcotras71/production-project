import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import type { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
