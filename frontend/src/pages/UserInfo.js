import { Button, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { useUserProvider } from "@/context/UserContext";
import Layout from "./Layout";
import EmailForm from "@/components/form/EmailForm";
import InputForm from "@/components/form/InputForm";
import PhoneForm from "@/components/form/PhoneForm";
import DateForm from "@/components/form/DateForm";
import CivilityForm from "@/components/form/CivilityForm";
import ZipcodeForm from "@/components/form/ZipcodeForm";
import ReceivePassForm from "@/components/form/ReceivePassForm";
import { useNavigate } from "react-router-dom";
import CheckboxForm from "../components/form/CheckboxForm";


const UserInfo = () => {
    const { updateUserInfos, user } = useUserProvider()
    const navigate = useNavigate()

    const handleClick = () => {
        /* const civility = inputMan.current.checked ? inputMan.current.value : inputWoman.current.value
        const receivePlace = inputReceiveHome.current.checked ? inputReceiveHome.current.value : inputReceivePdv.current.value

        const success = updateUserInfos(
            civility,
            inputName.current.value,
            inputFirstName.current.value,
            inputBirthday.current.value,
            inputMobile.current.value,
            inputPhone.current.value,
            inputEmail.current.value,
            inputOptin.current.checked,
            inputAddress.current.value,
            inputAddress1.current.value,
            inputZipcode.current.value,
            inputCity.current.value,
            receivePlace
        )
        if (success) {
            navigate("/photo")
        } */
    }


    return (
        <Layout title='Souscription Navigo Annuel : Informations titulaire' step={1}>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Veuillez renseigner les coordonnées du titulaire du passe</Heading>
                    <Text>Vous pourrez ainsi suivre l’avancement de votre demande de souscription en ligne.</Text>
                </CardHeader>
                <CardBody>
                    <CivilityForm label='Civilité' />
                    <InputForm label='Nom' name='name' />
                    <InputForm label='Prenom' name='firstName' />
                    <DateForm label='Date de naissance' name='birthday' />
                    <PhoneForm label='Telephone portable' name='mobile' />
                    <PhoneForm label='Telephone fixe' name='phone' />
                    <EmailForm name='email' />
                    <CheckboxForm name='optin' label="J’accepte de recevoir par e-mail et/ou SMS des offres et informations commerciales de la part des entreprises de transports en commun d’Île-de-France membres du GIE Comutitres, de leurs partenaires, et d’Île-de-France Mobilités." />

                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Veuillez renseigner l'adresse du titulaire du passe</Heading>
                </CardHeader>
                <CardBody>
                    <InputForm label='N° et nom de la rue' name='address' />
                    <InputForm label="Complément d'adresse 1" name='address1' required={false} />
                    <ZipcodeForm />
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Mode de réception du passe</Heading>
                </CardHeader>
                <CardBody>
                    <ReceivePassForm />
                </CardBody>
            </Card>
            <Button colorScheme='blue' onClick={handleClick}>Passer à l'étape suivante</Button>
        </Layout>
    );
};

export default UserInfo;