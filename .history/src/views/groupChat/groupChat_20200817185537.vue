<template>
  <div>群聊</div>
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
    userList(data) {
      console.log("用户列表：", data);
    },
    delUser(data) {
      console.log("用户下线", data);
    },
    delUser(data) {
      console.log("用户下线", data);
    },
  },
  mounted() {
    alert("登陆成功");
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>