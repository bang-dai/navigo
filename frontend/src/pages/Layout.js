import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Navigation from '@/components/Navigation';

const Layout = ({ children, title, step = 0 }) => {
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