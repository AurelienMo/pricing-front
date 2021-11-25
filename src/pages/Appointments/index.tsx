import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";

const Appointments = () => {
    useAuth();
    return (
        <>
            <Navbar />
            <main>
                <h2>Liste de rendez-vous</h2>
            </main>
        </>
    )
}

export default Appointments;
