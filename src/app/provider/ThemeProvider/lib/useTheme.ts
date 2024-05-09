import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from "./ThemeContext";

interface useThemeResult {
  toggleThemes: () => void;
  themes: Themes;
}

export function useTheme(): useThemeResult {
  const { themes, setThemes } = useContext(ThemeContext);

  const toggleThemes = () => {
    const newThemes = themes === Themes.Dark ? Themes.Light : Themes.Dark;

    setThemes(newThemes);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThemes);
  };
  return {
    themes,
    toggleThemes,
  };
}
