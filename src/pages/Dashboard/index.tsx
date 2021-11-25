import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
    useAuth();
    return (
        <>
            <Navbar />
            <main>
                <h2>Dashboard page</h2>
            </main>
        </>
    )
}

export default Dashboard;
