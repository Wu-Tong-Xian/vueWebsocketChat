<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="t-center fz18 font-w mg-t20">用户登录</div>
        <div class="box2">
          <div class>用户名</div>
          <input class="input" type="text" placeholder="请输入用户名" />
          <div>
            <div>选择头像</div>
            <div class="box3"></div>
          </div>
          <div class="login t-center">登录</div>
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
    return {};
  },
  methods: {},
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
  padding-top: 50px;
}
.input {
  width: 350px;
  height: 26px;
  margin: 10px 0 10px 0;
}
.box3 {
  margin-top: 10px;
  width: 350px;
  height: 100px;
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
</style>