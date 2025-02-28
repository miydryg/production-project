import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';

// eslint-disable-next-line arrow-body-style
export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
