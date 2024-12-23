import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainIndex from '../pages/Main/Index';
import Header from 'components/Header/Header';
import User from 'pages/User/User';
import Reservation from 'pages/Reservation/Reservation';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/user" element={<User />} />
        <Route path="/detail" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default Router;
