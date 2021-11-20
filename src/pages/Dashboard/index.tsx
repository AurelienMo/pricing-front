import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    useAuth();
    return (
        <h2>Dashboard page</h2>
    )
}

export default Dashboard;
