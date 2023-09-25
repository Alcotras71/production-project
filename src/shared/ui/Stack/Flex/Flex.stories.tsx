import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Flex>;

const children = (
    <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
    </>
);

export const Row: Story = {
    args: {
        children,
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children,
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children,
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children,
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children,
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children,
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children,
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children,
    },
};
