import React, {Suspense, useContext, useState} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, changeTheme}=useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={changeTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy />}/>,
                    <Route path="/" element={<MainPageLazy />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;