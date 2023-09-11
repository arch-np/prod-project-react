import React from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = () => {
    const {theme, changeTheme}=useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            <NavBar/>
            <AppRouter/>
            <button onClick={changeTheme}>TOGGLE THEME</button>
        </div>
    );
};

export default App;