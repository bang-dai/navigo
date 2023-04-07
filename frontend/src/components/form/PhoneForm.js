import { FormControl, FormErrorMessage, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import React, { useState } from 'react';

const PhoneForm = ({ label, refInput, required = false }) => {
    const [isError, setIsError] = useState(false)

    const isValidPhone = (phone) => {
        if (!required && phone.length === 0) {
            return true
        }
        const regex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
        return regex.test(phone);
    };

    const handleFocusOut = (e) => {
        setIsError(!isValidPhone(e.target.value))
    }

    return (
        <FormControl isInvalid={isError} mb="1rem">
            <FormLabel>{label}</FormLabel>
            <Input type='input' onBlur={(e) => handleFocusOut(e)} ref={refInput} />
            {!isError ? (
                <FormHelperText>
                    Votre téléphone portable nous servira à finaliser votre souscription et à améliorer la gestion de votre forfait. Il ne sera en aucun cas utilisé à des fins commerciales sans votre autorisation.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Information incorrecte, veuillez la saisir à nouveau.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default PhoneForm;