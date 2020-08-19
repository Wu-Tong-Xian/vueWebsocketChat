<template>
  <div>
    <div class="box">
      <div class="box1 fl">
       <div class="box2"></div>
       <div class="box3"></div>
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
    return {};
  },
  methods: {},
  sockets: {
    loginSuccess(data) {
      console.log("登陆成功", data);
    },
    loginError(data) {
      alert("登陆失败,用户名重复");
      console.log("登陆失败", data);
    },
    userList(data) {
      console.log("用户列表：", data);
    },
    delUser(data) {
      console.log("用户下线", data);
    },
    receiveMessage(data) {
      console.log("所有用户消息", data);
    },
  },
  mounted() {
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 712px;
  background: url("../../assets/img/mv.jpg");
  position: relative;
}
.box1  {
  margin: 0 auto;
  width: 65%;
  height: 712px;
  background: rgba(255,255,255,0.5);
}
.box2 {
  width: 30%;
  height: 712px;
  background: rgba(235, 112, 112, 0.7);
}
.box3 {
  height: 70%;
  height: 712px;
  background: rgba(104, 201, 91, 0.5);
}
</style>