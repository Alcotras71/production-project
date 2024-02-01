import { StoryFn } from '@storybook/react';

export const PaddingDecorator = (Story: StoryFn) => (
    <div className="app" style={{ padding: 50 }}>
        <Story />
    </div>
);
