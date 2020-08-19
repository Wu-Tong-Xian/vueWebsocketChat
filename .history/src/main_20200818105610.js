import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
    connection: 'http://localhost:5005',  
}))



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
