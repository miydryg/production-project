import { createContext } from 'react';

export enum Themes {
  Light = 'app_light_theme',
  Dark = 'app_dark_theme',
}

export interface ThemeContextProps {
  themes?: Themes;
  setThemes?: ((themes: Themes) => void);
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'themes';
