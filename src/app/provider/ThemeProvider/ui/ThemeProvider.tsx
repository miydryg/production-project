import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Themes,
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.Light;

const ThemeProvider: FC = ({ children }) => {
    const [themes, setThemes] = useState<Themes>(defaultTheme);

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
