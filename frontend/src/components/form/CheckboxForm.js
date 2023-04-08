import { Checkbox, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useUserProvider } from '@/context/UserContext';

const CheckboxForm = ({ label, name }) => {
    const { handleChangeForm, user } = useUserProvider()

    return (
        <Checkbox checked={user[name]} name={name} onChange={handleChangeForm}>{label}</Checkbox>
    )
};

export default CheckboxForm;