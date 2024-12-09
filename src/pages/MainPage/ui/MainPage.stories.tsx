import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';


export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

// eslint-disable-next-line arrow-body-style,
const Template: ComponentStory<typeof MainPage> = (args: object) => {
    return <MainPage {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
    backgroundColor: 'white',
};

export const Dark = Template.bind({});
Dark.args = {
    backgroundColor: 'white',
};
Dark.decorators = [ThemeDecorator(Themes.Dark)];

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE,
// };
// Dark.decorators = [ThemeDecorator(Themes.Dark)];
