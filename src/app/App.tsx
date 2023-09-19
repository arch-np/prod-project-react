import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();
    // UseEffect(() => {
    //     if (Math.random() < 0.5) {
    //         throw new Error('Error');
    //     }
    // }, []);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar/>
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
