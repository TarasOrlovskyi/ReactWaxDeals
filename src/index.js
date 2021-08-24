import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {positions, Provider as AlertProvider, transitions, types} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// let renderAll = () => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);
// };

// renderAll();
//
// store.subscribe(() => {
//     let currentState = store.getState();
//     renderAll(currentState);
//   }
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
