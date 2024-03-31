import React from "react";
import { useUserAuthContext } from "../context/userAuthContext";
import { Navigate } from "react-router-dom";

const SigninProtectedRoute = ({ children }) => {
    const { userDetails } = useUserAuthContext();
    
    // Check if user details are available to determine if the user is authenticated
    const isAuthenticated = userDetails && userDetails.isValid;

    console.log("Is User is Authenticated " , isAuthenticated)

    // Redirect to signin page if not authenticated
    return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default SigninProtectedRoute;
