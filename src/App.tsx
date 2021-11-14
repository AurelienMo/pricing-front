import React from 'react';
import {Helmet} from "react-helmet";
import {publicRouter} from "./navigations/routes/publicRoutes";
import {Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Helmet>
                <title>Mentorat - Pricing</title>
            </Helmet>
            <Routes>
                {publicRouter}
            </Routes>
        </>
    );
}

export default App;
