import type { Meta, StoryObj } from '@storybook/react';

import { Article } from '@/entities/Article';
import ArticlesPage from './ArticlesPage';

const article: Article = {
    id: '1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlS9rsTMwXtbjkNQEaW25dBrii7izhaOh0w&usqp=CAU',
    createdAt: '',
    views: 123,
    user: { id: '1', username: 'admin' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asdfg23',
    userId: '1',
};

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_expand=user&_limit=9&_page=26&_sort=createdAt&_order=asc&q=`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                    { ...article, id: '4' },
                ],
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    args: {},
};
