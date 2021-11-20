import React from 'react';
import {Helmet} from "react-helmet";
import {publicRouter} from "./navigations/routes/publicRoutes";
import {Routes} from "react-router-dom";
import {protectedRouter} from "./navigations/routes/protectedRoutes";
import {useSelector} from "react-redux";
import {makeSelectLoading} from "./store/selectors/globalSelectors";
import {ThemeProvider} from "@mui/material/styles";
import {themeOptions} from "./assets/styles/theme";
import Loader from "./components/Loader";


function App() {
    const loading = useSelector(makeSelectLoading());
    return (
        <ThemeProvider theme={themeOptions}>
            <Helmet>
                <title>Mentorat - Pricing</title>
            </Helmet>
            {loading && <Loader />}
            <Routes>
                {publicRouter}
                {protectedRouter}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
