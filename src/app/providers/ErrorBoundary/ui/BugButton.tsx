import { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

// For testing reasons
export const BugButton: FC = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwError}
        >
            {t('Пробросить ошибку')}
        </Button>
    );
};
