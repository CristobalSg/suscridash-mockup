import React from 'react'
import MainLayout from '../layouts/MainLayout';
import SubscriptionCardsAntd from '../components/subscription-cards-antd';


const Subscriptions: React.FC = () => {
    return (
        <MainLayout>
            <SubscriptionCardsAntd></SubscriptionCardsAntd>
        </MainLayout>
    )
}

export default Subscriptions