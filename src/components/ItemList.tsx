import { Button, Card, List } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

interface Item {
  id: number;
  name: string;
  email?: string;
  company?: string;
}

interface ItemListProps {
  title: string; // Título de la lista
  items: Item[]; // Array de usuarios o empresas
  showAddButton?: boolean; // Mostrar el botón "+" (por defecto false)
  onAdd?: () => void; // Función al apretar "+"
  onEdit?: (item: Item) => void; // Función al apretar "editar"
}

const ItemList: React.FC<ItemListProps> = ({
  title,
  items,
  showAddButton = false,
  onAdd,
  onEdit,
}) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2>{title}</h2>
        {showAddButton && (
          <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
            Agregar
          </Button>
        )}
      </div>

      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              extra={
                onEdit && (
                  <Button
                    type="link"
                    icon={<EditOutlined />}
                    onClick={() => onEdit(item)}
                  />
                )
              }
            >
              {item.email && <p>Email: {item.email}</p>}
              {item.company && <p>Empresa: {item.company}</p>}
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default ItemList;

