import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/forfait')
    }

    return (
        <Flex direction="column" textAlign='left' m="2rem">
            <Card>
                <CardHeader>
                    <Heading as="h1">Souscription Navigo Annuel : Souscription forfait Navigo Annuel</Heading>
                </CardHeader>
                <CardBody>
                    <Text as='b'>Forfait Navigo Annuel</Text>
                    <Text>Vous désirez souscrire un forfait Navigo Annuel payable par prélèvement ou carte bancaire au prix de 11 mois pour un an de transport.
                        A noter : pour les paiements par prélèvement, le contrat est reconduit automatiquement au bout de 12 mois.
                        Vous recevrez le passe chargé avec le titre de transport, au choix, à domicile sous un délai maximum de 10 jours (hors week-end et jours fériés) ou mis à disposition dans une agence commerciale des transporteurs, certains comptoirs RATP ou en Guichets Services Navigo SNCF 3 jours ouvrés après la commande sur présentation d'un justificatif d'identité.
                    </Text>
                    <Text mt="3rem">Dans les pages suivantes, vous allez :</Text>
                    <ul>
                        <li>sélectionner votre forfait,</li>
                        <li>renseigner les coordonnées et l'adresse du titulaire du passe,</li>
                        <li>sélectionner le mode de réception du passe,</li>
                        <li>fournir une photo d'identité soit en la téléchargeant soit en utilisant la webcam,</li>
                        <li>renseigner vos coordonnées bancaires afin d'autoriser le prélèvement ou vous munir de votre carte bancaire.</li>
                    </ul>
                    <Text>A noter : pour souscrire un forfait valable pour le mois suivant, vous devez souscrire en ligne avant le 15 de ce mois.</Text>
                    <Text mb="3rem">Pour obtenir votre passe Navigo Annuel immédiatement, rendez vous en agence commerciale des transporteurs, certains comptoirs RATP ou en Guichet Services Navigo SNCF muni(e) d'un justificatif d'identité.</Text>

                    <Text as='b'>Forfait Navigo Annuel Tarification Senior</Text>
                    <p>Vous désirez souscrire un forfait Navigo Annuel Tarification Senior payable par prélèvement chaque mois de l'année, soit pendant 12 mensualités.</p>
                    <Text>Ce tarif est réservé aux personnes âgées de 62 ans et plus sans activité professionnelle ou exerçant une activité professionnelle strictement inférieure à un mi-temps.</Text>
                    <Text mt="3rem">Pour demander la Tarification Senior :</Text>
                    <Text>si vous ne possédez pas de forfait Navigo Annuel : munissez-vous d'un justificatif d'identité, d'un RIB, et rendez vous en agence des transporteurs ou certains comptoirs RATP pour obtenir votre passe Navigo Annuel immédiatement,
                        si vous possédez un forfait Navigo Annuel : connectez-vous à votre espace personnel pour demander la Tarification Senior.</Text>
                    <Text>A noter : pour bénéficier de la Tarification Senior pour le mois suivant, vous devez souscrire en ligne avant le 10 de ce mois.</Text>

                    <Button colorScheme='blue' onClick={handleClick} mt="3rem">Continuer</Button>
                </CardBody>
            </Card>
        </Flex>
    );
};

export default Home;