import { useRef } from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, Heading, Text } from "@chakra-ui/react";
import { useUserProvider } from "@/context/UserContext";
import Layout from "./Layout";
import EmailForm from "@/components/form/EmailForm";
import InputForm from "@/components/form/InputForm";
import PhoneForm from "@/components/form/PhoneForm";
import DateForm from "@/components/form/DateForm";
import CivilityForm from "@/components/form/CivilityForm";
import ZipcodeForm from "../components/form/ZipcodeForm";
import ReceivePassForm from "../components/form/ReceivePassForm";


const UserInfo = () => {
    const { updateUserInfos } = useUserProvider()
    const inputMan = useRef()
    const inputWoman = useRef()
    const inputName = useRef()
    const inputFirstName = useRef()
    const inputBirthday = useRef()
    const inputMobile = useRef()
    const inputPhone = useRef()
    const inputEmail = useRef()
    const inputOptin = useRef()
    const inputAddress = useRef()
    const inputAddress1 = useRef()
    const inputZipcode = useRef()
    const inputCity = useRef()
    const inputReceiveHome = useRef()
    const inputReceivePdv = useRef()

    const handleClick = () => {
        const civility = inputMan.current.checked ? inputMan.current.value : inputWoman.current.value
        const receivePlace = inputReceiveHome.current.checked ? inputReceiveHome.current.value : inputReceivePdv.current.value

        updateUserInfos(
            civility,
            inputName.current.value,
            inputFirstName.current.value,
            inputBirthday.current.value,
            inputMobile.current.value,
            inputPhone.current.value,
            inputEmail.current.value,
            inputOptin.current.checked)
    }

    return (
        <Layout title='Souscription Navigo Annuel : Informations titulaire' step={1}>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Veuillez renseigner les coordonnées du titulaire du passe</Heading>
                    <Text>Vous pourrez ainsi suivre l’avancement de votre demande de souscription en ligne.</Text>
                </CardHeader>
                <CardBody>
                    <CivilityForm label='Civilité' refMan={inputMan} refWoman={inputWoman} />
                    <InputForm label='Nom' refInput={inputName} />
                    <InputForm label='Prenom' refInput={inputFirstName} />
                    <DateForm label='Date de naissance' refInput={inputBirthday} />
                    <PhoneForm label='Telephone portable' refInput={inputMobile} />
                    <PhoneForm label='Telephone fixe' refInput={inputPhone} />
                    <EmailForm refInput={inputEmail} />
                    <Checkbox ref={inputOptin}>J’accepte de recevoir par e-mail et/ou SMS des offres et informations commerciales de la part des entreprises de transports en commun d’Île-de-France membres du GIE Comutitres, de leurs partenaires, et d’Île-de-France Mobilités.</Checkbox>
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Veuillez renseigner l'adresse du titulaire du passe</Heading>
                </CardHeader>
                <CardBody>
                    <InputForm label='N° et nom de la rue' refInput={inputAddress} required={false} />
                    <InputForm label="Complément d'adresse 1" refInput={inputAddress1} required={false} />
                    <ZipcodeForm refZipcode={inputZipcode} refCity={inputCity} />
                </CardBody>
            </Card>
            <Card mb="2rem">
                <CardHeader>
                    <Heading size='md'>Mode de réception du passe</Heading>
                </CardHeader>
                <CardBody>
                    <ReceivePassForm refHome={inputReceiveHome} refPDV={inputReceivePdv} />
                </CardBody>
            </Card>
            <Button colorScheme='blue' onClick={handleClick}>Passer à l'étape suivante</Button>
        </Layout>
    );
};

export default UserInfo;