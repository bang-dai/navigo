import { FormControl, FormErrorMessage, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import React, { useState } from 'react';
import { validateService } from '@/services/validate';
import { useUserProvider } from '@/context/UserContext';

const PhoneForm = ({ label, name }) => {
    const [isError, setIsError] = useState(false)
    const { handleChangeForm, user } = useUserProvider()

    const handleFocusOut = (e) => {
        setIsError(!validateService.isPhone(e.target.value))
    }

    return (
        <FormControl isInvalid={isError} mb="1rem">
            <FormLabel>{label}</FormLabel>
            <Input type='input' onBlur={(e) => handleFocusOut(e)} value={user[name] ?? ''} name={name} onChange={handleChangeForm} />
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