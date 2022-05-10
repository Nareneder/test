import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// const PublicRoute = ({ accessToken, children }) => {
//     if (!accessToken) {
//         return <Navigate to="/" />;
//     }

//     return children;
// };
const useAuth=()=>{
    const jwt_token = sessionStorage.getItem('token')
    if(!jwt_token){
        return false
    }
    else {
        return true
    }
}

const PublicRoute=()=>{
    const auth = useAuth();
    // debugger
    return (auth === false ? <Outlet/> : <Navigate to="/dashboard"/>)
    
}


export default PublicRoute;