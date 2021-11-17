import {RouteI} from "../RouteI";
import {Route} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

export const DASHBOARD_PATH = '/dashboard';

const protectedRoutes: RouteI[] = [
    {
        key: 'dashboard',
        path: DASHBOARD_PATH,
        element: <Dashboard />,
        name: 'dashboard'
    },
]

export const protectedRouter = protectedRoutes.map((route: RouteI) => {
    // @ts-ignore
    return <Route key={route.key} element={route.element} path={route.path} />
})