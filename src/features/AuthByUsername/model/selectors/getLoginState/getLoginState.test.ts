import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'user123',
                password: 'pass123',
                isLoading: true,
                error: 'err',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'user123',
            password: 'pass123',
            isLoading: true,
            error: 'err',
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
