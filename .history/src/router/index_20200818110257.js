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

//  设置 白名单： 登陆 注册  找回密码/
// let whitePath = [ '/login','/register','/findPwd']
// // let whitePath = [ '/login']


  
    router.beforeEach((to,from,next) =>{
      next();
      Vue.use(new VueSocketIO({
        debug: true,
        connection: SocketIO('http://127.0.0.1:3000/') 
      }));
    }
  

export default router
