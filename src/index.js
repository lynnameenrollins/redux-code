import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'

import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import colorReducer from './reducer/ColorReducer';
import ColorReducer2 from './reducer/ColorReducer2';

import {myLogger} from './middleware/myLogger';
import {myLogger2} from './middleware/myLogger2';
import logger from 'redux-logger';
import postReducer from './reducer/postReducer';
import Posts from './component/Posts';
import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

const devTools = composeWithDevTools(applyMiddleware(myLogger,myLogger2))

const store = createStore(ColorReducer2, devTools);
// const store = createStore(postReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App/>
    {/* <Posts/> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
