import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
export const RouterDecorator = (story: () => Story) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
};
