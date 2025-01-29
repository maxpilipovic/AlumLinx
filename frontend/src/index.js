import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Header, Login} from './pages/Landing';
import {Header2} from './pages/Homepage';
import {Menu} from './elements/menu.js';
import {Column} from './elements/column.js';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-container">
      {/* <Header />
      <Login /> */}
      <Header />
      {/* <Menu /> */}

      
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
