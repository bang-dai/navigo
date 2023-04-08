import { useRef, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Input, Stack, useToast } from "@chakra-ui/react";
import Layout from "./Layout";
import { imageService } from "@/services/image";

const UserPicture = () => {
    const preview = "https://via.placeholder.com/200"
    const [file, setFile] = useState(preview)
    const [image, setImage] = useState(null)
    const inputImage = useRef(null)
    const toast = useToast()
    const [isLoading, setLoading] = useState(false)

    const handleCreate = async () => {
        if (file === preview) {
            toast({
                description: "L'image est obligatoire!",
                status: 'error',
                isClosable: true,
            })
            return
        }
        setLoading(true)
        try {
            const metadata = await imageService.storeImage(image)
            const imageURL = metadata.data.image.href

            toast({
                description: "Image enregistrée avec succès:" + imageURL,
                status: 'success',
                isClosable: true,
            })
        }
        catch (e) {
            toast({
                description: "Une erreur inconnu s'est produite!",
                status: 'error',
                isClosable: true,
            })
        }

        setLoading(false)
    }

    const handleNext = () => {

    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
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
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mb="2rem">
                <Image
                    boxSize="200px"
                    objectFit='cover'
                    src={file}
                    alt='ajouter ma photo'
                    borderRadius='lg'
                    fallbackSrc='https://via.placeholder.com/200x200'
                />
                <Stack>
                    <CardHeader><Heading size='md'>ATTENTION : Toute photo non conforme entraîne le rejet de votre demande.</Heading></CardHeader>
                    <CardBody>
                        <Input placeholder='Image*' type="file" onChange={handleChange} ref={inputImage} />
                    </CardBody>
                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' onClick={handleCreate} isLoading={isLoading}>
                            Télécharger une photo
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>

            <Button colorScheme='blue' onClick={handleNext}>Enregistrer et passer à l'étape suivante</Button>
        </Layout>
    );
};

export default UserPicture;