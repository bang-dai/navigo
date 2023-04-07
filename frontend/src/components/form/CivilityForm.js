import { FormControl, FormLabel, RadioGroup, HStack, Radio } from '@chakra-ui/react';

const CivilityForm = ({ label, refMan, refWoman }) => {
    return (
        <FormControl as='fieldset' isRequired mb="1rem">
            <FormLabel>{label}</FormLabel>
            <RadioGroup defaultValue='M'>
                <HStack spacing='24px'>
                    <Radio ref={refMan} name="civility" value="M">Monsieur</Radio>
                    <Radio ref={refWoman} name="civility" value="Mrs">Madame</Radio>
                </HStack>
            </RadioGroup>
        </FormControl>
    )
};

export default CivilityForm;