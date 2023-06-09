import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((res) => {
    // Don't do it in real projects. Only for testing reasons
    setTimeout(() => res(import('./LoginForm')), 1500);
}));
