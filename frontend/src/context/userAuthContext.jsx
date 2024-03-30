import { createContext, useContext, useState } from "react";

const UserAuth = createContext();

const UserAuthContextPovider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"))

    const isLoggedIn = !!token;

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }

    const logoutUser = () => {
        setToken("");
        console.log("logout is running")
        return localStorage.removeItem("token")
    }

    return(
        <UserAuth.Provider value={{storeTokenInLS, logoutUser, isLoggedIn, token}}>
            {children}
        </UserAuth.Provider>
    )
}

export const useUserAuthContext = () => {
    return useContext(UserAuth)
}

export default UserAuthContextPovider;