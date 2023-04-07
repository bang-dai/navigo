import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const DateForm = ({ label, refInput }) => {
    const [isError, setIsError] = useState(false)

    function handleFocusOut(e) {
        const value = e.target.value
        setIsError(value.length === 0)
    }

    return (
        <FormControl isInvalid={isError} isRequired mb="1rem">
            <FormLabel>{label}</FormLabel>
            <Input type='date' onBlur={(e) => handleFocusOut(e)} ref={refInput} />
            {isError && (
                <FormErrorMessage>Information incorrecte, veuillez la saisir à nouveau.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default DateForm;