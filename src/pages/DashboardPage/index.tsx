import {useContext} from "react";
import AuthContext from "../../store/auth-context";
import {Navigate} from "react-router-dom";

const DashboardPage = () => {
    const ctx = useContext(AuthContext);

    if (!ctx.isLogin()) {
        return <Navigate to="/" />
    }

    return(
        <h1>Dashboard</h1>
    )
}

export default DashboardPage;
