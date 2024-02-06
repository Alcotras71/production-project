import type { Meta, StoryObj } from '@storybook/react';

import { http, HttpResponse } from 'msw';
import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/article-ratings`, () => {
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
    args: {},
};
