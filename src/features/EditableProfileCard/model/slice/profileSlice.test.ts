import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/EditableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Alekseev',
    firstname: 'Andrey',
    city: 'Athens',
    currency: Currency.EUR,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                ...data, firstname: 'Any', lastname: 'Any', age: 5,
            },
            data,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: data,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'Super',
                    firstname: 'Test',
                    lastname: 'Gun',
                }),
            ),
        ).toEqual({
            data,
            form: {
                ...data,
                username: 'Super',
                firstname: 'Test',
                lastname: 'Gun',
            },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        } as DeepPartial<ProfileSchema>);
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        } as DeepPartial<ProfileSchema>);
    });
});
