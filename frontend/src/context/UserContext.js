import { useToast } from '@chakra-ui/react';
import Axios from "@/services/axios";
import React, { useContext, useState } from 'react';
import { storageService } from '@/services/storage';

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

    const syncUser = () => {
        const storageUser = storageService.getUser()
        if (Object.keys(user).length === 0 && Object.keys(storageUser).length !== 0) {
            setUser(storageUser)
        }
    }

    /**
     * Set Month number and Id forfait selected by user
     * @param {number} startFrom Month from 0 to 11
     * @param {number} idForfait Id of the forfait
     */
    const setForfait = (startFrom, idForfait) => {
        const newUser = {
            ...user,
            startFrom,
            idForfait
        }
        setUser(newUser)
        storageService.saveUser(newUser)
    }

    const updateUserInfos = () => {
        const newUser = {
            civility: 'M',
            optin: false,
            country: 'France',
            receivePlace: 'home',
            ...user
        }
        setUser(newUser)
        storageService.saveUser(newUser)
    }

    const updateUserPicture = (picture) => {
        const newUser = {
            ...user,
            picture
        }
        setUser(newUser)
        storageService.saveUser(newUser)
    }

    const handleChangeForm = (e) => {
        //console.log(e.target.name)
        //console.log(e.target.type)
        setUser({
            ...user,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }


    return (
        <UserContext.Provider value={{ user, setUser, getForfaits, setForfait, updateUserInfos, syncUser, handleChangeForm, updateUserPicture }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;