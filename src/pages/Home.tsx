import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Typography, Row, Col, Card, Button, Space } from 'antd';
import {
  DollarCircleOutlined,
  BarChartOutlined,
  AppstoreAddOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const handleCreatePlan = () => {
    // Acción al hacer clic, puede navegar o abrir modal
    console.log("Crear primer plan");
  };

  return (
    <MainLayout>
      <Typography>
        <Title level={2}>Bienvenido a Suscridash</Title>
        <Paragraph>
          Suscridash es una plataforma diseñada para que empresas puedan ofrecer suscripciones a su público, mientras nosotros nos encargamos de todo: <strong>cobros automáticos, paneles de control avanzados</strong> y <strong>una experiencia atractiva para los usuarios finales</strong>.
        </Paragraph>
      </Typography>

      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} md={8}>
          <Card bordered={false} hoverable>
            <Space direction="vertical">
              <AppstoreAddOutlined style={{ fontSize: 32, color: "#1677ff" }} />
              <Title level={4}>Gestión de Suscripciones</Title>
              <Paragraph>
                Permite a tus clientes contratar y gestionar sus suscripciones fácilmente desde una interfaz clara.
              </Paragraph>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card bordered={false} hoverable>
            <Space direction="vertical">
              <BarChartOutlined style={{ fontSize: 32, color: "#52c41a" }} />
              <Title level={4}>Dashboard Inteligente</Title>
              <Paragraph>
                Visualiza métricas clave de rendimiento en tiempo real: ingresos, retención, y más.
              </Paragraph>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card bordered={false} hoverable>
            <Space direction="vertical">
              <DollarCircleOutlined style={{ fontSize: 32, color: "#faad14" }} />
              <Title level={4}>Cobros Automatizados</Title>
              <Paragraph>
                Nosotros nos encargamos del proceso de pago y facturación, para que vos te enfoques en crecer.
              </Paragraph>
            </Space>
          </Card>
        </Col>
      </Row>

      <div style={{ textAlign: 'center' }}>
        <Button type="primary" icon={<PlusOutlined />} size="large" onClick={handleCreatePlan}>
          Crear tu primer plan
        </Button>
      </div>
    </MainLayout>
  );
};

export default Home;
