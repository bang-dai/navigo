import { useToast } from '@chakra-ui/react';
import Axios from "@/services/axios";
import React, { useContext, useState } from 'react';

const UserContext = React.createContext(null)

export function useUserProvider() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUserProvider must be used within a UserProvider')
    }

    return context
}


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const toast = useToast()

    const getForfaits = async () => {
        try {
            const response = await Axios.get('/forfaits')
            if (response.status !== 200) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data
        } catch (err) {
            toast({
                description: err.message,
                status: 'error',
                isClosable: true,
            })
        }
    }

    return (
        <UserContext.Provider value={{ getForfaits }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;