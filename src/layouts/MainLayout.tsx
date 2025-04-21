import { useState } from "react";
import React from 'react';
import { Avatar, Badge, Button, Col, Dropdown, Layout, Menu, Row, Space} from 'antd';
import { Link } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { DashboardOutlined, HomeOutlined, InfoCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Header } from "antd/es/layout/layout";

const { Content, Footer } = Layout;

const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="/">Inicio</Link>,
  },
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: "/subcriptions",
    icon: <InfoCircleOutlined />,
    label: <Link to="/subcriptions">Planes</Link>,
  },
  {
    key: "/about",
    icon: <InfoCircleOutlined />,
    label: <Link to="/about">Acerca de</Link>,
  },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
    // const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* Espacio izquiero para el menu */}
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: 6,
          }}
        />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
            
        </Sider>
        <Layout>

        <Header style={{ padding: 0, background: "#fff" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: 16, width: 64, height: 64 }}
              />
            </Col>
            <Col style={{ marginRight: 20 }}>
              <Space size="large">
                <Badge count={5}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
                <Dropdown
                  menu={{
                    items: [
                      { key: "1", label: "Perfil" },
                      { key: "2", label: "Configuración" },
                      { key: "3", label: "Cerrar sesión" },
                    ],
                }}
                >
                  <Space>
                    <Avatar style={{ backgroundColor: "#1677ff" }} icon={<UserOutlined />} />
                    <span>Admin</span>
                  </Space>
                </Dropdown>
              </Space>
            </Col>
          </Row>
        </Header>

      {/* <Header style={{ backgroundColor: '#001529' }}> */}
        {/* <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          > */}
            {/* <div style={{ color: '#fff', fontSize: '20px' }}>Suscridash</div> */}
          {/* <Menu.Item key="/">
            <Link to="/">Inicio</Link>
            </Menu.Item>
            
          <Menu.Item key="/about">
          <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          <Menu.Item key="/about">
          <Link to="/about">Acerca de</Link>
          </Menu.Item> */}
        {/* </Menu> */}
      {/* </Header> */}

      {/* CONTENIDO PRINCIPAL */}
            <Content style={{ margin: '24px 16px 0', padding: '24px', backgroundColor: '#fff' }}>
                {children}
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Suscridash ©{new Date().getFullYear()} creado por Cristobal Sandoval
            </Footer>
          </Layout>
        </Layout>
    );
};

export default MainLayout;
