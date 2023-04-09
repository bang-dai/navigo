import { Checkbox } from '@chakra-ui/react';
import { useUserProvider } from '@/context/UserContext';

const CheckboxForm = ({ label, name }) => {
    const { handleChangeForm, user } = useUserProvider()

    return (
        <Checkbox isChecked={user[name]} name={name} onChange={handleChangeForm}>{label}</Checkbox>
    )
};

export default CheckboxForm;