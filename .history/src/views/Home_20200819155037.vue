<template>
  <div>
    <div v-if="flag === 0 " class="box">
      <div class="box1">
        <div class="t-center fz18 font-w mg-t20">用户登录</div>
        <div class="box2">
          <div class>用户名</div>
          <input class="input" v-model="value" type="text" placeholder="请输入用户名" />
          <div>
            <div>选择头像</div>
            <div class="box3 fl fl-wrap j-between">
            <!-- 循环的图片 用来做头像 -->
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
    <div v-if="flag !== 0">
      <!-- 背景图片 -->
      <div class="box4">
        <!-- 大盒子 分为左边和右边 -->
        <div class="box5 fl">
          <!-- 左边用户列表 -->
          <div class="box6">
            <div class="fl">
            <!-- 个人头像和用户名 -->
              <img class="img2" :src="img2" alt />
              <div class="title">{{title}}</div>
            </div>
            <div class="bor-tb">
              <div class="mg-tb10 mg-l20">用户列表</div>
            </div>
            <div class="content">
            <!-- 循环的所有用户列表 -->
              <div v-for="(item,index) in userlists " :key="index">
                <div class="fl">
                <!-- 个人头像和用户名 -->
                  <img class="img2" :src="item.avatar" alt />
                  <div class="title">{{item.username}}</div>
                </div>
                <div class="bor-b"></div>
              </div>
            </div>
          </div>

          <!-- 右边聊天列表 -->
          <div class="box7">
            <div class="box8 t-center">聊天室(1)</div>
            <div class="bor-b mg-lr20"></div>
            <!-- 显示的聊天内容的盒子 -->
            <div class="chat-box" id='scrolldIV'>
              <!-- 因为所有加入，退出，发消息 用户信息都显示在一个框里面，所有需要把所有东西push到message里面 -->
              <div v-for="(item,index) in message" :key="index">
                <!-- 如果有加入 或者有退出 -->
                <div v-if="item.jru || item.tchu">
                  <!-- 加入群聊 -->
                  <div class="t-center fz14 colg" v-if="item.jru">{{item.jru}}加入群聊</div>
                  <!-- 退出群了 -->
                  <div class="t-center fz14 colg" v-if="item.tchu">{{item.tchu}}退出群聊</div>
                </div>
                <!-- 没有加入退出 也就是用户输入信息的情况 -->
                <div v-else>
                  <!-- 其他用户输入信息显示在左边 -->
                  <div v-if="title !== item.username" class="fl">
                    <div>
                    <!-- 用户名和头像 -->
                      <div class="colg mg-l5 user1 t-none">{{item.username}}</div>
                      <img class="img4" :src="item.avatar" alt />
                    </div>
                    <!-- 输入内容 因为图片文字我都给了样式，所以做一下判断-->
                    <div v-if="item.msg" class="line-h">{{item.msg}}</div>
                    <!-- 方送的图片 -->
                    <img v-if="item.img" class="sendImg" :src="item.img" alt="">
                  </div>
                  <!-- 当前用户输入信息 显示在右边-->
                  <div v-if="title === item.username" class="over-flaot">
                    <div class="right">
                    <!-- 用户名和头像 -->
                      <div class="colr t-none user1 mg-r5">{{item.username}}</div>
                      <img class="img4" :src="item.avatar" alt />
                    </div>
                    <!-- 输入内容 因为图片文字我都给了样式，所以做一下判断-->
                    <div v-if="item.msg" class="line-h right">{{item.msg}}</div>
                   <!-- 发送的图片 -->
                    <img v-if="item.img" class="sendImg right" :src="item.img" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="bor-b"></div>

            <div class="mg-lr10 c-pointer fl p-r">
              <!-- 使用插件 发送表情 -->
              <div class="picker" v-if="falg===true">
                <picker set="emojione" @select="select1" />
              </div>
              <!-- 表情 抖一抖 上传图片 -->
              <img class="img3" src="../assets//img/Smiley.png" alt @click="opo" />
              <img class="img3" src="../assets//img/Shake.png" alt />
              <img class="img3" src="../assets//img/upload.png" alt />
              <input class="sendingIMG c-pointer" type="file" @change="change1" />
            </div>
            <!-- 文本域 输入框 -->
            <div  class="textarea1"   contenteditable="true"  ref="content"
              @keydown.enter.prevent="sendMessage"    ></div>

            <div class="fl p-re">
              <div class="fz12 colg">按下Enter或者点击发送</div>
              <div @click="sendMessage" class="fs">发送</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from "emoji-mart-vue";
export default {
  name: "",
  props: {},
  components: { Picker },
  data() {
    return {
      falg: false,
      flag: 0,
      userlists: [], // 用户列表
      goOut: [], // 退出群聊
      joinChat: [], //加入群聊
      title: "", // 用户名
      img2: "", // 头像
      Active: 0, //初始选中的图片
      value: "", //输入框的值
      avatar: "", //登陆时选中的图片
      msg: "", //发送的消息
      message: [], //所有用户信息
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
    // 上传图片的方法
    change1(e) {
      console.log(e);
      // 因为只能选择一个图片，所以直接[]选择就不循环了
      let f = e.target.files[0];
      let fr = new FileReader(); //固定样式
      fr.readAsDataURL(f); //自带的方法
      fr.onload = () => {
        this.$socket.emit("sendImage", {
          username: this.value,
          avatar: this.avatar,
          img: fr.result,
        });
        // 让图片在输入框显示 但是又问题，因为不能图片后面跟文字
        // this.$refs.content.innerHTML = `<img src="${fr.result}", width="100", height="100"/>`;
      };
    },
    // 获取发送表情
    select1(e) {
      console.log(e);
      // 把表情赋值给输入框
      this.$refs.content.innerHTML += e.native;
    },
    // 表情的显示与否
    opo() {
      this.falg = !this.falg;
    },
    // 选择头像
    img1(item, index) {
      this.Active = index;
      this.avatar = item.img;
    },
    // 登录的方法
    login() {
      if (this.value !== "") {
        this.$socket.emit("login", {
          username: this.value,
          avatar: this.avatar,
        });
      }
    },
    // sendMessage里面传的参数 msg: 聊天内容 username: 当前用户名 avatar: 当前用户头像
    sendMessage() {
      this.msg = this.$refs.content.innerHTML
      // 如果div输入框不是空的
      if (this.msg !== "") {
        this.$socket.emit("sendMessage", {
          msg: this.msg,
          username: this.value,
          avatar: this.avatar,
        });

        this.$refs.content.innerHTML = "";
      }
    },
  },
  sockets: {
    receiveImage(data) {
      console.log("获取所有图片信息", data);
      this.message.push(data);
    },
    loginSuccess(data) {
      console.log("登陆成功", data);
      this.flag = 1;
      this.title = data.username;
      this.img2 = data.avatar;
      // let a= []
      // a = data.username+'加入群聊'
      // this.joinChat.push(a)
    },
    loginError(data) {
      alert("登陆失败,用户名重复");
      console.log("登陆失败", data);
    },

    userList(data) {
      console.log("用户列表", data);

      let obj = {};
      if (data.length > this.userlists.length) {
        obj.jru = data[data.length - 1].username;
        this.message.push(obj);
      }
      this.userlists = data;
      console.log(this.userlists);
    },
    delUser(data) {
      console.log("用户退出", data);
      let b = {};
      b.tchu = data.username;
      this.message.push(b);
      console.log(this.message);
    },

    receiveMessage(data) {
      console.log("获取所有聊天信息", data);
      let a = {};
      a = data;
      this.message.push(a);
      console.log(this.message);
    },
  },
  mounted() {},
  watch: {
    // 监听显示内容触底
    message() {
      let obj = document.getElementById("scrolldIV");
      this.$nextTick(() => {
        obj.scrollTop = obj.scrollHeight;
      });
    },
  },
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
  background: rgba(112, 213, 231, 0.5);
}
.box6 {
  width: 30%;
  height: 712px;
}
.box7 {
  width: 70%;
  height: 712px;
  background: rgba(173, 234, 236, 0.7);
}
.box8 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 22px;
}
.content {
  overflow-y: auto;
  width: 100%;
  height: 608px;
}
.img2 {
  width: 40px;
  height: 40px;
  margin: 5px 10px 5px 20px;
}
.img4 {
  width: 50px;
  height: 50px;
  margin: 5px;
}
.title {
  margin-top: 10px;
  line-height: 30px;
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
  overflow-y: auto;
  width: 100%;
  height: 500px;
}
.img3 {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
.textarea1 {
  margin: 0 auto;
  width: 95%;
  height: 127px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgba(116, 201, 250, 0.1);
  resize: none;
  font-size: 18px;
}
.colg {
  line-height: 30px;
}
.fs {
  margin-left: 10px;
  text-align: center;
  border: 1px solid rgb(122, 117, 117);
  color: rgb(13, 14, 13);
  width: 80px;
  height: 30px;
  line-height: 30px;
  background: rgb(250, 248, 246);
  border-radius: 10px;
}

.line-h {
  margin-top: 25px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px 0 10px;
  background: #87e97e;
  border-radius: 10px;
}
.user1 {
  height: 20px;
  width: 60px;
}
.right {
  float: right;
}
.left {
  float: left;
}
.mg-r5 {
  margin-left: 5px;
}
.mg-l5 {
  margin-left: 5px;
}
.over-flaot {
  overflow: hidden;
}
.picker {
  position: absolute;
  left: 50%;
  bottom: -1%;
}
.p-re {
  position: relative;
  top: -5%;
  left: 20%;
}
.sendImg {
  width: 80px;
  height: 80px;
} 
.sendingIMG {
  width: 40px;
  height: 30px;
  position: absolute;
  opacity: 0;
  top: 6px;
  left: 90px;

}
</style>