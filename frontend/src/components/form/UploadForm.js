import { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Input, Stack, useToast } from "@chakra-ui/react";
import { imageService } from "@/services/image";
import { useUserProvider } from "@/context/UserContext";

const UploadForm = () => {
    const { user, updateUserPicture } = useUserProvider()
    const preview = "https://via.placeholder.com/200"
    const [file, setFile] = useState(preview)
    const [image, setImage] = useState(null)
    const inputImage = useRef(null)
    const toast = useToast()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (user.picture) {
            setFile(imageService.ipfsToHTTPS(user.picture))
        }
    }, [user.picture])

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
            updateUserPicture(imageURL)

            toast({
                description: "Image enregistrée avec succès.",
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

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }

    return (
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
                        Télécharger cette photo
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default UploadForm;