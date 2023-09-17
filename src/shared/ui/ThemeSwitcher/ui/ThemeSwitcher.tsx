import {classNames} from 'shared/lib/classNames/classNames';
import React from 'react';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, changeTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={changeTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};
