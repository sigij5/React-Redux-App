import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { triviaReducer } from './reducers/triviaReducer'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

const store = createStore(triviaReducer, applyMiddleware(thunk))
console.log('This is my state', store.getState())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

