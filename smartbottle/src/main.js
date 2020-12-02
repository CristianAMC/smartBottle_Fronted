import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import interceptor from './core/Interceptor'
import 'popper.js'
import'jquery'
import 'bootstrap'
import './styles.css'



interceptor()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
