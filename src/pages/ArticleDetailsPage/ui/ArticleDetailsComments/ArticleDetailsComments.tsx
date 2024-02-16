import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsComments.module.scss';
import { useTranslation } from 'react-i18next';
import React, { memo, Suspense, useCallback } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsNormalizeSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack
            gap={'16'}
            max
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Комментарии')}
            />
            <Suspense fallback={<div><Skeleton width={'100%'} height={'300px'}/></div>}>
                <AddCommentForm onSendComment={onSendComment}/>
            </Suspense>

            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
