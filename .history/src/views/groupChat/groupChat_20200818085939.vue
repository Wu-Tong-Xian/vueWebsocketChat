<template>
  <div>
    <div class="box"></div>
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
  height: 670px;
  background: url("../assets/img/bg.jpg");
  position: relative;
  margin-bottom: 10px;
}
</style>