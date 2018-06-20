import Vue from 'vue';
import App from './App.vue';
import User from './components/Users.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.component('app-user', User)

new Vue({
  el: '#app',
  render: h => h(App)
})
