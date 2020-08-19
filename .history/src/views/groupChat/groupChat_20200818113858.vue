<template>
  <div>
    <!-- 背景图片 -->
    <div class="box">
      <!-- 大盒子 分为左边和右边 -->
      <div class="box1 fl">
        <!-- 左边用户列表 -->
        <div class="box2">
          <div class="fl box21">
            <img class="img" :src="img" alt />
            <div class="title">{{title}}</div>
          </div>
        </div>

        <!-- 右边聊天列表 -->
        <div class="box3">
          <div class="box4 t-center">聊天室(1)</div>
          <div></div>
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
      info: {},
      list: [],
      title: "",
      img: "",
    };
  },
  methods: {},

  mounted() {
    this.info = this.$route.query.data;
    this.title = this.info.username;
    this.img = this.info.avatar;
  },
  sockets: {
    userList(data) {
      console.log(data);
    },
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
.box1 {
  margin: 0 auto;
  width: 70%;
  height: 712px;
  background: rgba(255, 255, 255, 0.5);
}
.box2 {
  width: 30%;
  height: 712px;
  background: rgba(235, 112, 112, 0.7);
}
.box3 {
  width: 70%;
  height: 712px;
  background: rgba(90, 230, 78, 0.7);
}
.box4 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
}
.img {
  width: 50px;
  height: 50px;
  margin: 20px;
}
.title {
  margin-top: 10px;
  left: 50px;
}
.box21 {

}
</style>