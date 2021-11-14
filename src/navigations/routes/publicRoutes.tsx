import {RouteI} from "../RouteI";
import LoginPage from "../../pages/LoginPage";
import {Route} from "react-router-dom";

export const LOGIN_PATH = '/'

const publicRoutes: RouteI[] = [
    {
        key: 'login',
        path: LOGIN_PATH,
        element: <LoginPage />,
        name: 'login'
    },
]

export const publicRouter = publicRoutes.map((route: RouteI) => {
    // @ts-ignore
    return <Route key={route.key} element={route.element} path={route.path} />
})
