
export default function guardian(to, from, next){
    const token = sessionStorage.getItem('access-token'); 
    if(token){
        next()
    }else{
        window.location.replace('/login')
    }
}