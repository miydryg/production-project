import { Story } from '@storybook/react';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';

// eslint-disable-next-line arrow-body-style
export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
