import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ArticlesPageFilters>;

export const Normal: Story = {
    args: {},
};
