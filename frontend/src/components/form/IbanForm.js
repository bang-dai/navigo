import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useUserProvider } from '@/context/UserContext';
import { validateService } from '@/services/validate';

const IbanForm = () => {
    const [isError, setIsError] = useState(false)
    const { handleChangeForm, user } = useUserProvider()

    function handleFocusOut(e) {
        const value = e.target.value
        setIsError(!validateService.isIban(value))
    }

    return (
        <FormControl isInvalid={isError} isRequired mb="1rem">
            <FormLabel>IBAN</FormLabel>
            <Input type='text' placeholder='IBAN sans espace' onBlur={(e) => handleFocusOut(e)} value={user.iban ?? ''} name='iban' onChange={handleChangeForm} />
            {isError && (
                <FormErrorMessage>Le IBAN saisi n’est pas conforme. Merci de saisir un nouveau IBAN.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default IbanForm