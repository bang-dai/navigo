import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, useToast } from "@chakra-ui/react";
import Layout from "./Layout";
import BicForm from "@/components/form/BicForm";
import IbanForm from "../components/form/IbanForm";
import { validateService } from "@/services/validate";
import { useUserProvider } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";


const Payment = () => {
    const { user, updateUserPayment } = useUserProvider()
    const navigate = useNavigate()
    const toast = useToast()

    const isValidForm = () => {
        return (validateService.isBic(user.bic) && validateService.isIban(user.iban))
    }

    const handleClick = () => {
        if (isValidForm()) {
            updateUserPayment()
            navigate('/recapitulatif')
        } else {
            toast({
                description: 'Le formulaire contient des erreurs!',
                status: 'error',
                isClosable: true,
            })
        }
    }

    return (
        <Layout title='Souscription Navigo Annuel : Mode de paiement' step='3'>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Payer en 11 fois par prélèvements</Heading>
                </CardHeader>
                <CardBody>
                    <BicForm />
                    <IbanForm />
                </CardBody>
                <CardFooter>
                    <Text>Votre compte bancaire doit être domicilié en Europe dans l’espace SEPA. Les comptes épargnes ne sont pas autorisés.</Text>
                </CardFooter>
            </Card>

            <Button colorScheme='blue' onClick={handleClick}>Continuer</Button>
        </Layout>
    );
};

export default Payment;