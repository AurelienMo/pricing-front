import {RouteI} from "../RouteI";
import {Route} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Appointments from "../../pages/Appointments";

export const DASHBOARD_PATH = '/dashboard';
export const APPOINTMENTS = "/rendez-vous"

const protectedRoutes: RouteI[] = [
    {
        key: 'dashboard',
        path: DASHBOARD_PATH,
        element: <Dashboard />,
        name: 'dashboard'
    },
    {
        key: 'appointments',
        path: APPOINTMENTS,
        element: <Appointments />,
        name: 'appointments'
    }
]

export const protectedRouter = protectedRoutes.map((route: RouteI) => {
    // @ts-ignore
    return <Route key={route.key} element={route.element} path={route.path} />
})
