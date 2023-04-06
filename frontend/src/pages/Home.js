import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { Button } from '@chakra-ui/react'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/forfait')
    }

    return (
        <Layout title="Souscription Navigo Annuel : Souscription forfait Navigo Annuel">
            <h2>Forfait Navigo Annuel</h2>
            <p>Vous désirez souscrire un forfait Navigo Annuel payable par prélèvement ou carte bancaire au prix de 11 mois pour un an de transport.
                A noter : pour les paiements par prélèvement, le contrat est reconduit automatiquement au bout de 12 mois.
                Vous recevrez le passe chargé avec le titre de transport, au choix, à domicile sous un délai maximum de 10 jours (hors week-end et jours fériés) ou mis à disposition dans une agence commerciale des transporteurs, certains comptoirs RATP ou en Guichets Services Navigo SNCF 3 jours ouvrés après la commande sur présentation d'un justificatif d'identité.
            </p>
            <p>Dans les pages suivantes, vous allez :</p>
            <ul>
                <li>sélectionner votre forfait,</li>
                <li>renseigner les coordonnées et l'adresse du titulaire du passe,</li>
                <li>sélectionner le mode de réception du passe,</li>
                <li>fournir une photo d'identité soit en la téléchargeant soit en utilisant la webcam,</li>
                <li>renseigner vos coordonnées bancaires afin d'autoriser le prélèvement ou vous munir de votre carte bancaire.</li>
            </ul>
            <p>A noter : pour souscrire un forfait valable pour le mois suivant, vous devez souscrire en ligne avant le 15 de ce mois.</p>
            <p>Pour obtenir votre passe Navigo Annuel immédiatement, rendez vous en agence commerciale des transporteurs, certains comptoirs RATP ou en Guichet Services Navigo SNCF muni(e) d'un justificatif d'identité.</p>

            <h2>Forfait Navigo Annuel Tarification Senior</h2>
            <p>Vous désirez souscrire un forfait Navigo Annuel Tarification Senior payable par prélèvement chaque mois de l'année, soit pendant 12 mensualités.</p>

            <Button colorScheme='blue' onClick={handleClick}>Continuer</Button>
        </Layout>
    );
};

export default Home;