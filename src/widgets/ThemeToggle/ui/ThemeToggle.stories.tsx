import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeToggle } from './ThemeToggle';

export default {
    title: 'widget/ThemeToggle',
    component: ThemeToggle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeToggle>;

// eslint-disable-next-line arrow-body-style
const Template: ComponentStory<typeof ThemeToggle> = (args) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ThemeToggle {...args} />;
};

export const Normal = Template.bind({});
Normal.args = { };

export const Dark = Template.bind({});
Dark.args = { };
Dark.decorators = [ThemeDecorator(Themes.Dark)];

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE,
// };
// Dark.decorators = [ThemeDecorator(Themes.Dark)];
