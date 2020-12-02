import axios from 'axios';

const serverUrl = 'http://localhost:4000'
export default function setup (){
    const token  = sessionStorage.getItem('access-token'); 
    axios.interceptors.request.use((config)=> {
        if(token){
            config.headers.authorization = token; 
            return config;
        }else if(config.url === `${serverUrl}/api/auth/login` || config.url === `${serverUrl}/api/auth/create`){
            return config;
        }
    }, (error )=> {
        return Promise.reject(error)
    })

    axios.interceptors.response.use((response)=> {
        if(response.status == 401){
            window.location.replace('/login')
        }else{
            return response;
        }
    })
}