import { FormControl, FormLabel, RadioGroup, HStack, Radio } from '@chakra-ui/react';
import { useUserProvider } from '@/context/UserContext';

const CivilityForm = ({ label }) => {
    const { handleChangeForm, user } = useUserProvider()

    return (
        <FormControl as='fieldset' isRequired mb="1rem">
            <FormLabel>{label}</FormLabel>
            <RadioGroup defaultValue={user.civility ?? 'M'}>
                <HStack spacing='24px'>
                    <Radio name="civility" value="M" onChange={handleChangeForm}>Monsieur</Radio>
                    <Radio name="civility" value="Mrs" onChange={handleChangeForm}>Madame</Radio>
                </HStack>
            </RadioGroup>
        </FormControl>
    )
};

export default CivilityForm;