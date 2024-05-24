import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Themes } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
    const { themes, toggleThemes } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleThemes}
            className={classNames('', {}, [className])}
        >
            {themes === Themes.Dark ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
