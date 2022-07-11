<template>
  <div id="main-app">
    <el-container class="select-prant">
      <Header />
      <el-container class="el-container-main">
        <el-aside class="aside-menu" :width="computedWidth">
          <Scrollbar class="scroll-menu">
            <!-- <Menu :menu-status="menuStatus" /> -->
            <div id="app-qiankun-menu"></div>
          </Scrollbar>
          <div class="icon">
            <i
              @click="menuStatus = !menuStatus"
              :class="[menuStatus ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
            ></i>
          </div>
        </el-aside>
        <Scrollbar class="scroll">
          <el-main class="layou-main">
            <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
            <router-view v-show="$route.name" />

            <!-- 子应用渲染区，用于挂载子应用节点 -->
            <div id="app-qiankun-content"></div>
          </el-main>
        </Scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./components/Layout/components/menu.vue";
import Header from "./components/Layout/components/Header.vue";
import Scrollbar from "./components/Layout/scrollbar.vue";
export default {
  name: "App",
  components: {
    Menu,
    Scrollbar,
    Header,
  },
  props: {},
  computed: {
    computedWidth() {
      return this.menuStatus ? "65px" : "200px";
    },
  },
  data() {
    return {
      menuStatus: false,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
#main-app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
a {
  text-decoration: none;
}
#app-qiankun {
  position: relative;
}
.el-container-main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}
.select-prant {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  border-bottom: solid 1px #e6e6e6;
}
.scroll-menu {
  height: 100%;
}
.el-aside {
  position: relative;
  overflow: hidden;
  .icon {
    font-size: 28px;
    position: absolute;
    bottom: 15px;
    right: 0;
    cursor: pointer;
    color: #409eff;
  }
}
.layou-main {
  min-height: 100vh -60px;
  background: #f4f4f8;
  height: 100%;
}
.aside-menu {
  width: 65px;
}
</style>
