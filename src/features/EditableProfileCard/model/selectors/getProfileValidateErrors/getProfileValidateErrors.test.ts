import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../constants/constants';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const errors = [ValidateProfileError.INCORRECT_COUNTRY, ValidateProfileError.INCORRECT_AGE];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
