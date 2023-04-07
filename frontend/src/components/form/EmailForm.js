import { FormControl, FormErrorMessage, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import React, { useState } from 'react';
import { validateService } from '@/services/validate';

const EmailForm = ({ refInput }) => {
    const [isError, setIsError] = useState(false)

    const handleFocusOut = (e) => {
        setIsError(!validateService.isEmail(e.target.value))
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