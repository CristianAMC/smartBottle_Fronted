<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-ligth bg-ligth">
  <a class="navbar-brand" href="#"><router-link to= "/">SMART BOTTLE</router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/register">Registro</router-link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
      </li>

      <li class="nav-item" v-if="authenticated()">
        <a class="nav-link" href="#"><router-link to="/mybottle">My bottle</router-link></a>
      </li>

      <li class="nav-item" v-if="authenticated()">
        <a class="nav-link" href="#"><router-link to="/alarms">Recordatorios</router-link></a>
      </li>            

      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container-fluid">
      <router-view/>
</div>
  </div>
</template>

<script>

  import isAuthenticated from './core/IsAuthenticated'

  export default {

    name: 'app',
    methods:{
      authenticated: ()=> {
        return isAuthenticated()
      }
    }
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
