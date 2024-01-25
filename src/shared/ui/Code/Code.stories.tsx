import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Code>;

const code = 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
    + '\n'
    + 'import { Code } from \'./Code\';\n'
    + '\n'
    + 'const meta: Meta<typeof Code> = {\n'
    + '    title: \'shared/Code\',\n'
    + '    component: Code,\n'
    + '    tags: [\'autodocs\'],\n'
    + '};\n'
    + '\n'
    + 'export default meta;\n'
    + '\n'
    + 'type Story = StoryObj<typeof Code>;\n'
    + '\n'
    + 'export const Normal: Story = {\n'
    + '    args: {\n'
    + '        children: \'\',\n'
    + '    },\n'
    + '};\n';

export const Normal: Story = {
    args: {
        text: code,
    },
};

export const Dark: Story = {
    args: {
        text: code,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
