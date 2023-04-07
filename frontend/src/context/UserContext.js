import { useToast } from '@chakra-ui/react';
import Axios from "@/services/axios";
import React, { useContext, useState } from 'react';
import { validateService } from '@/services/validate';

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
    /**
     * Set Month number and Id forfait selected by user
     * @param {number} startFrom Month from 0 to 11
     * @param {number} idForfait Id of the forfait
     */
    const setForfait = (startFrom, idForfait) => {
        setUser({
            ...user,
            startFrom,
            idForfait
        })
    }

    const updateUserInfos = (civility, name, firstName, birthday, mobile, phone, email, optin) => {
        if (validateService.isText(name)
            && validateService.isText(firstName)
            && validateService.isDate(birthday)
            && validateService.isPhone(mobile)
            && validateService.isPhone(phone)
            && validateService.isEmail(email)) {

            setUser({
                ...user,
                civility,
                name,
                firstName,
                birthday,
                mobile,
                phone,
                email,
                optin
            })

            toast({
                description: 'ok',
                status: 'success',
                isClosable: true,
            })

        } else {
            toast({
                description: 'Le formulaire contient des erreurs!',
                status: 'error',
                isClosable: true,
            })
        }
    }

    return (
        <UserContext.Provider value={{ getForfaits, setForfait, updateUserInfos }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;