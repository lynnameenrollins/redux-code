import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import counterReducer from './reducer/CounterReducer';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import colorReducer from './reducer/ColorReducer';
import ColorReducer2 from './reducer/ColorReducer2';

import myLogger from './middleware/myLogger'
// const store = createStore(colorReducer);
const store = createStore(ColorReducer2, applyMiddleware(myLogger));



ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
