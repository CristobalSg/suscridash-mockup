import React from 'react'
import MainLayout from '../layouts/MainLayout';
import SubscriptionCardsAntd from '../components/subscription-cards-antd';
import ItemList from '../components/ItemList';
import { companies } from '../assets/data/companies'

const Subscriptions: React.FC = () => {
    const handleAddCompany = () => {
        console.log("Agregar empresa");
    };

    const handleEditCompany = (company) => {
        console.log("Editar empresa:", company);
    };

    return (
        <MainLayout>
            <SubscriptionCardsAntd></SubscriptionCardsAntd>
            <ItemList
                title="Empresas"
                items={companies}
                showAddButton
                onAdd={handleAddCompany}
                onEdit={handleEditCompany}
            ></ItemList>
        </MainLayout>
    )
}

export default Subscriptions
