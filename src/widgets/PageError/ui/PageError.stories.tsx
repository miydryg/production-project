import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

// eslint-disable-next-line arrow-body-style
const Template: ComponentStory<typeof PageError> = (args) => {
    return <PageError {...args} />;
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
