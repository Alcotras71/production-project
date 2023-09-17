import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect, Currency } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        error,
        isLoading,
        data,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
