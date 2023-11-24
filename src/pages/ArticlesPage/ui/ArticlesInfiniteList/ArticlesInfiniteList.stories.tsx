import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

const meta: Meta<typeof ArticlesInfiniteList> = {
    title: 'pages/ArticlesPage/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ArticlesInfiniteList>;

export const Normal: Story = {
    args: {},
};
