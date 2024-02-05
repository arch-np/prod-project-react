import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from '../../../../entities/User';
import { RoutesPath } from '@/shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps{
    children: JSX.Element
    roles?:UserRole[];
}
export function RequireAuth(props:RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(reqRole => userRoles?.includes(reqRole));
    }, [roles, userRoles]);

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutesPath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutesPath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
