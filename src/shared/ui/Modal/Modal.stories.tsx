import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa dolorem est, facere id in, minima obcaecati perferendis placeat recusandae reiciendis repellendus tempora veniam veritatis! Aliquam dolorem esse quas.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis culpa dolorem est, facere id in, minima obcaecati perferendis placeat recusandae reiciendis repellendus tempora veniam veritatis! Aliquam dolorem esse quas.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
