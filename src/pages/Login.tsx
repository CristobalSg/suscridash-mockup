import React from 'react';
import { Button, Form, Input, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface LoginFormValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {

    const onFinish = (values: LoginFormValues) => {
        console.log('Login info:', values);
    };

    return (
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#03045E'}}>
            <Card style={{ width: 400 }}>
                <Title level={2} style={{ textAlign: 'center' }}>Iniciar sesión</Title>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Correo electrónico" name="email" rules={[{ required: true, message: 'Ingrese su correo' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: 'Ingrese su contraseña' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            <Link to="/">
                                Iniciar sesión 
                            </Link>
                        </Button>
                    </Form.Item>
                </Form>
                <div style={{ textAlign: 'center' }}>
                    ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;
