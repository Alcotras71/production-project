import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from '../../model/types/comment';
import { CommentCard } from './CommentCard';

const comment: Comment = {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Andrey' },
};

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment,
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
