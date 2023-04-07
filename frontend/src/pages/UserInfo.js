import { Button, Card, CardBody, CardHeader, Checkbox, Heading, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import EmailForm from "@/components/form/EmailForm";
import { useRef } from "react";
import InputForm from "../components/form/InputForm";
import PhoneForm from "../components/form/PhoneForm";
import DateForm from "../components/form/DateForm";
import CivilityForm from "../components/form/CivilityForm";

const UserInfo = () => {
    const inputMan = useRef()
    const inputWoman = useRef()
    const inputName = useRef()
    const inputFirstName = useRef()
    const inputBirthday = useRef()
    const inputMobile = useRef()
    const inputPhone = useRef()
    const inputEmail = useRef()

    const handleClick = () => {
        console.log(inputEmail.current.value)
        console.log(inputName.current.value)
        console.log(inputFirstName.current.value)
        console.log(inputBirthday.current.value)

        const civility = inputMan.current.checked ? inputMan.current.value : inputWoman.current.value
        console.log(civility)
    }

    return (
        <Layout title='Souscription Navigo Annuel : Informations titulaire'>
            <Card>
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
                    <Checkbox>J’accepte de recevoir par e-mail et/ou SMS des offres et informations commerciales de la part des entreprises de transports en commun d’Île-de-France membres du GIE Comutitres, de leurs partenaires, et d’Île-de-France Mobilités.</Checkbox>
                </CardBody>
            </Card>

            <Button colorScheme='blue' onClick={handleClick}>Passer à l'étape suivante</Button>
        </Layout>
    );
};

export default UserInfo;