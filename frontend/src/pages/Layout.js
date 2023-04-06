import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Layout = ({ children, title }) => {
    return (
        <div className='Layout'>
            <Flex direction="column" textAlign='left' m="2rem">
                <Heading>{title}</Heading>
                {children}
            </Flex>
        </div>
    );
};

export default Layout;