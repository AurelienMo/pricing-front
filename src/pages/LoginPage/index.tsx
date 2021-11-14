import {useContext, useState} from "react";
import AuthContext from "../../store/auth-context";
import {Navigate, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const ctx = useContext(AuthContext);
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    if (ctx.isLogin()) {
        return <Navigate to="/dashboard" />
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('https://api.dev.pricing.fr/api/login_check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: identifier, password: password})
        });
        if (response.ok) {
            const data = await response.json();
            ctx.onLogin(data);
            navigate('/dashboard');
        }
    }
    return(
        <form onSubmit={handleSubmit} style={{marginTop: 30}}>
            <label htmlFor="identifier">Adresse email</label>
            <input
                name="identifier"
                key="identifier"
                onChange={e => setIdentifier(e.target.value)}
            />
            <label htmlFor="password">Mot de passe</label>
            <input
                name="password"
                type="password"
                key="password"
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Me connecter</button>
        </form>
    )
}

export default LoginPage;
