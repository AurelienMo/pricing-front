import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {LOGIN_PATH} from "../navigations/routes/publicRoutes";
import {DASHBOARD_PATH} from "../navigations/routes/protectedRoutes";
import {useEffect} from "react";

export const ANONYMOUS_ROUTE = ['/'];
export const PROTECTED_ROUTE = ['/dashboard'];

const useAuth = () => {
    const user = useSelector((state: any) => state.user.auth);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user && PROTECTED_ROUTE.includes(location.pathname)) {
            navigate(LOGIN_PATH);
        }
        if (user && ANONYMOUS_ROUTE.includes(location.pathname)) {
            navigate(DASHBOARD_PATH);
        }
    }, [user, location.pathname, navigate])
}

export default useAuth;
