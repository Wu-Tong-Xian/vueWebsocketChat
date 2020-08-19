<template>
  <div>
    <div v-if="userlists.length === 0 " class="box">
      <div class="box1">
        <div class="t-center fz18 font-w mg-t20">用户登录</div>
        <div class="box2">
          <div class>用户名</div>
          <input class="input" v-model="value" type="text" placeholder="请输入用户名" />
          <div>
            <div>选择头像</div>
            <div class="box3 fl fl-wrap j-between">
              <div v-for="(item,index) in imgs" :key="index">
                <img
                  @click="img1(item,index)"
                  :class="{'border':Active === index}"
                  class="img c-pointer"
                  :src="item.img"
                  alt
                />
              </div>
            </div>
          </div>
          <div @click="login" class="login t-center c-pointer">登录</div>
        </div>
      </div>
    </div>
    <div v-if="userlists.length !== 0">
      <!-- 背景图片 -->
      <div class="box4">
        <!-- 大盒子 分为左边和右边 -->
        <div class="box5 fl">
          <!-- 左边用户列表 -->
          <div class="box6">
            <div class="fl">
              <img class="img2" :src="img2" alt />
              <div class="title">{{title}}</div>
            </div>
            <div class="bor-tb">
              <div class="mg-tb10 mg-l20">用户列表</div>
            </div>
            <div v-for="(item,index) in userlists " :key="index">
              <div class="fl">
                <img class="img2" :src="item.avatar" alt />
                <div class="title">{{item.username}}</div>
              </div>
              <div class="bor-b"></div>
            </div>
          </div>

          <!-- 右边聊天列表 -->
          <div class="box7">
            <div class="box8 t-center">聊天室(1)</div>
            <div class="bor-b mg-lr20"></div>
            <!-- 显示的聊天内容的盒子 -->
            <div class="chat-box" >
              <div class="t-center fz14 colg">{{title}}加入了群聊</div>
              <div class="t-center fz14 colg">{{goOut}}退出了了群聊</div>
            </div>
            <div class="bor-b mg-lr20"></div>
            <!-- 表情 抖一抖 上传图片 -->
            <div class="mg-lr10 fl">
               <img src="../assets//img/Smiley.png" alt="">
               <img src="../assets//img/Shake.png" alt="">
               <img src="../assets//img/upload.png" alt="">
            </div>
            <!-- 文本域 输入框 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      userlists: [], // 用户列表
      goOut: "", // 退出

      title: "", // 用户名
      img2: "", // 头像
      Active: 0, //初始选中的图片
      value: "", //输入框的值
      avatar: "", //登陆时选中的图片
      imgs: [
        { img: require("../assets/img/10.jpg") },
        { img: require("../assets/img/1.jpg") },
        { img: require("../assets/img/2.jpg") },
        { img: require("../assets/img/3.jpg") },
        { img: require("../assets/img/4.jpg") },
        { img: require("../assets/img/5.jpg") },
        { img: require("../assets/img/6.jpg") },
        { img: require("../assets/img/7.jpg") },
        { img: require("../assets/img/8.jpg") },
        { img: require("../assets/img/9.jpg") },
      ],
    };
  },
  methods: {
    img1(item, index) {
      this.Active = index;
      this.avatar = item.img;
    },
    login() {
      this.$socket.emit("login", {
        username: this.value,
        avatar: this.avatar,
      });
    },
  },
  sockets: {
    loginSuccess(data) {
      console.log("登陆成功", data);

      this.title = data.username;
      this.img2 = data.avatar;
    },
    loginError(data) {
      alert("登陆失败,用户名重复");
      console.log("登陆失败", data);
    },
    userList(data) {
      console.log("用户列表", data);
      this.userlists = data;
    },
    delUser(data) {
      console.log("用户退出", data);
      this.goOut = data.username;
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
/*登录样式 */
.box {
  width: 100%;
  height: 670px;
  background: url("../assets/img/bg.jpg");
  position: relative;
  margin-bottom: 10px;
}
.box1 {
  width: 400px;
  height: 400px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box2 {
  width: 350px;
  height: 350px;
  margin: 0 auto;
  padding-top: 20px;
}
.input {
  width: 350px;
  height: 26px;
  margin: 10px 0 10px 0;
}
.box3 {
  margin-top: 10px;
  width: 350px;
  height: 120px;
  border: 1px solid rgb(116, 101, 101);
}
.login {
  width: 300px;
  height: 40px;
  background: rgb(72, 219, 72);
  border-radius: 10px;
  line-height: 40px;
  margin: 20px auto;
}
.img {
  width: 55px;
  height: 50px;
  margin-left: 5px;
  margin-top: 4px;
}
.border {
  border: 1px solid red;
}
/* 登录之后 */
.box4 {
  width: 100%;
  height: 712px;
  background: url("../assets/img/mv.jpg");
  position: relative;
}
.box5 {
  margin: 0 auto;
  width: 70%;
  height: 712px;
  background: rgba(255, 255, 255, 0.5);
}
.box6 {
  width: 30%;
  height: 712px;
  background: rgba(235, 112, 112, 0.7);
}
.box7 {
  width: 70%;
  height: 712px;
  background: rgba(90, 230, 78, 0.7);
}
.box8 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
}
.img2 {
  width: 50px;
  height: 50px;
  margin: 10px 10px 10px 20px;
}
.title {
  margin-top: 10px;
  line-height: 50px;
}
.bor-tb {
  border-top: 1px solid rgb(94, 89, 89);
  border-bottom: 1px solid rgb(94, 89, 89);
}
.bor-b {
  border-bottom: 1px solid rgb(94, 89, 89);
}
/*聊天内容容器*/
.chat-box {
  width: 100%;
  height: 500px;
  background: rgb(72, 219, 72);
}
</style>