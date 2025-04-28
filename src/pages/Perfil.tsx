import React from 'react';
import { Card, Avatar, Descriptions, Button } from 'antd';
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
        </Card>
      </div>
    </MainLayout>
  );
};

export default Perfil;
