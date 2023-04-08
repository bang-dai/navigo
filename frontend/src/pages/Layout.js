import React, { useEffect, useRef } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';
import { useUserProvider } from '@/context/UserContext';

const Layout = ({ children, title, step = 0 }) => {
    const { syncUser } = useUserProvider()
    const firstCall = useRef(true)

    useEffect(() => {
        if (firstCall.current) {
            syncUser()
        }
        return () => {
            firstCall.current = false
        }
    }, [syncUser])

    return (
        <div className='Layout'>
            <Flex direction="column" textAlign='left' m="2rem">
                <Heading as="h1">{title}</Heading>
                <Navigation step={step} />
                {children}
            </Flex>
        </div>
    );
};

export default Layout;