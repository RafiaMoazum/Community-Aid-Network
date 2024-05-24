import { useEffect } from "react";
import { useUserAuthContext } from "../context/userAuthContext";
import { Navigate } from "react-router-dom";


const LogOut = () => {
const {logoutUser} = useUserAuthContext()
useEffect(()=> {
  logoutUser()
},[])

    return <Navigate to="/signin" />
}

export default LogOut;