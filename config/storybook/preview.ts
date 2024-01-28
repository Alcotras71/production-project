import type { Preview } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';
import { PaddingDecorator } from '../../src/shared/config/storybook/PaddingDecorator/PaddingDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'dark',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#edf8ff' },
                { name: 'dark', class: Theme.DARK, color: '#000303' },
                { name: 'orange', class: Theme.ORANGE, color: '#d79011' },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        StoreDecorator({}),
        PaddingDecorator,
    ],
};

export default preview;
