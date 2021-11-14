import {RouteI} from "../RouteI";
import LoginPage from "../../pages/LoginPage";
import NotFound from "../../pages/NotFound";
import {Route} from "react-router-dom";

export const LOGIN_PATH = '/'

const publicRoutes: RouteI[] = [
    {
        key: 'login',
        path: LOGIN_PATH,
        element: <LoginPage />,
        name: 'login'
    },
    {
        key: 'not-found',
        path: '*',
        element: <NotFound />
    }
]

export const publicRouter = publicRoutes.map((route: RouteI) => {
    // @ts-ignore
    return <Route key={route.key} element={route.element} path={route.path} />
})
