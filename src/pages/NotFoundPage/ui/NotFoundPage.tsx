import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import { Page } from '@/shared/ui/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            {t('Страница не найдена')}
        </Page>
    );
};
