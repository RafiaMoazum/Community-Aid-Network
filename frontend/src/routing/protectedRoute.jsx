import React from "react";
import { useUserAuthContext } from "../context/userAuthContext";
import { Navigate } from "react-router-dom";
// import validateUser from "../api/fetchUserDataApi";


const SigninProtectedRoute =  ({element}) => {
    const { isLoggedIn} = useUserAuthContext();

  /* const isUserValid =  await validateUser(token)
   return isUserValid ? element : <Navigate to="/signin" replace />;
  */ 
    return isLoggedIn ? element : <Navigate to="/signin" replace />;
  };

export default SigninProtectedRoute;