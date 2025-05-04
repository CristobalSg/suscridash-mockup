import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import { Header } from "antd/es/layout/layout";
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, Space} from 'antd';
import { DashboardOutlined, HomeOutlined, InfoCircleOutlined, LoginOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

const allMenuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="/">Inicio</Link>,
    allowedRoles: ["admin", "empresa", "user"],
  },
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
    allowedRoles: ["admin","empresa"],
  },
  {
    key: "/subcriptions",
    icon: <InfoCircleOutlined />,
    label: <Link to="/subcriptions">Planes</Link>,
    allowedRoles: ["user"],
  },
  {
    key: "/users",
    icon: <InfoCircleOutlined />,
    label: <Link to="/users">Usuarios</Link>,
    allowedRoles: ["admin", "empresa"],
  },
  {
    key: "/about",
    icon: <InfoCircleOutlined />,
    label: <Link to="/about">Acerca de</Link>,
    allowedRoles: ["admin", "empresa", "user"],
  },
  {
    key: "/sub-companies",
    icon: <InfoCircleOutlined />,
    label: <Link to="/subcriptions-companies">Subcripciones</Link>,
    allowedRoles: ["admin", "empresa"],
  },
];


interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    
    //const role = localStorage.getItem("userRole") as 'admin' | 'empresa' | 'user' | null;
    const user = JSON.parse(localStorage.getItem("userRole") || "{}");
    console.log("User",user)
    const role = user.role ?? "user";
    console.log(role)
    
    //const menuItems = allMenuItems.filter(item => item.allowedRoles.includes(role ?? 'admin'));
    const menuItems = allMenuItems.filter(item => item.allowedRoles.includes(role));
    console.log(menuItems)

    console.log(allMenuItems)
    
    const handleLogout = () => {
    localStorage.clear(); // Limpia todos los datos, incl. rol
    navigate("/login");   // Redirige al login
  };

    const [userName, setUserName] = useState<string>("Usuario");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setUserName(parsed.name || "Usuario");
        }
    }, []);

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
                                    { key: "3", label: "Cerrar sesión", onClick: handleLogout},
                                    ],
                                }}
                                >
                                <Space>
                                    <Avatar style={{ backgroundColor: "#1677ff" }} icon={<UserOutlined />} />
                                    <span>{userName}</span>
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
