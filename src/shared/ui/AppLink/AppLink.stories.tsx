import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'widget/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

// eslint-disable-next-line arrow-body-style
const Template: ComponentStory<typeof AppLink> = (args) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <AppLink {...args} />;
};

export const Primary = Template.bind({});
Primary.args = { children: 'Text', theme: AppLinkTheme.PRIMARY };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { children: 'Text', theme: AppLinkTheme.PRIMARY };
PrimaryDark.decorators = [ThemeDecorator(Themes.Dark)];

export const Secondary = Template.bind({});
Secondary.args = { children: 'Text', theme: AppLinkTheme.SECONDARY };

export const SecondaryDark = Template.bind({});
SecondaryDark.args = { children: 'Text', theme: AppLinkTheme.SECONDARY };
SecondaryDark.decorators = [ThemeDecorator(Themes.Dark)];

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE,
// };
// Dark.decorators = [ThemeDecorator(Themes.Dark)];
