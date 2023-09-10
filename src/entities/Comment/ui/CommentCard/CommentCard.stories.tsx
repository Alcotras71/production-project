import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'shared/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {},
};
