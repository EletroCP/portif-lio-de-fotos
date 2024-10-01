import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Router from './components/Router';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
