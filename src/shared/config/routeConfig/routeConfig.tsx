import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRoutesProps = RouteProps &{
    authOnly?:boolean
}
export enum AppRoutes {
    MAIN='main',
    ABOUT='about',
    PROFILE='profile',
    NOT_FOUND='not_found',
}

export const RoutesPath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    // Последний маршрут
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig:Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutesPath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage />,
    },

};
