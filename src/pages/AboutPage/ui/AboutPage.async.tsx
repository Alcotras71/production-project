import { FC, lazy } from 'react';

export const AboutPageAsync = lazy <FC>(() => new Promise((res) => {
    // Don't do it in real projects. Only for testing reasons
    setTimeout(() => res(import('./AboutPage')), 500);
}));
