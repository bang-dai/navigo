import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';

const Navigation = ({ step }) => {
    return (
        <Tabs mb="3rem" mt="3rem" defaultIndex={step} isManual >
            <TabList>

                <Tab isDisabled>Sélection du forfait</Tab>
                <Tab isDisabled>Informations titulaire</Tab>
                <Tab isDisabled>Photo titulaire</Tab>
                <Tab isDisabled>Mode de paiment</Tab>
                <Tab isDisabled>Récapitulatif</Tab>
            </TabList>
        </Tabs>
    );
};

export default Navigation;