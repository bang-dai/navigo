import axios from 'axios';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { validateService } from '@/services/validate';
import { useUserProvider } from '@/context/UserContext';


const ZipcodeForm = () => {
    const refCity = useRef()
    const [isError, setIsError] = useState(false)
    const { handleChangeForm, user, setUser } = useUserProvider()

    const handleFocusOut = async (e) => {
        const value = e.target.value
        const error = value.length !== 5 || !validateService.isZipcode(value)
        setIsError(error)
        if (!error) {
            const data = await callCityApi(value)
            //setCity(data[0].libelleAcheminement || '')
            const city = data[0].libelleAcheminement || ''
            refCity.current.value = city
            setUser({
                ...user,
                city
            })
        }
    }

    const callCityApi = async (zipcode) => {
        try {
            const response = await axios.get('https://apicarto.ign.fr/api/codes-postaux/communes/' + zipcode)
            if (response.status !== 200) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <FormControl isInvalid={isError} isRequired mb="1rem">
                <FormLabel>Code postal</FormLabel>
                <Input type='text' onBlur={(e) => handleFocusOut(e)} value={user.zipcode ?? ''} name='zipcode' onChange={handleChangeForm} />
                {isError && (
                    <FormErrorMessage>Information incorrecte, veuillez la saisir à nouveau.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isRequired mb="1rem">
                <FormLabel>Ville</FormLabel>
                <Input type='text' value={user.city ?? ''} name='city' ref={refCity} disabled />
            </FormControl>
            <FormControl isRequired mb="1rem">
                <FormLabel>Pays</FormLabel>
                <Input type='text' value='France' disabled />
            </FormControl>
        </>
    )
};

export default ZipcodeForm;