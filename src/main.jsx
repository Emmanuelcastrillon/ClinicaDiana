import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Util/global.context.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ContextProvider>
       <App/>
    </ContextProvider>
   
</BrowserRouter>
)
