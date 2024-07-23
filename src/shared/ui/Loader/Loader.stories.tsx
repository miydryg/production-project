import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

// eslint-disable-next-line arrow-body-style
const Template: ComponentStory<typeof Loader> = (args) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Loader {...args} />;
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
