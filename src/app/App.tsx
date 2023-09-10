import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const {theme, changeTheme}=useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={changeTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />}/>,
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;