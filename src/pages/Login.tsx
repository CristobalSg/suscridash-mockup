import React, { useState } from 'react';
import { Button, Form, Input, Typography, Card, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

interface LoginFormValues {
  email: string;
  password: string;
  role: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<LoginFormValues>();

  const onFinish = (values: LoginFormValues) => {
    console.log('Login info:', values);
    // Simulamos que guardamos el usuario logueado en localStorage
    localStorage.setItem('user', JSON.stringify(values));
    navigate('/'); // o navega a /dashboard, /perfil, etc.
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#03045E' }}>
      <Card style={{ width: 400 }}>
        <Title level={2} style={{ textAlign: 'center' }}>Iniciar sesión</Title>
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            email: 'admin@example.com',
            password: '123456',
            role: 'admin',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[{ required: true, message: 'Ingrese su correo' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Ingrese su contraseña' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Rol"
            name="role"
            rules={[{ required: true, message: 'Seleccione un rol' }]}
          >
            <Select placeholder="Seleccione un rol">
              <Option value="admin">Administrador</Option>
              <Option value="user">Usuario</Option>
              <Option value="company">Empresa</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
