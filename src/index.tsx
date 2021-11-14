import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './translations/i18n'
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./store/auth-context";

ReactDOM.render(
  <React.StrictMode>
      <AuthContextProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
