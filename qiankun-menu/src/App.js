import React, { useState } from "react";
import { Menu } from "antd";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// let BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/" : "";

const items = [
  { label: "vue子应用", key: "/vue" }, // 菜单项务必填写 key
  { label: "react子应用", key: "/react" },
  {
    label: "子菜单",
    key: "submenu",
    children: [{ label: "子菜单项", key: "submenu-item-1" }],
  },
];
function App(props) {
  console.log("App-props", props);
  const { globalData } = props;
  const [current, setCurrent] = useState("item-1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    // window.history.pushState(null, null, e.key);
    globalData.push(e.key);
  };
  return (
    <BrowserRouter>
      <Menu
        mode="inline"
        style={{ height: "100vh" }}
        items={items}
        theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
      />
    </BrowserRouter>
  );
}

// qiankun 无关的技术栈

export default App;
