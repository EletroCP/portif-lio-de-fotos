import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../pages/App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/main" /> } />
        <Route path="/main" element={ <App /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;