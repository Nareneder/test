
export const getUser=(userinfo)=>{
    sessionStorage.setItem("user", JSON.stringify(userinfo));
    const userStr = sessionStorage.getItem('user');
    if(userStr) {
        return JSON.parse(userStr)
    } 
    else return null;
}

export const getToken=(token)=>{
    // debugger
    sessionStorage.setItem('token', token);
    sessionStorage.getItem('token');
    if(token){
        return token;
    }
    else return null;
}
export const removeUserSession=()=>{
    sessionStorage.clear();
}