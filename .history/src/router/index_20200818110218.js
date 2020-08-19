import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'登录聊天室',
    },
  },
  {
    path: '/groupChat',
    name: 'groupChat',
    component: () => import( '../views/groupChat/groupChat.vue'),
    meta:{
      title:'我的聊天室',
    },
  },
  // 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


  
    beforeRouteEnter (to, from, next) {
      //   // 通过路由源信息（meta（写在路由后 在上面））给浏览器绑定名字
    document.title =to.meta.title
      next();
      Vue.use(new VueSocketIO({
        debug: true,
        connection: SocketIO('http://127.0.0.1:3000/') 
      }));
    }
  

export default router
