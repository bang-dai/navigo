import { Button, Card, CardBody, CardHeader, Heading, Text, Badge, Flex, Image } from "@chakra-ui/react";
import Layout from "./Layout";
import { useUserProvider } from "@/context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { imageService } from "@/services/image";
import { useEffect, useRef, useState } from "react";

const Summary = () => {
    const { user, getForfaits, postUser } = useUserProvider()
    const [forfaits, setForfaits] = useState([])
    const [file, setFile] = useState("https://via.placeholder.com/200")
    const navigate = useNavigate()
    const firstCall = useRef(true)

    useEffect(() => {
        const getData = async () => {
            const data = await getForfaits()
            if (data === undefined) {
                return
            }
            setForfaits(data)
        }
        if (firstCall.current) {
            getData()

        }
        if (user.picture) {
            setFile(imageService.ipfsToHTTPS(user.picture))
        }
        return () => {
            firstCall.current = false
        }
    }, [user.picture, getForfaits])


    const handleClick = async () => {
        const success = await postUser()
        if (success) {
            navigate('/end')
        }
    }
    return (
        <Layout title='Souscription Navigo Annuel : Récapitulatif' step='4'>
            <Text>Veuillez vérifier que les informations renseignées sont exactes</Text>
            <Card mb="2rem">
                <CardHeader>
                    <Flex direction='row' justifyContent='space-between'>
                        <Heading size='md'>Forfait</Heading>
                        <Link to='/forfait'>Modifier</Link>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Badge>Date de début du forfait</Badge>
                    <Text>{user.startFrom}</Text>

                    <Badge>Zones du forfait</Badge>
                    <Text>{forfaits[user.idForfait - 1]?.name}</Text>

                    <Badge>Tarif mensuel TTC</Badge>
                    <Text>{forfaits[user.idForfait - 1]?.priceByMonth.toFixed(2)}€</Text>
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Flex direction='row' justifyContent='space-between'>
                        <Heading size='md'>Coordonnées</Heading>
                        <Link to='/coordonnees'>Modifier</Link>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Flex direction='row'>
                        <div>
                            <Badge>Civilité</Badge>
                            <Text>{user.civility}</Text>

                            <Badge>Nom</Badge>
                            <Text>{user.name}</Text>

                            <Badge>Prénom</Badge>
                            <Text>{user.firstName}</Text>

                            <Badge>Date de naissance</Badge>
                            <Text>{user.birthday}</Text>
                        </div>
                        <div>
                            <Badge>Numéro et nom de rue</Badge>
                            <Text>{user.address}</Text>

                            <Badge>Code postal</Badge>
                            <Text>{user.zipcode}</Text>

                            <Badge>Ville</Badge>
                            <Text>{user.city}</Text>

                            <Badge>Pays</Badge>
                            <Text>{user.country}</Text>

                            <Badge>Tel portable</Badge>
                            <Text>{user.mobile}</Text>

                            <Badge>Tel fixe</Badge>
                            <Text>{user.phone}</Text>

                            <Badge>Email</Badge>
                            <Text>{user.email}</Text>

                            <Badge>Mode de réception du passe navigo</Badge>
                            <Text>{user.receivePlace}</Text>
                        </div>
                    </Flex>
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Flex direction='row' justifyContent='space-between'>
                        <Heading size='md'>Photo</Heading>
                        <Link to='/photo'>Modifier</Link>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Image
                        boxSize="200px"
                        objectFit='cover'
                        src={file}
                        alt='ajouter ma photo'
                        borderRadius='lg'
                        fallbackSrc='https://via.placeholder.com/200x200'
                    />
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Flex direction='row' justifyContent='space-between'>
                        <Heading size='md'>Mode de paiement</Heading>
                        <Link to='/paiement'>Modifier</Link>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Badge>BIC</Badge>
                    <Text>{user.bic}</Text>

                    <Badge>IBAN</Badge>
                    <Text>{user.iban}</Text>

                    <Badge>Titulaire du compte</Badge>
                    <Text>{user.firstName} {user.name}</Text>
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Veuillez vérifier attentivement votre e-mail affiché ci-dessus</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Les informations recueillies sur ce formulaire par le GIE Comutitres font l’objet d’un traitement informatique dans le cadre de la délivrance et l’utilisation du passe Navigo tel que défini dans les CGVU du passe Navigo . Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement, exercer votre droit à la limitation du traitement de vos données et introduire une réclamation auprès de la CNIL. Ces droits peuvent être exercés aux adresses mentionnées dans les CGVU.
                        Consultez notre politique de confidentialité sur les informations collectées.</Text>
                    <Button colorScheme='blue' onClick={handleClick}>Je certifie que ces données sont exactes et je valide mon inscription.</Button>
                </CardBody>
            </Card>
        </Layout>
    );
};

export default Summary;