import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Forfait, UserInfo, UserPicture, Payment, Summary, Error, End } from '@/pages';

const PublicRouter = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Home />} />
                <Route path="/forfait" element={<Forfait />} />
                <Route path="/coordonnees" element={<UserInfo />} />
                <Route path="/photo" element={<UserPicture />} />
                <Route path="/paiement" element={<Payment />} />
                <Route path="/recapitulatif" element={<Summary />} />
                <Route path="/end" element={<End />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;