import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ItemList from '../components/ItemList';
import { dataUsers } from '../assets/data/dataUsers'

const Users: React.FC = () => {
    const handleAddUser = () => {
        console.log("Agregar Usuario");
    };

    const handleEditUser = (dataUsers) => {
        console.log("Editar empresa:", dataUsers);
    };

    return (
        <MainLayout>
            <ItemList
                title="Usuarios"
                items={dataUsers}
                showAddButton
                onAdd={handleAddUser}
                onEdit={handleEditUser}
            ></ItemList>
        </MainLayout>
    )
}

export default Users
