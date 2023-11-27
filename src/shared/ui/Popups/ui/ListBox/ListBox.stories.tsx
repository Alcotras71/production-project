import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
};

export default meta;

type Story = StoryObj<typeof ListBox>;

const items = [
    {
        content: '123',
        value: '123',
    },
    {
        content: '1234',
        value: '1234',
    },
];

export const Primary: Story = {
    args: {
        items,
        value: '1234',
    },
};

export const TopLeft: Story = {
    args: {
        items,
        direction: 'top left',
        value: '1234',
    },
};

export const TopRight: Story = {
    args: {
        items,
        direction: 'top right',
        value: '1234',
    },
};

export const BottomLeft: Story = {
    args: {
        items,
        direction: 'bottom left',
        value: '1234',
    },
};

export const BottomRight: Story = {
    args: {
        items,
        direction: 'bottom right',
        value: '1234',
    },
};
