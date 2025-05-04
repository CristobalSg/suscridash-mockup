import React, {useEffect, useState}from 'react'
import { Card, Avatar, Descriptions, Button, Statistic, Typography,Divider} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import MainLayout from '../layouts/MainLayout';

const userMock = {
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
  phone: '+56 9 1234 5678',
  address: 'Calle Falsa 123, Santiago, Chile',
  bio: 'Desarrollador frontend apasionado por React y el diseño de interfaces limpias.',
  avatar: 'https://i.pravatar.cc/150?img=3', // imagen random
};



const Perfil: React.FC = () => {
    // Logica para mostrar la susbs. en el perfil
    const [subscription, setSubscription] = useState<{ plan: string; date: string } | null>(null);

    useEffect(() => {
      const sub = localStorage.getItem("userSubscription");
      if (sub) {
        setSubscription(JSON.parse(sub));
      }
    }, []);

  return (
    <MainLayout>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <Card
          style={{ width: 400 }}
          actions={[
            <Button type="primary" icon={<EditOutlined />}>
              Editar Perfil
            </Button>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar size={80} src={userMock.avatar} />}
            title={userMock.name}
            description={userMock.bio}
          />
          <Descriptions column={1} style={{ marginTop: '1rem' }}>
            <Descriptions.Item label="Correo">{userMock.email}</Descriptions.Item>
            <Descriptions.Item label="Teléfono">{userMock.phone}</Descriptions.Item>
            <Descriptions.Item label="Dirección">{userMock.address}</Descriptions.Item>
          </Descriptions>
          <Divider></Divider>
              {subscription && (
              <Card>
                <Statistic
                  title="Plan Actual"
                  value={subscription.plan === "mensual" ? "Mensual" : "Anual"}
                />
                <Typography.Text type="secondary">
                  Desde: {new Date(subscription.date).toLocaleDateString()}
                </Typography.Text>
                <Divider></Divider>
                <Button danger block onClick={() => {
                  localStorage.removeItem("userSubscription");
                  
                  setSubscription(null);
                }}>
                  Cancelar Suscripción
                </Button>
              </Card>
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default Perfil;
