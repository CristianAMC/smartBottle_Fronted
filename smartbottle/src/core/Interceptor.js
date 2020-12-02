import axios from 'axios';

export default function setup (){
    const token  = sessionStorage.getItem('access-token'); 
    axios.interceptors.request.use((config)=> {
        if(token){
            config.headers.authorization = token; 
            return config;
        }
    }, (error )=> {
        return Promise.reject(error)
    })

    axios.interceptors.response.use((response)=> {
        if(response.status == 401){
            window.location.replace('/login')
        }
    })
}