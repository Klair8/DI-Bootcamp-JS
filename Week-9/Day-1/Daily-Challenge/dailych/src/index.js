import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reportWebVitals from './reportWebVitals';
// import combine from './reducers/index';
// const store = createStore(combine);

import {root_reducer} from './reducers/moviesReducer'
const store = createStore(root_reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
