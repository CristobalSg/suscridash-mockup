import React from 'react';
import { Layout, Menu} from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
        >
            {/* <div style={{ color: '#fff', fontSize: '20px' }}>Suscridash</div> */}
          <Menu.Item key="/">
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">Acerca de</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: '24px 16px 0', padding: '24px', backgroundColor: '#fff' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Suscridash ©{new Date().getFullYear()} creado con ❤️ por ti
      </Footer>
    </Layout>
  );
};

export default MainLayout;
