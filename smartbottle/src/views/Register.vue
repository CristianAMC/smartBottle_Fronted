<template>
    <div class="row">
        <div class="col col-md-5">
            <h5>Registrate en nuestra aplicación</h5>
            <span>Smart Bottle es un producto ideal si lo que buscas es organizar tu vida. Fija recordatorios, 
                conoce tu ritmo cardiaco, cuida tu salud y lo mas importante TOMA AGUA, todo al alcance de tu mano</span>
        </div>
        <div class="col col-md-5 card card-body">
            <div class="form-group">
                <label for="">Nombre</label>
                <input type="text" class="form-control" v-model="usuario.name" >
            </div>
            <div class="form-group">
                <label for="">Apellidos</label>
                <input type="text" class="form-control" v-model="usuario.lastName">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" v-model="usuario.email" >
            </div>
            <div class="form-group">
                <label for="">Usuario</label>
                <input type="text" class="form-control" v-model="usuario.login" >
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" v-model="usuario.password">
            </div>
            <div class="form-group">
                <label for="">Edad</label>
                <input type="number" class="form-control" name="age" id="age"  v-model.number="usuario.age">
            </div>
            <div class="form-group" >
                <label for="">Genero</label>
                <select class="form-control" v-model="usuario.gender" >
                    <option value="">----</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="none">Prefiero no decirlo</option>
                    <option value="other">Otro</option>
                </select>
            </div>
            <div class= "form-group">
                <label>Enfermedades</label>
                <input class="form-control" type="text" v-on:keyup.13="addDisease($event)">
            </div>
            <div class="form-group">
                <ul v-for="disease in usuario.diseases" v-bind:key="disease">
                    <li>
                        {{disease}}
                    </li>
                </ul>
            </div>
            <div class="">
                <button class="ml-auto btn btn-block btn-danger" @click="RegisterOn()">Registrarse</button>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    let usuario = {
        name: '', 
        lastName: '', 
        login: '',
        email: '', 
        age: 0, 
        password: '', 
        gender: '',
        diseases: []
    }
    export default{
        name: 'Register',
        data: ()=> {
            return({usuario})
        },
        methods: {
            RegisterOn: function (){

                axios.post('http://localhost:4000/api/auth/create', usuario).then(res => {
                    console.log(res.data)
                }).catch((error)=>{
                    console.log(error)
                })
                console.log(usuario)
            },
            addDisease: function(disease){

                usuario.diseases.push(disease.target.value)
                console.log(usuario.diseases)
            }
        }
    }
</script>