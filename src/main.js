import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import User from './components/Users.vue';

Vue.component('app-header', Header)
Vue.component('app-user', User)

new Vue({
  el: '#app',
  render: h => h(App)
})
