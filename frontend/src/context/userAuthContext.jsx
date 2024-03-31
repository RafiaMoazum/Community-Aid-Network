import { createContext, useContext, useState, useEffect } from "react";
import validateUser from "../api/fetchUserDataApi";

const UserAuth = createContext();

const UserAuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (token) {
                try {
                    const data = await validateUser(token);
                    console.log("we have token", token)
                    setUserDetails(data);
                } catch (error) {
                    console.error("Error validating user:", error);
                }
            }
        };
        fetchUserDetails();
    }, [token]);

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken); // This will trigger the useEffect to fetch user details
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUserDetails(null); 
    };

    return (
        <UserAuth.Provider value={{ userDetails, storeTokenInLS, logoutUser }}>
            {children}
        </UserAuth.Provider>
    );
};

export const useUserAuthContext = () => useContext(UserAuth);

export default UserAuthContextProvider;
