import React from 'react';
import {Helmet} from "react-helmet";
import {publicRouter} from "./navigations/routes/publicRoutes";
import {Routes} from "react-router-dom";
import {protectedRouter} from "./navigations/routes/protectedRoutes";
import Loader from "./components/Loader";
import {useSelector} from "react-redux";
import {makeSelectLoading} from "./store/selectors/globalSelectors";

function App() {
    const loading = useSelector(makeSelectLoading());
    return (
        <>
            <Helmet>
                <title>Mentorat - Pricing</title>
            </Helmet>
            {loading && <Loader />}
            <Routes>
                {publicRouter}
                {protectedRouter}
            </Routes>
        </>
    );
}

export default App;
