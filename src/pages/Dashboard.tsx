import React, {useEffect, useState}from 'react'
import MainLayout from '../layouts/MainLayout';
// import SubscriptionCardsAntd from '../components/subscription-cards-antd';
import {Card, Table, Badge, Typography, Row, Col, Statistic, Progress} from 'antd';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { dataSource } from '../assets/data/dataSource'

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Edad",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Dirección",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Estado",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Badge
        status={
          status === "active"
            ? "success"
            : status === "pending"
            ? "warning"
            : "error"
        }
        text={
          status === "active"
            ? "Activo"
            : status === "pending"
            ? "Pendiente"
            : "Inactivo"
        }
      />
    ),
  },
];

const Dashboard: React.FC = () => {
    // Logica para mostrar la susbs. en el dasboard
    const [subscription, setSubscription] = useState<{ plan: string; date: string } | null>(null);

    useEffect(() => {
      const sub = localStorage.getItem("userSubscription");
      if (sub) {
        setSubscription(JSON.parse(sub));
      }
    }, []);

    return (
        <MainLayout>
            <Typography.Title level={4}>Panel de Control</Typography.Title>

          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            <Col xs={24} sm={12} lg={6}>
              <Card bordered={false}>
                <Statistic
                  title="Usuarios Subscritos"
                  value={502}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card bordered={false}>
                <Statistic
                  title="Nuevos Usuarios"
                  value={93}
                  valueStyle={{ color: "#1677ff" }}
                  prefix={<TeamOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card bordered={false}>
                <Statistic
                  title="Ingresos"
                  value={25600}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix="$"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card bordered={false}>
                <Statistic
                  title="Tasa de Conversión"
                  value={13.5}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
            <Row gutter={[16, 16]}>
              {subscription && (
            <Col xs={24} lg={6}>
              <Card bordered={false}>
                <Statistic
                  title="Plan Actual"
                  value={subscription.plan === "mensual" ? "Mensual" : "Anual"}
                />
                <Typography.Text type="secondary">
                  Desde: {new Date(subscription.date).toLocaleDateString()}
                </Typography.Text>
              </Card>
            </Col>
          )}
            <Col xs={24} lg={12}>
              <Card title="Progreso de Proyectos" bordered={false}>
                <Typography.Paragraph>Proyecto A</Typography.Paragraph>
                <Progress percent={30} />
                <Typography.Paragraph>Proyecto B</Typography.Paragraph>
                <Progress percent={50} status="active" />
                <Typography.Paragraph>Proyecto C</Typography.Paragraph>
                <Progress percent={70} status="exception" />
                <Typography.Paragraph>Proyecto D</Typography.Paragraph>
                <Progress percent={100} />
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card title="Usuarios Recientes" bordered={false}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{ pageSize: 3 }}
                  size="small"
                />
              </Card>
            </Col>
          </Row>
        </MainLayout>
    )
}

export default Dashboard
