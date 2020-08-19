import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://127.0.0.1:3000/') //xxx填后台给的socket地址，端口号根据实际后台端口写
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
