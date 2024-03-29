import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from '@/features/addCommentForm';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;

        const dispatch = useAppDispatch();
        const { t } = useTranslation();

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        return (
            <VStack
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <Text
                    size={TextSize.L}
                    title={t('Комментарии')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
