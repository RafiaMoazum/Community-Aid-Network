import { createContext, useContext } from "react";

const UserAuth = createContext();

const UserAuthContextPovider = ({children}) => {
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }
    return(
        <UserAuth.Provider value={{storeTokenInLS}}>
            {children}
        </UserAuth.Provider>
    )
}

export const useUserAuthContext = () => {
    return useContext(UserAuth)
}

export default UserAuthContextPovider;