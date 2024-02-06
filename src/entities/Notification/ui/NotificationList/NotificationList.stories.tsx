import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    title: 'shared/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/notifications`, () => {
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
    args: {},
};
