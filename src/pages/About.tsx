import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { Card , Typography} from 'antd';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
    return (
        <MainLayout>
            <Card style={{ margin: "40px auto", maxWidth: 800 }}>
                <Title level={2}>¿Qué es Suscridash?</Title>
                <Paragraph>
                    <strong>Suscridash</strong> es una plataforma diseñada para ayudar a las empresas a gestionar suscripciones de manera simple y eficiente.
                    Nuestro objetivo es permitirte enfocarte en tu negocio, mientras nosotros nos encargamos de todo el proceso: desde el cobro automático hasta la visualización de métricas en dashboards personalizables.
                </Paragraph>

                <Title level={3}>¿Qué puedes hacer con Suscridash?</Title>
                <ul>
                    <li>🧾 Crear y administrar planes de suscripción personalizados</li>
                    <li>💳 Cobrar automáticamente a tus clientes</li>
                    <li>📊 Obtener estadísticas detalladas en tiempo real</li>
                    <li>🧑‍💼 Presentar tus planes directamente a los usuarios desde nuestra plataforma</li>
                </ul>

                <Title level={3}>Nuestra misión</Title>
                <Paragraph>
                    Democratizar el acceso a los modelos de suscripción, brindando herramientas potentes incluso a pequeñas y medianas empresas. Queremos que cualquier negocio pueda escalar su propuesta sin preocuparse por lo técnico.
                </Paragraph>
            </Card> 
        </MainLayout>
    )
}

export default Home