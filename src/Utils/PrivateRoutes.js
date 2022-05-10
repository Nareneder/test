import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth=()=>{
    const jwt_token = sessionStorage.getItem('token')
    if(jwt_token){
        return true
    }
    else {
        return false
    }
}

const PrivateRoute=()=>{
    const auth = useAuth();
    // debugger
    return (auth === true ? <Outlet/> : <Navigate to="/"/>)
    
}

export default PrivateRoute;