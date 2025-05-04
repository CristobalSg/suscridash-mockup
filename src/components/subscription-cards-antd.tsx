import { Card, Button, Typography, Badge, Divider, Space} from "antd"

const { Title, Text} = Typography

//const openSuccessNotification = () => {
 // notification.success({
  //  message: "¡Suscripción exitosa!",
   // description: "Puedes ver tu plan en el perfil.",
   // placement: "topRight",
  //});
//};

const handleSubscribe = (plan: 'mensual' | 'anual') => {
  const subscription = {
    plan,
    date: new Date().toISOString(),
  };

  localStorage.setItem('userSubscription', JSON.stringify(subscription));
  //openSuccessNotification();
  alert("¡Suscripción exitosa!\nPuedes ver tu plan en el perfil.");
};

const SubscriptionCardsAntd: React.FC = () => (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {/* Tarjeta de suscripción mensual */}
            <Card
            bordered={true}
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
            bodyStyle={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
            <div>
                <Title level={3} style={{ marginTop: 0 }}>
                    Plan Mensual
                </Title>
                <Text type="secondary">Paga mes a mes sin compromiso</Text>

                <div style={{ margin: "24px 0" }}>
                    <Title level={2} style={{ marginBottom: 0 }}>
                        $9.99{" "}
                    <Text type="secondary" style={{ fontSize: "16px" }}>
                        /mes
                    </Text>
                    </Title>
                </div>

                <Divider style={{ margin: "16px 0" }} />
                <Space direction="vertical" style={{ width: "100%", marginBottom: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Text>Acceso a todo el contenido</Text>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Text>Soporte por correo electrónico</Text>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Text>Cancela cuando quieras</Text>
                    </div>
                </Space>
            </div>

            <div style={{ marginTop: "auto" }}>
                <Button type="primary" size="large" block
                    onClick={() => handleSubscribe("mensual")}>
                    Suscribirse Ahora
                </Button>
            </div>
            </Card>

            {/* Tarjeta de suscripción anual */}
            <Badge.Ribbon text="Ahorra 20%" color="#1677ff">
                <Card
                    bordered={true}
                    style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderColor: "#1677ff",
                    }}
                    bodyStyle={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                    <div>
                    <Title level={3} style={{ marginTop: 0 }}>
                        Plan Anual
                    </Title>
                    <Text type="secondary">La mejor opción para ahorrar</Text>

                    <div style={{ margin: "24px 0" }}>
                        <Title level={2} style={{ marginBottom: 0 }}>
                            $95.88{" "}
                            <Text type="secondary" style={{ fontSize: "16px" }}>
                                /año
                            </Text>
                        </Title>
                        <div>
                            <Text delete type="secondary" style={{ fontSize: "14px" }}>
                                $119.88
                            </Text>
                            <Text type="success" style={{ fontSize: "14px", marginLeft: "8px" }}>
                                Ahorras $24.00
                            </Text>
                        </div>
                    </div>

                    <Divider style={{ margin: "16px 0" }} />

                    <Space direction="vertical" style={{ width: "100%", marginBottom: "24px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Text>Acceso a todo el contenido</Text>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Text>Soporte prioritario</Text>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Text>Contenido exclusivo</Text>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Text>Actualizaciones anticipadas</Text>
                        </div>
                    </Space>
                    </div>

                    <div style={{ marginTop: "auto" }}>
                        <Button type="primary" size="large" block
                            onClick={() => handleSubscribe("anual")}>
                            Obtener Oferta Anual
                        </Button>
                    </div>
                </Card>
            </Badge.Ribbon>
        </div>
    </div>
)

export default SubscriptionCardsAntd
