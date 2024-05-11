import { useContext } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    changeTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
                break;
        }

        // const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        saveAction?.(newTheme);
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme.toString());
    };

    return {
        theme: theme || Theme.LIGHT,
        changeTheme,
    };
}
