import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import Galery from '../pages/Galery';
import Login from './Login';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Galery />} />
        <Route path="/adm" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;