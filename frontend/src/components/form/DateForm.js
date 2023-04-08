import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { validateService } from '@/services/validate';
import { useUserProvider } from '@/context/UserContext';

const DateForm = ({ label, name }) => {
    const [isError, setIsError] = useState(false)
    const { handleChangeForm, user } = useUserProvider()

    function handleFocusOut(e) {
        const value = e.target.value
        setIsError(!validateService.isDate(value))
    }

    return (
        <FormControl isInvalid={isError} isRequired mb="1rem">
            <FormLabel>{label}</FormLabel>
            <Input type='date' onBlur={(e) => handleFocusOut(e)} value={user[name] ?? ''} name={name} onChange={handleChangeForm} />
            {isError && (
                <FormErrorMessage>Information incorrecte, veuillez la saisir à nouveau.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default DateForm;