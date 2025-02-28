import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Themes } from 'app/provider/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
// import { Dark } from './../../../widgets/Navbar/ui/Navbar.stories';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio molestiae accusamus obcaecati corrupti dolorem esttempore nulla explicabo temporibus fuga. Voluptatibus,iusto molestias aliquam odio exercitationem perferendisblanditiis minima nesciunt?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio molestiae accusamus obcaecati corrupti dolorem esttempore nulla explicabo temporibus fuga. Voluptatibus,iusto molestias aliquam odio exercitationem perferendisblanditiis minima nesciunt?',
};
Dark.decorators = [ThemeDecorator(Themes.Dark)];
