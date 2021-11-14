import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    token: null,
    refreshToken: null,
    onLogout: () => {},
    onLogin: (token: any) => {},
    isLogin: (): any => {},
})

export const AuthContextProvider = (props: any) => {
    const [token, setToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    useEffect(() => {
        // @ts-ignore
        const storedToken = localStorage.hasOwnProperty('token') ?  JSON.parse(localStorage.getItem('token')) : null;
        if (storedToken) {
            setToken(storedToken.token);
            setRefreshToken(storedToken.refresh_token);
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
        setRefreshToken(null);
    }

    const loginHandler = (token: any) => {
        setToken(token.token);
        setRefreshToken(token.refresh_token);
        localStorage.setItem('token', JSON.stringify(token));
    }

    const isLogin = () => {
        return token && refreshToken;
    }

    return <AuthContext.Provider
        value={{
            token: token,
            refreshToken: refreshToken,
            onLogout: logoutHandler,
            onLogin: loginHandler,
            isLogin: isLogin
        }}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
