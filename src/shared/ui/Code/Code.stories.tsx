import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
// import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Code',
    component: Code,
    // Parameters: {
    //     layout: 'centered',
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    args: {
        text:
            'const meta = {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    // Parameters: {\n' +
            "    //     layout: 'centered',\n" +
            '    // },\n' +
            '    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs\n' +
            "    tags: ['autodocs'],\n" +
            '    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes\n' +
            '} satisfies Meta<typeof Code>;\n' +
            '\n' +
            'export default meta;\n' +
            'type Story = StoryObj<typeof meta>;',
    },
};
