import React from "react";
import { useUserAuthContext } from "../context/userAuthContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
    const { userDetails } = useUserAuthContext();
    
    const userRole = userDetails && userDetails.role;
    const isAuthenticated = userDetails && userDetails.isValid;

    const authorizedAdmin = userRole == "admin"? true : false

    console.log(' Inside admin Protected Route ')
    console.log("User Role is " , userRole)

    // Redirect to signin page if not authenticated
   // return isAuthenticated ? children : <Navigate to="/signin" replace />;

   return isAuthenticated && authorizedAdmin ? children : <Navigate to="/" replace />;
};

export default AdminProtectedRoute;
