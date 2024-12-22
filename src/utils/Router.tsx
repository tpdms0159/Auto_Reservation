import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainIndex from '../pages/Main/Index';
import Header from 'components/Header/Header';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainIndex />} />
      </Routes>
    </>
  );
}

export default Router;
