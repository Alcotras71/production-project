import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Alekseev',
            firstname: 'Andrey',
            city: 'Athens',
            currency: Currency.EUR,
            avatar: AvatarImg,
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
