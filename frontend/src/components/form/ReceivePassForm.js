import { FormControl, RadioGroup, HStack, Radio, Text } from '@chakra-ui/react';
import { useUserProvider } from '@/context/UserContext';

const ReceivePassForm = () => {
    const { handleChangeForm, user } = useUserProvider()

    return (
        <>
            <FormControl as='fieldset' isRequired mb="1rem">
                <RadioGroup defaultValue={user.receivePlace ?? 'home'}>
                    <HStack spacing='24px'>
                        <Radio name="receivePlace" value="home" onChange={handleChangeForm}>Recevoir à l'adresse ci-dessus</Radio>
                        <Radio name="receivePlace" value="pdv" onChange={handleChangeForm}>
                            Réception sous 10 jours (hors week-end et jours fériés) après validation de votre dossier
                            Retirer dans un point de vente
                        </Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <Text mt="3rem">Après la validation de votre dossier sous 72h dans un point de vente et sur présentation d'un justificatif d'identité.
                Les informations recueillies sur ce formulaire par le GIE Comutitres font l’objet d’un traitement informatique dans le cadre de la délivrance et l’utilisation du passe Navigo tel que défini dans les CGVU du passe Navigo . Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement, exercer votre droit à la limitation du traitement de vos données et introduire une réclamation auprès de la CNIL. Ces droits peuvent être exercés aux adresses mentionnées dans les CGVU.
                Consultez notre politique de confidentialité sur les informations collectées.</Text>
        </>
    )
};

export default ReceivePassForm