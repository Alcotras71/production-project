import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getIsUserAdmin,
    getIsUserManager,
    getUserAuthData,
    userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const isAdmin = useSelector(getIsUserAdmin);
    const isManager = useSelector(getIsUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={className}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Админка'),
                            href: RoutePath.admin_panel,
                        },
                    ]
                    : []),
                {
                    content: t('Профиль'),
                    href: `${RoutePath.profile_details}${authData.id}`,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={35} src={authData.avatar} />}
            direction="bottom left"
        />
    );
});
