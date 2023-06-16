import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import "./assets/reset.css"
import "./assets/root.css"
import "./assets/base.css"

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
