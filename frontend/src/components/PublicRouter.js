import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '@/utils/Error';
import { Home, Forfait } from '@/pages';
import UserInfo from '../pages/UserInfo';
import UserPicture from '../pages/UserPicture';

const PublicRouter = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Home />} />
                <Route path="/forfait" element={<Forfait />} />
                <Route path="/coordonnees" element={<UserInfo />} />
                <Route path="/photo" element={<UserPicture />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;