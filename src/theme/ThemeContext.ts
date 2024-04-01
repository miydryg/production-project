import { createContext } from "react";

export enum Themes {
  Light = "light",
  Dark = "dark",
}

export interface ThemeContextProps {
  themes?: Themes;
  setThemes?: ((themes: Themes) => void);
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = "themes";
