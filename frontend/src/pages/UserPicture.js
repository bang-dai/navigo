import { Button, Card, CardBody, CardHeader, Heading, useToast } from "@chakra-ui/react";
import Layout from "./Layout";
import UploadForm from "@/components/form/UploadForm";
import { useUserProvider } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const UserPicture = () => {
    const { user } = useUserProvider()
    const navigate = useNavigate()
    const toast = useToast()

    const handleNext = () => {
        if (!user.picture) {
            toast({
                description: "Merci de télécharger votre photo avant de continuer.",
                status: 'error',
                isClosable: true,
            })
        } else {
            navigate('/paiement')
        }
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
            <UploadForm />


            <Button colorScheme='blue' onClick={handleNext}>Enregistrer et passer à l'étape suivante</Button>
        </Layout>
    );
};

export default UserPicture;