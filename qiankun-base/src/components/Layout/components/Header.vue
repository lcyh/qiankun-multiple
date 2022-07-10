<template>
  <el-header class="header">
    <div @click="logout" class="logo-wrapper">
      <img
        class="picture"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      designer
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$store.state.hasInited = false;
        this.$router.push({
          path: "/login",
          //   query: { redirect: this.$route.path },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.logo-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 100%;
}
.picture {
  display: block;
  cursor: pointer;
  width: 50px;
  height: 100%;
}
.el-header.header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
}
</style>
