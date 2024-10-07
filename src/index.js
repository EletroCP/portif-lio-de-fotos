import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './context/ContextProvider';
import RouterComponent from './pages/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterComponent />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
