import { useState } from "react";
import React from 'react';
import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, Space} from 'antd';
import { Link } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { DashboardOutlined, HomeOutlined, InfoCircleOutlined, LoginOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
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
    key: "/users",
    icon: <InfoCircleOutlined />,
    label: <Link to="/users">Usuarios</Link>,
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
    const [isMobile, setIsMobile] = useState(false);
    // const location = useLocation();

    return (
        <Layout style={{ minHeight: '100vh'}}>
            {isMobile && !collapsed && (
                <div
                onClick={() => setCollapsed(true)}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)', // sombra
                    zIndex: 900, // menor que el menú pero encima del contenido
                }}
                />
            )}

            {/* Espacio izquiero para el menu */}
            <Sider 
                trigger={null} 
                collapsible 
                collapsed={collapsed} 
                theme="light"
                breakpoint="md"
                collapsedWidth={isMobile ? 0 : 80} // en mobile desaparece
                onBreakpoint={(broken) => {
                    // responsiv mobile, se rompe el collapsed
                    console.log(broken);
                    setIsMobile(broken);
                    setCollapsed(broken);
                }}
                style={{
                    position:isMobile ? 'fixed': 'static',
                    height: '100vh',
                    zIndex : 1000,
                    left: collapsed ? '-200px' : '0',
                    top: 0,
                    transition: 'left 0.3s ease',
                }}  
                >
                    <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: "rgba(0, 0, 0, 0.2)",
                        borderRadius: 6,
                    }}
                    />
                <Menu
                //theme="light"
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
                            {/* BOTONES LOGIN Y REGISTER */}
                            <Space 
                                style={{
                                    paddingRight:'40px',
                                    display:isMobile ? 'none' : ''
                                }}>
                                <Link to="/login">
                                    <Button type="primary" icon={<LoginOutlined />} size="large" style={{ marginRight: 10 }}>
                                        Iniciar sesión
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button type="default" icon={<UserAddOutlined />} size="large">
                                        Registrarse
                                    </Button>
                                </Link>
                            </Space>

                            {/* Avatar perfil */}
                            <Space size="large">
                                <Dropdown
                                menu={{
                                    items: [
                                    { 
                                        key: "1", 
                                        // label: "Perfil" 
                                        label: <Link to="/profile">Perfil</Link>,
                                    },
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
