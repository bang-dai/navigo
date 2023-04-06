import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '@/utils/Error';
import { Home, Forfait } from '@/pages';

const PublicRouter = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Home />} />
                <Route path="/forfait" element={<Forfait />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;