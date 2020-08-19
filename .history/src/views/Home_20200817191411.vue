<template>
  <div>
    <div class="box">
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
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
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
      this.$router.push("groupChat");
    },
    loginError(data) {
      alert("登陆失败,用户名重复");
      console.log("登陆失败", data);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
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
</style>