import { DeepPartial } from '@reduxjs/toolkit';

import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        const newUsername = 'anyUser';
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername(newUsername)),
        ).toEqual({ username: newUsername });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        const newPassword = '123456';
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword(newPassword)),
        ).toEqual({ password: newPassword });
    });
});
