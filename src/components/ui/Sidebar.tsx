"use client";

import { useState } from "react";
import { ConfigProvider, Layout, Menu } from "antd";
const { Sider } = Layout;
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4c92d4",
          borderRadius: 2,
          fontSize: 16,
        },
      }}
    >
      <Sider
        collapsible
        theme="light"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          // backgroundColor: "#cdb4db",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: ".5rem",
            padding: "10px 0px",
            cursor: "pointer",
          }}
        >
          UMS
        </div>
        <Menu
          style={{
            borderTop: "1px solid #e8e8e8",
            borderRight: "none",
          }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>
    </ConfigProvider>
  );
};

export default SideBar;
