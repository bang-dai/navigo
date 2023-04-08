import { FormControl, FormErrorMessage, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import React, { useState } from 'react';
import { validateService } from '@/services/validate';
import { useUserProvider } from '@/context/UserContext';

const EmailForm = ({ name }) => {
    const [isError, setIsError] = useState(false)
    const { handleChangeForm, user } = useUserProvider()

    const handleFocusOut = (e) => {
        setIsError(!validateService.isEmail(e.target.value))
    }

    return (
        <FormControl isInvalid={isError} isRequired mb="1rem">
            <FormLabel>Email</FormLabel>
            <Input type='email' onBlur={(e) => handleFocusOut(e)} value={user[name] ?? ''} name={name} onChange={handleChangeForm} />
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