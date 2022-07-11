import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router";
import "./publicPath";
Vue.config.productionTip = false;

let instance = null;
let router = null;
function render(props) {
  const { container } = props || {};
  router = new VueRouter({
    mode: "history",
    // 运行在主应用中时，基础路由地址配置为 /vue
    base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
    routes,
  });
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app"); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 默认独立运行
  render();
}
// 子组件的协议就ok了
export async function bootstrap(props) {}
export async function mount(props) {
  console.log("父应用传给vue子应用的数据-vue", props);
  render(props);
}
export async function unmount(props) {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
