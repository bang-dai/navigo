import { useEffect, useRef, useState } from "react";
import { useUserProvider } from "@/context/UserContext";
import Layout from "./Layout";
import { FormControl, FormLabel, FormHelperText, Select, RadioGroup, Radio, HStack, Button } from "@chakra-ui/react";
import { momentService } from "@/services/moment";
import { useNavigate } from "react-router-dom";


const Forfait = () => {
    const { getForfaits, setForfait } = useUserProvider()
    const [forfaits, setForfaits] = useState()
    const radioMonth = useRef(null)
    const radioNextMonth = useRef(null)
    const inputForfait = useRef(null)
    const firstCall = useRef(true)
    const startMonth = momentService.getMonth()
    const startNextMonth = momentService.getMonth(1)
    const navigate = useNavigate()

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
        return () => {
            firstCall.current = false
        }
    }, [getForfaits])

    const getLabel = (forfait) => {
        const priceMonth = forfait.priceByMonth.toFixed(2) + '€'
        const priceYear = forfait.priceByYear.toFixed(2) + '€'

        return `${forfait.name} à ${priceMonth}/mois ou ${priceYear} annuel`
    }

    const handleClick = () => {
        const month = radioMonth.current.checked ? radioMonth.current.value : radioNextMonth.current.value
        const idForfait = inputForfait.current.value
        setForfait(month, idForfait)
        navigate("/coordonnees")
    }

    return (
        <Layout title='Souscription Navigo Annuel : Sélection du forfait'>
            <h2>Vous devez compléter votre demande avant le 15 du mois en cours pour bénéficier du forfait dès le mois prochain</h2>

            {forfaits && (
                <>
                    <FormControl as='fieldset' mt='2rem' mb='2rem'>
                        <FormLabel as='legend'>Date de début de votre forfait*</FormLabel>
                        <RadioGroup defaultValue={startMonth.id}>
                            <HStack spacing='24px'>
                                <Radio ref={radioMonth} name="radioMonth" value={startMonth.id}>{startMonth.label}</Radio>
                                <Radio ref={radioNextMonth} name="radioMonth" value={startNextMonth.id}>{startNextMonth.label}</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl mt='2rem' mb='2rem'>
                        <FormLabel>Zonage et tarif TTC(1)*</FormLabel>
                        <Select id="select-forfait" ref={inputForfait}>
                            {forfaits.map((forfait) =>
                                <option key={forfait.id} value={forfait.id}>{getLabel(forfait)}</option>
                            )}
                        </Select>
                        <FormHelperText>Chaque mensualité est prélevée en début de mois (au plus tôt le 5) pendant 11 mois. Les frais de dossier (7,60€ TTC) sont prélevés avec la première échéance.</FormHelperText>
                    </FormControl>
                    <Button colorScheme='blue' onClick={handleClick}>Continuer</Button>

                    <p>
                        (1)
                        Le tarif mentionné est le tarif actuel. Il est donné à titre indicatif.
                        Comme mentionné dans les Conditions Générales de Vente et d'Utilisation, toute modification tarifaire décidée par Île-de-France Mobilités est répercutée sur les prélèvements suivant la date d’entrée en vigueur de ladite décision.
                    </p>
                </>
            )}
        </Layout>
    );
};

export default Forfait;