import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Themes,
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.Light;

interface ThemeProviderProps {
    initialTheme?: Themes;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [themes, setThemes] = useState<Themes>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            themes,
            setThemes,
        }),
        [themes],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
