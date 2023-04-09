import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import InputForm from "@/components/form/InputForm";

const handleClick = () => {

}

const Payment = () => {
    return (
        <Layout title='Souscription Navigo Annuel : Mode de paiement' step='3'>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Payer en 11 fois par prélèvements</Heading>
                </CardHeader>
                <CardBody>
                    <InputForm label='BIC' name='bic' />
                    <InputForm label='IBAN' name='iban' />
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