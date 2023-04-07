import { FormControl, FormErrorMessage, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import React, { useState } from 'react';

const EmailForm = ({ refInput }) => {
    const [isError, setIsError] = useState(false)

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleFocusOut = (e) => {
        setIsError(!isValidEmail(e.target.value))
    }

    return (
        <FormControl isInvalid={isError} isRequired mb="1rem">
            <FormLabel>Email</FormLabel>
            <Input type='email' onBlur={(e) => handleFocusOut(e)} ref={refInput} />
            {!isError ? (
                <FormHelperText>
                    Email obligatoire car pas de connexion pour cette demo.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Email invalide.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default EmailForm;