import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useUserProvider } from '@/context/UserContext';
import { validateService } from '@/services/validate';

const BicForm = () => {
    const [isError, setIsError] = useState(false)
    const { handleChangeForm, user } = useUserProvider()

    function handleFocusOut(e) {
        const value = e.target.value
        setIsError(!validateService.isBic(value))
    }

    return (
        <FormControl isInvalid={isError} isRequired mb="1rem">
            <FormLabel>BIC</FormLabel>
            <Input type='text' placeholder='BIC sans espace' onBlur={(e) => handleFocusOut(e)} value={user.bic ?? ''} name='bic' onChange={handleChangeForm} />
            {isError && (
                <FormErrorMessage>Le BIC saisi n'est pas valide.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default BicForm