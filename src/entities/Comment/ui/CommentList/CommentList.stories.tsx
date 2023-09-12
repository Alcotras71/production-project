import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from '../../model/types/comment';
import { CommentList } from './CommentList';

const comments: Comment[] = [
    {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Andrey' },
    },
    {
        id: '2',
        text: 'hello world 2',
        user: { id: '1', username: 'Vova' },
    },
];

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments,
    },
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
