import store from "../store";
import router from "../router";

const model = {
  /**
   * 获取token
   *
   */
  globalData: {
    type: "platform",
  },
  getToken: () => store.state.token || 1,
  /**
   * 获取用户数据
   */
  getUserInfo: () => store.state.userInfo,
  /**
   * 获取浏览器window
   */
  getWindow: () => window,
  /**
   * 登出
   */
  logout() {
    store.dispatch("logout");
  },
  push(url) {
    router.push(url);
  },
};

export default model;
