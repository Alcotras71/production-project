import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
    args: {},
};
