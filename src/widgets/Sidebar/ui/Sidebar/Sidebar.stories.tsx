import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

// eslint-disable-next-line arrow-body-style
const Template: ComponentStory<typeof Sidebar> = (args) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Sidebar {...args} />;
};

export const Light = Template.bind({});
Light.args = { backgroundColor: 'color' };

export const Dark = Template.bind({});
Dark.args = { backgroundColor: 'color' };

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE,
// };
Dark.decorators = [ThemeDecorator(Themes.Dark)];
