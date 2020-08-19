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
  //   // 通过路由源信息（meta（写在路由后 在上面））给浏览器绑定名字
    document.title =to.meta.title
  //   // let username =JSON.parse(localStorage.getItem('username'))
  //   let username =localStorage.getItem('username')
  //   // 如果用户跳转的就是登录页面就让他直接去
  //   // 设置了白名单 这里就可以修改为
  //   if(whitePath.includes(to.path)) {
  //   // if(to.path === '/login') {
      next()
  //   }else {
  //     // 如果有user就让他调转其他页面 否则就调转到本页面
  //     username ? next() : next('/login')
  //     }
  })
  

export default router
