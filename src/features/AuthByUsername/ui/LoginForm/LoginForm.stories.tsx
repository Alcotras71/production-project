import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'feature/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: '1234' },
    })],
};

export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: '1234', error: 'ERROR' },
    })],
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: { isLoading: true },
    })],
};
