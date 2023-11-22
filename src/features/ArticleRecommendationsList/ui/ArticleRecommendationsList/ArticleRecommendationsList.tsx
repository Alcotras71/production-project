import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticlesRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticlesRecommendationsList(3);

        if (isLoading || error) {
            return null;
        }

        return (
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                />
            </VStack>
        );
    },
);
