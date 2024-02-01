import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description',
        size: TextSize.S,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description',
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem',
        text: 'Description',
        size: TextSize.L,
    },
};
