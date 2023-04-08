import { Button, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Layout from "./Layout";

const UserPicture = () => {


    const handleUploadPhoto = () => {

    }

    const handleClick = () => {

    }

    return (
        <Layout title='Souscription Navigo Annuel : Photo titulaire' step='2'>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Votre photo doit être :</Heading>
                </CardHeader>
                <CardBody>
                    <ul>
                        <li>récente, de face, tête nue, sur fond neutre et clair, type photo d'identité</li>
                        <li>en couleur exclusivement</li>
                        <li>aux formats : JPEG, GIF ou PNG</li>
                        <li>d'une taille maximale de 10Mo</li>
                    </ul>
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>ATTENTION : Toute photo non conforme entraîne le rejet de votre demande.</Heading>
                </CardHeader>
                <CardBody>
                    <Button colorScheme='blue' onClick={handleUploadPhoto}>Télécharger une photo</Button>
                </CardBody>
            </Card>

            <Button colorScheme='blue' onClick={handleClick}>Enregistrer et passer à l'étape suivante</Button>
        </Layout>
    );
};

export default UserPicture;