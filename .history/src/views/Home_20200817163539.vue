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
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  margin: 0 auto;
  width: 100%;
  height: 670px;
  background: url("../assets/img/bg.jpg");
}
body > div:nth-of-type(7) {
  width: 400px;
  height: 400px;
  background: #ff0;
  position: relative;
  margin-bottom: 10px;
}
</style>