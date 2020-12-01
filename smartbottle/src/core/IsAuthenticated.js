function isAuthenticated(){
    const token = sessionStorage.getItem('access-token')
    if(token === undefined || null) return false
        else{
            return true
        }
}


export default isAuthenticated