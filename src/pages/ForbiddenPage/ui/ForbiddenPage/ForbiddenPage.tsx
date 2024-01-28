import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation();

    return <Page>{t('У вас нет доступа к этой странице')}</Page>;
});

export default ForbiddenPage;
