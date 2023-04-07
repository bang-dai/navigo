import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const InputForm = ({ label, refInput, required = true }) => {
    const [isError, setIsError] = useState(false)

    function handleFocusOut(e) {
        const value = e.target.value
        setIsError(required && value.length === 0)
    }

    return (
        <FormControl isInvalid={isError} isRequired={required} mb="1rem">
            <FormLabel>{label}</FormLabel>
            <Input type='text' onBlur={(e) => handleFocusOut(e)} ref={refInput} />
            {isError && (
                <FormErrorMessage>Information incorrecte, veuillez la saisir à nouveau.</FormErrorMessage>
            )}
        </FormControl>
    )
};

export default InputForm;