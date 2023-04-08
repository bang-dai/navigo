import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({ step }) => {
    return (
        <Tabs mb="3rem" mt="3rem" defaultIndex={step} colorScheme='blue'>
            <TabList>
                <Tab><Link to='/forfait'>Sélection du forfait</Link></Tab>
                <Tab isDisabled={step < 1}>
                    {step < 1 ? ('Informations titulaire') : (
                        <Link to='/coordonnees'>Informations titulaire</Link>
                    )}
                </Tab>
                <Tab isDisabled={step < 2}>
                    {step < 2 ? ('Photo titulaire') : (
                        <Link to='/photo'>Photo titulaire</Link>
                    )}
                </Tab>
                <Tab isDisabled={step < 3}>
                    {step < 3 ? ('Mode de paiment') : (
                        <Link to='/paiement'>Mode de paiment</Link>
                    )}
                </Tab>
                <Tab isDisabled={step < 4}>
                    {step < 4 ? ('Récapitulatif') : (
                        <Link to='/recapitulatif'>Récapitulatif</Link>
                    )}
                </Tab>
            </TabList>
        </Tabs>
    );
};

export default Navigation;