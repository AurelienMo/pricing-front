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
        if (user === null && PROTECTED_ROUTE.includes(location.pathname)) {
            return navigate(LOGIN_PATH);
        }
        if (user !== null && ANONYMOUS_ROUTE.includes(location.pathname)) {
            return navigate(DASHBOARD_PATH);
        }
    }, [user, location.pathname, navigate])
}

export default useAuth;
