import React from 'react';
import { Button, Form, Input, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface LoginFormValues {
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const onFinish = (values: LoginFormValues) => {
        console.log('Login info:', values);
    };

    return (
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background:'#03045E'}}>
            <Card style={{ width: 400}}>
                <Title level={2} style={{ textAlign: 'center' }}>Crear cuenta</Title>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Nombre completo" name="name" rules={[{ required: true, message: 'Ingrese su nombre' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Correo electrónico" name="email" rules={[{ required: true, message: 'Ingrese su correo' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: 'Cree una contraseña' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block >
                            <Link to="/">
                                Registrarse
                            </Link>
                        </Button>
                    </Form.Item>
                </Form>
                <div style={{ textAlign: 'center' }}>
                    ¿Ya tienes una cuenta? <Link to="/login">Login</Link>
                </div>
            </Card>
        </div>
    );
};

export default Register;