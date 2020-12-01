<template>
    <div class="row">
       <div class="col col-md-5 card card-body">
            <div>
                <img src="../assets/SB.png"  style="width: auto; height: 195px;" class="img-fluid" alt="Responsive image">
            </div>
            <div class="form-group">
                <label for="">Correo</label>
                <input type="text" class="form-control" v-model="usuario.email" >
            </div>
            <div class="form-group">
                <label for="">Clave</label>
                <input type="password" class="form-control" v-model="usuario.password">
            </div>
            <div>
                <h6><router-link to="/register">¿Aun no tienes una cuenta? Registrate</router-link></h6>
            </div>
            <div class="">
                <button class="ml-auto btn btn-block btn-danger" @click="LoginOn()">Ingresar</button>
            </div>            
       </div>
    </div>
</template>

<script>

    import axios from 'axios'

    function saveToken(token){
        sessionStorage.setItem('access-token', token)
    }

    let usuario = {
        email: '', 
        password: ''
    }
    export default{
        name: 'Login',
        data: ()=> {
            return({usuario})
        },
        methods: {
            LoginOn: function (){

                axios.post('http://localhost:4000/api/user/login', usuario).then(res => {
                    saveToken(res.headers.authorization)
                    window.location.replace("/")

                })
                //console.log(usuario)
            }
        }
    }
</script>