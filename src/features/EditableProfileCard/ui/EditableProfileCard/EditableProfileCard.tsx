import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface EditableProfileCardProps {
  id: string;
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { id, className } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    firstname: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    lastname: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    age: Number(value || 0),
                }),
            );
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    username: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    avatar: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency,
                }),
            );
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country,
                }),
            );
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="8"
                max
                className={classNames('', {}, [className])}
            >
                <EditableProfileCardHeader />
                {Boolean(validateErrors?.length)
          && validateErrors?.map((err) => (
              <Text
                  key={err}
                  theme={TextTheme.ERROR}
                  text={validateErrorTranslates[err]}
              />
          ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
