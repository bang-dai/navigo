import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { validateService } from '@/services/validate';
import axios from 'axios';

const ZipcodeForm = ({ refZipcode, refCity }) => {
    const [isError, setIsError] = useState(false)
    const [city, setCity] = useState('')

    const handleFocusOut = async (e) => {
        const value = e.target.value
        const error = value.length !== 5 || !validateService.isZipcode(value)
        setIsError(error)
        if (!error) {
            const data = await callCityApi(value)
            setCity(data[0].libelleAcheminement || '')
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
                <Input type='text' onBlur={(e) => handleFocusOut(e)} ref={refZipcode} />
                {isError && (
                    <FormErrorMessage>Information incorrecte, veuillez la saisir à nouveau.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isRequired mb="1rem">
                <FormLabel>Ville</FormLabel>
                <Input type='text' ref={refCity} value={city} disabled />
            </FormControl>
            <FormControl isRequired mb="1rem">
                <FormLabel>Pays</FormLabel>
                <Input type='text' value='France' disabled />
            </FormControl>
        </>
    )
};

export default ZipcodeForm;