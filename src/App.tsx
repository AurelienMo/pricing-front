import React, {useContext} from 'react';
import {Helmet} from "react-helmet";
import {publicRouter} from "./navigations/routes/publicRoutes";
import {Routes} from "react-router-dom";
import {IconButton, Link, Toolbar, Typography} from "@mui/material";
import AuthContext from "./store/auth-context";

function App() {
    const ctx = useContext(AuthContext);
    return (
        <>
            <Helmet>
                <title>Mentorat - Pricing</title>
            </Helmet>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {!ctx.isLogin() && <Link href="/"><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Connexion
                    </Typography></Link>}
                    {ctx.isLogin() && <Link component="button" variant="body2" onClick={ctx.onLogout}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Déconnexion
                        </Typography>
                    </Link> }
                </Toolbar>
            <Routes>
                {publicRouter}
            </Routes>
        </>
    );
}

export default App;
